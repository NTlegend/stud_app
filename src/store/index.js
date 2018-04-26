import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const Store = new Vuex.Store({
    state: {
        addsList: [
            {
                id: '1',
                img: './static/img/img2.jpg',
                title: 'Large Industrial Ultrasonic Cleaning Washing Machine for Engine Filter Carburetor',
                price: '500',
                desc: 'Horizontal Washing Machine (belly type) with CE Approved & SGS Audited GX series washing machine: GX-30-70KG sample washing machine: Ss washing machine...'
            },
            {
                id: '2',
                img: './static/img/img1.jpg',
                title: 'Large Industrial Ultrasonic Cleaning Washing Machine for Engine Filter Carburetor',
                price: '600',
                desc: 'Horizontal Washing Machine (belly type) with CE Approved & SGS Audited GX series washing machine: GX-30-70KG sample washing machine: Ss washing machine...'
            },
            {
                id: '3',
                img: './static/img/img2.jpg',
                title: 'Large Industrial Ultrasonic Cleaning Washing Machine for Engine Filter Carburetor',
                price: '700',
                desc: 'Horizontal Washing Machine (belly type) with CE Approved & SGS Audited GX series washing machine: GX-30-70KG sample washing machine: Ss washing machine...'
            },
            {
                id: '4',
                img: './static/img/img1.jpg',
                title: 'Large Industrial Ultrasonic Cleaning Washing Machine for Engine Filter Carburetor',
                price: '800',
                desc: 'Horizontal Washing Machine (belly type) with CE Approved & SGS Audited GX series washing machine: GX-30-70KG sample washing machine: Ss washing machine...'
            }
        ],
        addItem: {}
    },
    mutations: {
        updateAddsList (state, data) {
            state.addsList = data
        },
        updateAddItem (state, data) {
            state.addItem = data
        }
    },
    actions: {
        setList (context, params) {
            context.commit('updateAddsList', params.data)
        },
        loadById (context, params) {
            context.state.addsList.forEach(item => {
                if (item.id === params.id) {
                    let editedItem = {}
                    Object.assign(editedItem, item)
                    context.commit('updateAddItem', editedItem)
                }
            })
        },
        save (context, params) {
            context.state.addsList.forEach(item => {
                if (item.id === params.item.id) {
                    item.title = params.item.title
                    item.price = params.item.price
                    item.desc = params.item.desc
                }
            })

            context.commit('updateAddsList', context.state.addsList)
        }
    }
});


export default Store