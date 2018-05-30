import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const Store = new Vuex.Store({
  state: {
    userToken: (localStorage.getItem('userToken')) ? localStorage.getItem('userToken') : '',
    userTokenExpire: (localStorage.getItem('userRole')) ? localStorage.getItem('userRole') : '',
    userRole: (localStorage.getItem('userRole')) ? localStorage.getItem('userRole') : ''
  },
  mutations: {
    setUser (store, params) {
      console.log(params)
      store.userToken = (params.token) ? params.token : ''
      store.userTokenExpire = (params.token_expire) ? params.token_expire : ''
      store.userRole = (params.role_id) ? params.role_id : ''
    }
  },
  computed: {},
  actions: {
    signUp ({commit}, params) {
      let data = JSON.stringify({
        name: params.name,
        login: params.email,
        password: params.password
      })
      axios.post('http://api.studapp.mm/register', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error.response)
        })
    },
    signIn (context, params) {
      let data = JSON.stringify({
        login: params.email,
        password: params.password
      })
      axios.post('http://api.studapp.mm/login', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(function (response) {
          console.log(response)
          if (response.status === 200) {
            context.commit('setUser', response.data)
            localStorage.setItem('userToken', JSON.stringify(response.data.token))
            localStorage.setItem('userTokenExpire', JSON.stringify(response.data.token_expire))
            localStorage.setItem('userRole', JSON.stringify(response.data.role_id))
          }
        })
        .catch(function (error) {
          localStorage.removeItem('userToken')
          localStorage.removeItem('userTokenExpire')
          localStorage.removeItem('userRole')
          console.log(error.response)
        })
    },
    logout (context) {
      localStorage.removeItem('userToken')
      localStorage.removeItem('userTokenExpire')
      localStorage.removeItem('userRole')
      context.commit('setUser', {})
    }
  },
  getters: {
    loadToken (state) {
      return state.userToken
    },
    loadUserRole (state) {
      return state.userRole
    }
  }
})

export default Store
