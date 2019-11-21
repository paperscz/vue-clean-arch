const cookieRepository = new CookieRepository()
const localStorageRepository = new LocalStorageRepository()
const httpRepository = new HttpRepository()

// TODO: add more service here
const svc0 = new ItemService(httpRepository)

// TODO: add more presenter here
const itemPresenter = new ItemPresenter(svc0)


Vue.use({    
    install (Vue) {
        Vue.prototype.$itemPresenter = itemPresenter;
    }
})

new Vue({
    el: '#app'
})