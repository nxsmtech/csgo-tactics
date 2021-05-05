require('./bootstrap');

import Vue from 'vue/dist/vue.js';
import Paintable from 'vue-paintable';
import PaintableImage from '../vue/components/Paintable-Image.vue';

Vue.use(Paintable, {
    // optional methods
    setItem(key, image) {
        localStorage.setItem(key, image);
    },
    // you also can use async
    getItem(key) {
        return localStorage.getItem(key);
    },
    removeItem(key) {
        localStorage.removeItem(key);
    }
});

let app = new Vue({
    components: {
        'paintable-image': PaintableImage,
    }
}).$mount('#app')
