/**
 *  Implement Business Logic Here
 * */
class Service {
    constructor(httpRepository) {
        this.httpRepository = httpRepository
        this.$listItem = new rxjs.Subject()
    }
    
    getListItems() {
        return this.$listItem.pipe(
            rxjs.operators.delay(200),
            rxjs.operators.switchMap( it => 
                this.httpRepository.getItemData().pipe(
                    rxjs.operators.map( it => it.map( item => item * 2 ))
                )
                
            )
        )
    }

    getMoreListItems() {
        return this.$listItem.next()
    }
}