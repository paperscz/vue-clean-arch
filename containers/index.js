/**
 *  Don't do anything here, just show the data from view models or call presenter methods
 * */
Vue.component('item-container', {
    template: `
    <div class="container">
        <div> loading: {{ $itemPresenter.view.loading }}</div>
        <button type="button" class="btn btn-primary" @click="{{ $itemPresenter.clearItem($event) }}">Clear Item</button>
        <button type="button" class="btn btn-primary" @click="{{ $itemPresenter.getMoreListItems($event) }}">Load More</button>
        <button type="button" class="btn btn-primary" @click="{{ $itemPresenter.disposal($event) }}">Disposal Presenter</button>
        <table class="table table-dark">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">item * 2</th>
            </tr>
            </thead>
            <tbody  v-for='(i, index) in $itemPresenter.view.listItems'>
            <tr>
                <th scope="row">{{ index }}</th>
                <td>{{ i }}</td>
            </tr>
            </tbody>
        </table>
    </div>
    `,
    data: function() { 
        return this.$itemPresenter.view
    },
    mounted: function() {
            this.$itemPresenter.getInitialState()
    },
    beforeDestroy: function() {
        this.$itemPresenter.disposal()
    }
})