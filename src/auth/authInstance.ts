import {
  UserAgentApplication, Configuration, AuthenticationParameters,
  AuthResponse
} from 'msal';


export const isIE = () => {
  const ua = window.navigator.userAgent;
  const msie = ua.indexOf("MSIE ") > -1;
  const msie11 = ua.indexOf("Trident/") > -1;
  // If you as a developer are testing using Edge InPrivate mode, please add "isEdge" to the if check
  const isEdge = ua.indexOf("Edge/") > -1;
  return msie || msie11 || isEdge;
};


const envObj = process.env;
const authority = "https://login.chinacloudapi.cn/common";
const msalConfig: Configuration = {
  auth: {
    clientId: envObj.VUE_APP_MSAL_CLIENT_ID as string,
    authority,
    redirectUri: () => window.location.origin + '/redirect',
    // envObj.VUE_APP_MSAL_REDIRECT_URI,
    navigateToLoginRequestUrl: false,
    postLogoutRedirectUri: () => window.location.origin,
    // envObj.VUE_APP_MSAL_POST_LOGOUT_REDIRECT_URI,
    validateAuthority: false
  },
  cache: {
    cacheLocation: "localStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: isIE(), // Set this to "true" if you are having issues on IE11 or Edge
  }
};

export const MSALObj = new UserAgentApplication(msalConfig);

MSALObj.handleRedirectCallback((error, res) => {
  /* res && console.log(res);
  error && console.error(error); */
});

export const loginRequest: AuthenticationParameters = {
  scopes: ["https://graph.chinacloudapi.cn/User.Read"],
  forceRefresh: false,
  // extraScopesToConsent: ['https://microsoftgraph.chinacloudapi.cn/Application.ReadWrite.All']

};

export const tokenRequest: AuthenticationParameters = {
  scopes: ["https://graph.chinacloudapi.cn/User.Read"]
};

export const GetLogAccount = () => {
  return MSALObj.getAccount();
}

export const MSALObjLogin = () => {
  MSALObj.loginRedirect(loginRequest);
}

export const MSALObjLogout = (userName = '') => {
  MSALObj.authority = authority;
  MSALObj.logout(userName);
}

export const AcquireToken = async (): Promise<AuthResponse> => {
  if (GetLogAccount()) {
    try {
      return MSALObj.acquireTokenSilent(tokenRequest);
    } catch (error) {
      console.error(error, 'authinstance')
      return new Promise((resolve, reject) => {
        reject(null);
      });
    }
  }

  return new Promise((resolve, reject) => {
    reject(null)
  });
}

export const MSALObjAcquireTokenRedirect = () => {
  MSALObj.acquireTokenRedirect({ scopes: [envObj.VUE_APP_MSAL_CLIENT_ID as string] });
}

export const CatchAuthError = (error: any) => {
  if (error.name === "InteractionRequiredAuthError") {
    console.log(JSON.stringify(error))
    MSALObjAcquireTokenRedirect();
  }
}

