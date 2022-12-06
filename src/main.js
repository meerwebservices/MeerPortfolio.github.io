import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/scss/Fonts/fonts.scss";
import '@popperjs/core/dist/umd/popper';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import "./assets/Bootstrap-icons/bootstrap-icons.css"
import "./assets/Fontawesom/css/icons.css"
import "./assets/scss/main.scss"

createApp(App).use(router).mount('#app')
