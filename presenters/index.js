/**
 *  Get event from Vue Binding and return view model for each HTML dom
 * */
class Presenter {
    constructor(service) {
        this.view = { listItems: [], loading: false }
        this.service = service
    }

    getInitialState() {
        return this.service.getListItems().pipe(
            rxjs.operators.map(item => this.view.listItems.push(...item))
        )
    }

    getMoreListItems(event) {
        return this.service.getMoreListItems([1,2,3,4,5,6,7,8,9])
    }

}