import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const Store = new Vuex.Store({
  state: {
    addsList: [
      {
        id: '1',
        name: 'iPhone X 16 Gb',
        price: '850',
        description: 'Our vision has always been to create an iPhone that is entirely screen.\n' +
        '              One so immersive the device itself disappears into the experience. 16 Gb'
      },
      {
        id: '2',
        name: 'iPhone X 32 Gb',
        price: '900',
        description: 'Our vision has always been to create an iPhone that is entirely screen.\n' +
        '              One so immersive the device itself disappears into the experience. 32 Gb'
      },
      {
        id: '3',
        name: 'iPhone X 64 Gb',
        price: '1000',
        description: 'Our vision has always been to create an iPhone that is entirely screen.\n' +
        '              One so immersive the device itself disappears into the experience. 64 Gb'
      },
      {
        id: '4',
        name: 'iPhone X 128 Gb',
        price: '1100',
        description: 'Our vision has always been to create an iPhone that is entirely screen.\n' +
        '              One so immersive the device itself disappears into the experience. 128 Gb'
      },
      {
        id: '5',
        name: 'iPhone X 256 Gb',
        price: '1200',
        description: 'Our vision has always been to create an iPhone that is entirely screen.\n' +
        '              One so immersive the device itself disappears into the experience. 256 Gb'
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
      context.state.addsList.push({id: context.state.addsList.length + 1, name: params.item.name, price: params.item.price, description: params.item.description});
      context.state.addsList.forEach(item => {
        if (item.id === params.item.id) {
          item.name = params.item.name
          item.price = params.item.price
          item.description = params.item.description
        }
      })
      context.commit('updateAddsList', context.state.addsList)
    }
  }
})

export default Store
