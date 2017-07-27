import isUser from '/imports/modules/is-user'

export default [
  {
    path: '/',
    name: 'index',
    component: '/imports/ui/pages/Index/Index.vue'
  },
  {
    path: '/static-page',
    name: 'example-static',
    component: '/imports/ui/pages/StaticPage/StaticPage.vue'
  },
  {
    path: '/termos-de-uso',
    name: 'terms',
    component: '/imports/ui/pages/Terms/Terms.vue'
  },
  {
    path: '/login',
    component: '/imports/ui/layout/Auth.vue',
    redirect: { name: 'login' },
    children: [
      {
        path: '/login',
        name: 'login',
        component: '/imports/ui/pages/Auth/Login.vue'
      },
      {
        path: '/cadastro',
        name: 'register',
        component: '/imports/ui/pages/Auth/Register.vue'
      },
      {
        path: '/recuperar-senha',
        name: 'forgot-password',
        component: '/imports/ui/pages/Auth/ForgotPassword.vue'
      },
      {
        path: '/resetar-senha/:token',
        name: 'reset-password',
        component: '/imports/ui/pages/Auth/ResetPassword.vue'
      }
    ]
  },
  {
    path: '/admin',
    component: '/imports/ui/layout/Admin.vue',
    redirect: { name: 'admin-dashboard' },
    beforeEnter: (to, from, next) => {
      isUser().then(response => {
        response ? next() : next({name: 'login'})
      })
    },
    children: [
      {
        path: '/admin',
        name: 'admin-dashboard',
        component: '/imports/ui/pages/Admin/Dashboard/Dashboard.vue'
      },
      {
        path: '/admin/usuarios',
        name: 'admin-users',
        component: '/imports/ui/pages/Admin/Users/Users.vue'
      },
      {
        path: '/admin/usuarios/:userId/editar',
        name: 'admin-users-edit',
        component: '/imports/ui/pages/Admin/Users/UsersEdit.vue'
      }
    ]
  }
]