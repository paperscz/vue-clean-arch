const service = new Service()

const presenter = new Presenter(service)

Vue.use({    
    install (Vue) {
        Vue.prototype.$presenter = presenter;
    }
})

new Vue({
    el: '#app'
})