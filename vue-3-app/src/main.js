import { h, createApp } from 'vue';
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

// Vuex
import vuex from './plugins/vuex'

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    vuetify,
    render() {
      return h(App, {
        // single-spa props are available on the "this" object. Forward them to your component as needed.
        // https://single-spa.js.org/docs/building-applications#lifecycle-props
        // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
        /*
        name: this.name,
        mountParcel: this.mountParcel,
        singleSpa: this.singleSpa,
        */
      });
    },
  },
  handleInstance: (app) => {
    app.use(vuetify)
    app.use(vuex)
  }
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
