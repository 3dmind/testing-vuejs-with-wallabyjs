import Vue from 'vue'
import Counter from './Counter'

const app = new Vue({
  render: h => h(Counter)
})
app.$mount('#app')
