import Vue from 'vue'
import App from '@/App.vue'
import '@/assets/css/mdui.css'
import '@/assets/js/mdui.js'

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app')
