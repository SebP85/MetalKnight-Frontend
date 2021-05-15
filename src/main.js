import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import VueCookies from 'vue3-cookies'

axios.defaults.withCredentials = true;//enregistre et envoie les cookies automatiquement

axios.interceptors.response.use(undefined, function (error) {
  if (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
  
        originalRequest._retry = true;
        store.dispatch('LogOut')
        return router.push('/login')
    }
  }
});

/*const configCookie = {
  secure: true,
  httpOnly: true,
  path: "",
  signed: true,
};*/

createApp(App).use(VueCookies/*, configCookie*/).use(store).use(router).mount('#app');