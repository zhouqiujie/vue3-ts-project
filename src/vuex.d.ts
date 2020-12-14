// vuex.d.ts
import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { RootState } from '@/store'

declare module '@vue/runtime-core' {
  // declare your own store states
  /* interface State {
    count: number,
    [key: string]: any
  }
 */
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<RootState>
  }
}
