/**
 *  Get event from Vue Binding and return view model for each HTML dom
 * */
class ItemViewModel {
    constructor() {
        this.listItems = []
        this.loading = false
    }
}

class ItemPresenter {
    constructor(service) {
        this.service = service
        this.view = new ItemViewModel()
        this.unsubscribe = new rxjs.Subject()
    }

    getInitialState() {
        this.service.getListItems().pipe(
            rxjs.operators.takeUntil(this.unsubscribe),
            rxjs.operators.finalize( () => { console.log('complete subscriptions') })
        ).subscribe( ({ item }) => {
            this.view.listItems.push(...item)
            this.view.loading = false
        })
    }

    getMoreListItems(event) {
        this.view.loading = true
        this.service.getMoreListItems()
    }

    clearItem(event) {
        this.view.listItems = []
    }

    disposal(event) {
        this.unsubscribe.next()
        this.unsubscribe.complete()
    }

}