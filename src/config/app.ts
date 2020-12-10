import { message } from 'ant-design-vue';

message.config({
  duration: 2,
  maxCount: 1
})

const AppConfig = {
  $message: message
}

export { AppConfig }