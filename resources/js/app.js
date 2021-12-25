require('./bootstrap');

// import Vue from 'vue'

// import App from './vue/app';

// const app = new Vue({
//     el: '#app',
//     components: { App } 
// });

// Require Vue
window.Vue = require('vue').default;

// Register Vue Components
Vue.component('app', require('./vue/app.vue').default);

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlusSquare, faTrash )

Vue.component('font-awesome-icon', FontAwesomeIcon)

// Initialize Vue
const app = new Vue({
    el: '#app',
});