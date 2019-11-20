/**
 *  Don't do anything here, just show the data from view models or call presenter methods
 * */
Vue.component('container', {
    template: `
    <div>
        <div>loading: {{ $presenter.view.loading }}</div>
        <div v-for='i in $presenter.view.listItems'> 
            <p>{{ i }}</p>
        </div>
        <button @click="{{ $presenter.getMoreListItems(event) }}">click</button>
    </div>
    `,
    data: function() { 
        return this.$presenter.view
    },
    mounted: function() {
        this.subscription = this.$presenter.getInitialState().subscribe()
    },
    beforeDestroy: function() {
        this.subscription.unsubscribe()
    }
})