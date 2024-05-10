import { createRouter, createWebHistory } from 'vue-router'

/*

const terminalRoutes = [
  {
    path: '/terminal',
    redirect: '/terminal/watch-lists',
    name: 'Terminal',
    component: () => import('@/pages/terminal/TerminalPage.vue'),
    children: [
      {
        path: 'watch-lists',
        name: 'TerminalWatchLists',
        component: () => import('@/pages/terminal/WatchListPage.vue')
      },
    ]
  },
  {
    path: '/terminal2',
    redirect: '/terminal/watch-lists',
    name: 'Terminal',
    component: () => import('@/pages/terminal/TerminalPage.vue'),
    children: [
      {
        path: 'watch-lists',
        name: 'TerminalWatchLists',
        component: () => import('@/pages/terminal/WatchListPage.vue')
      },
    ]
  },
];

const addModelerToRoutes = (modeler: string, routes: Array<object>) => {
  return routes.map(element =>  {
    return {
      ...element,
      path: modeler + element.path,
    };
  } )

}

console.log(addModelerToRoutes('test', terminalRoutes));
*/

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/marketing/HomePage.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/pages/marketing/AboutPage.vue')
    },
    {
      path: '/terminal',
      redirect: '/terminal/watch-lists',
      name: 'Terminal',
      component: () => import('@/pages/terminal/TerminalPage.vue'),
      children: [
        {
          path: 'watch-lists',
          name: 'TerminalWatchLists',
          component: () => import('@/pages/terminal/WatchListPage.vue')
        },
      ]
    },
    {
      path: '/admin',
      name: 'Admin',
      redirect: (to:any) => {
        return { name: 'AdminDashboard'  }
      },
      component: () => import('@/pages/admin/AdminPage.vue'),
      children: [
        {
          path: '',
          name: 'AdminDashboard',
          component: () => import('@/pages/admin/DashboardPage.vue')
        },
      ]
    }
  ]
})

export default router
