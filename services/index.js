/**
 *  Implement Business Logic Here
 * */
class Service {
    constructor() {
        this.$listItem = new rxjs.BehaviorSubject([1,2,3,4,5,6,7])
    }
    
    getListItems() {
        return this.$listItem.pipe(
            rxjs.operators.delay(200),
            rxjs.operators.map( it => it.map( item => item * 2 ))
        )
    }

    getMoreListItems(item) {
        return this.$listItem.next(item)
    }
}