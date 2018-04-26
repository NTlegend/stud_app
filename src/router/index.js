import Vue from 'vue'
import Router from 'vue-router'
import AddsList from '@/components/AddsList'
import Login from '@/components/Login'
import Register from '@/components/Register'
import SingleAdd from '@/components/SingleAdd'
import AddForm from '@/components/AddForm'
<<<<<<< HEAD
import EditForm from '@/components/EditForm'
=======
>>>>>>> fe55020bdb0744024526f69eb8fd9825eccc12fe
import Page404 from '@/components/Page404'

Vue.use(Router)

export default new Router({
<<<<<<< HEAD
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'AddsList',
        component: AddsList
      },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Registration',
            component: Register
        },
        {
            path: '/:id(\\d+)',
            name: 'SingleAdd',
            component: SingleAdd
        },
        {
            path: '/edit:id(\\d+)',
            name: 'EditForm',
            component: EditForm
        },
        {
            path: '/add',
            name: 'AddForm',
            component: AddForm
        },
        {
            path: '*',
            name: 'Page404',
            component: Page404
        }
    ]
=======
  routes: [
    {
      path: '/',
      name: 'AddsList',
      component: AddsList
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/add:id(\\d+)',
      name: 'SingleAdd',
      component: SingleAdd
    },
    {
      path: '/:id(\\d+)',
      name: 'AddForm',
      component: AddForm
    },
    {
      path: '*',
      name: 'Page404',
      component: Page404
    }
  ],
  mode: 'history'
>>>>>>> fe55020bdb0744024526f69eb8fd9825eccc12fe
})
