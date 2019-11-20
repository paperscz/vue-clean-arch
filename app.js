const cookieRepository = new CookieRepository()
const localStorageRepository = new LocalStorageRepository()
const httpRepository = new HttpRepository()

// TODO: add more service here
const service = new Service(httpRepository)

// TODO: add more presenter here
const presenter = new Presenter(service)


Vue.use({    
    install (Vue) {
        Vue.prototype.$presenter = presenter;
    }
})

new Vue({
    el: '#app'
})