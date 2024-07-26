import { h, createApp } from 'vue';
import singleSpaVue from 'single-spa-vue';
import router from './router.js';

import App from './App.vue';

// Vuex
import vuex from './plugins/vuex.js'

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
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
    app.use(router);
    app.use(vuex);
  }
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
