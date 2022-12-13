/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { h, resolveComponent } from 'vue'
import Profile from '@/views/selebgram/s-profile.vue'
import Campaign from '@/views/selebgram/s-campaign.vue'
import CampaignDetail from '@/views/selebgram/s-campaignDetail.vue'
import Channel from '@/views/selebgram/s-channel.vue'
import ChannelForm from '@/views/selebgram/s-channelForm.vue'
import { useAuth0 } from "@auth0/auth0-vue"
// import About from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/company',
  //   name: 'company',
  //   component: Company
  // },
  // {
  //   path: '/service',
  //   name: 'service',
  //   component: Service
  // },
  // {
  //   path: '/collaboration',
  //   name: 'collaboration',
  //   component: Collaboration
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DefaultLayout,
    beforeEach: (to, from, next) => {
      const { isAuthenticated } = useAuth0();
      if (isAuthenticated) {
        next();
      } else {
        next("/");
      }
    },
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard HomePage',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue'),
      },
      {
        path: '/dashboard/profile',
        name: 'Profile',
        component: Profile,
      },
      // campaign
      {
        path: '/dashboard/campaign',
        name: 'Campaign',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        children: [
          {
            path: '/dashboard/campaign',
            name: 'Campaign',
            component: Campaign,
          },
          {
            path: '/dashboard/campaign/detail',
            name: 'Detail Campaign',
            component: CampaignDetail,
          },
        ],
      },
      // channel
      {
        path: '/dashboard/channel',
        name: 'Channel',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        children: [
          {
            path: '/dashboard/channel',
            name: 'Channel',
            component: Channel,
          },
          {
            path: '/dashboard/channel/form',
            name: 'Form Channel',
            component: ChannelForm,
          },
        ],
      },
      // theme
      // {
      //   path: '/theme',
      //   name: 'Theme',
      //   redirect: '/theme/typography',
      // },
      // {
      //   path: '/theme/colors',
      //   name: 'Colors',
      //   component: () => import('@/views/theme/Colors.vue'),
      // },
      // {
      //   path: '/theme/typography',
      //   name: 'Typography',
      //   component: () => import('@/views/theme/Typography.vue'),
      // },
      // base
      // {
      //   path: '/base',
      //   name: 'Base',
      //   component: {
      //     render() {
      //       return h(resolveComponent('router-view'))
      //     },
      //   },
      //   redirect: '/base/breadcrumbs',
      //   children: [
      //     {
      //       path: '/base/accordion',
      //       name: 'Accordion',
      //       component: () => import('@/views/base/Accordion.vue'),
      //     },
      //     {
      //       path: '/base/breadcrumbs',
      //       name: 'Breadcrumbs',
      //       component: () => import('@/views/base/Breadcrumbs.vue'),
      //     },
      //     {
      //       path: '/base/cards',
      //       name: 'Cards',
      //       component: () => import('@/views/base/Cards.vue'),
      //     },
      //     {
      //       path: '/base/carousels',
      //       name: 'Carousels',
      //       component: () => import('@/views/base/Carousels.vue'),
      //     },
      //     {
      //       path: '/base/collapses',
      //       name: 'Collapses',
      //       component: () => import('@/views/base/Collapses.vue'),
      //     },
      //     {
      //       path: '/base/list-groups',
      //       name: 'List Groups',
      //       component: () => import('@/views/base/ListGroups.vue'),
      //     },
      //     {
      //       path: '/base/navs',
      //       name: 'Navs',
      //       component: () => import('@/views/base/Navs.vue'),
      //     },
      //     {
      //       path: '/base/paginations',
      //       name: 'Paginations',
      //       component: () => import('@/views/base/Paginations.vue'),
      //     },
      //     {
      //       path: '/base/placeholders',
      //       name: 'Placeholders',
      //       component: () => import('@/views/base/Placeholders.vue'),
      //     },
      //     {
      //       path: '/base/popovers',
      //       name: 'Popovers',
      //       component: () => import('@/views/base/Popovers.vue'),
      //     },
      //     {
      //       path: '/base/progress',
      //       name: 'Progress',
      //       component: () => import('@/views/base/Progress.vue'),
      //     },
      //     {
      //       path: '/base/spinners',
      //       name: 'Spinners',
      //       component: () => import('@/views/base/Spinners.vue'),
      //     },
      //     {
      //       path: '/base/tables',
      //       name: 'Tables',
      //       component: () => import('@/views/base/Tables.vue'),
      //     },
      //     {
      //       path: '/base/tooltips',
      //       name: 'Tooltips',
      //       component: () => import('@/views/base/Tooltips.vue'),
      //     },
      //   ],
      // },
      // button
      // {
      //   path: '/buttons',
      //   name: 'Buttons',
      //   component: {
      //     render() {
      //       return h(resolveComponent('router-view'))
      //     },
      //   },
      //   redirect: '/buttons/standard-buttons',
      //   children: [
      //     {
      //       path: '/buttons/standard-buttons',
      //       name: 'Buttons',
      //       component: () => import('@/views/buttons/Buttons.vue'),
      //     },
      //     {
      //       path: '/buttons/dropdowns',
      //       name: 'Dropdowns',
      //       component: () => import('@/views/buttons/Dropdowns.vue'),
      //     },
      //     {
      //       path: '/buttons/button-groups',
      //       name: 'Button Groups',
      //       component: () => import('@/views/buttons/ButtonGroups.vue'),
      //     },
      //   ],
      // },
      // form
      // {
      //   path: '/forms',
      //   name: 'Forms',
      //   component: {
      //     render() {
      //       return h(resolveComponent('router-view'))
      //     },
      //   },
      //   redirect: '/forms/form-control',
      //   children: [
      //     {
      //       path: '/forms/form-control',
      //       name: 'Form Control',
      //       component: () => import('@/views/forms/FormControl.vue'),
      //     },
      //     {
      //       path: '/forms/select',
      //       name: 'Select',
      //       component: () => import('@/views/forms/Select.vue'),
      //     },
      //     {
      //       path: '/forms/checks-radios',
      //       name: 'Checks & Radios',
      //       component: () => import('@/views/forms/ChecksRadios.vue'),
      //     },
      //     {
      //       path: '/forms/range',
      //       name: 'Range',
      //       component: () => import('@/views/forms/Range.vue'),
      //     },
      //     {
      //       path: '/forms/input-group',
      //       name: 'Input Group',
      //       component: () => import('@/views/forms/InputGroup.vue'),
      //     },
      //     {
      //       path: '/forms/floating-labels',
      //       name: 'Floating Labels',
      //       component: () => import('@/views/forms/FloatingLabels.vue'),
      //     },
      //     {
      //       path: '/forms/layout',
      //       name: 'Layout',
      //       component: () => import('@/views/forms/Layout.vue'),
      //     },
      //     {
      //       path: '/forms/validation',
      //       name: 'Validation',
      //       component: () => import('@/views/forms/Validation.vue'),
      //     },
      //   ],
      // },
      // chart diagram
      // {
      //   path: '/charts',
      //   name: 'Charts',
      //   component: () => import('@/views/charts/Charts.vue'),
      // },
      // icon
      // {
      //   path: '/icons',
      //   name: 'Icons',
      //   component: {
      //     render() {
      //       return h(resolveComponent('router-view'))
      //     },
      //   },
      //   redirect: '/icons/coreui-icons',
      //   children: [
      //     {
      //       path: '/icons/coreui-icons',
      //       name: 'CoreUI Icons',
      //       component: () => import('@/views/icons/CoreUIIcons.vue'),
      //     },
      //     {
      //       path: '/icons/brands',
      //       name: 'Brands',
      //       component: () => import('@/views/icons/Brands.vue'),
      //     },
      //     {
      //       path: '/icons/flags',
      //       name: 'Flags',
      //       component: () => import('@/views/icons/Flags.vue'),
      //     },
      //   ],
      // },
      // notification
      // {
      //   path: '/notifications',
      //   name: 'Notifications',
      //   component: {
      //     render() {
      //       return h(resolveComponent('router-view'))
      //     },
      //   },
      //   redirect: '/notifications/alerts',
      //   children: [
      //     {
      //       path: '/notifications/alerts',
      //       name: 'Alerts',
      //       component: () => import('@/views/notifications/Alerts.vue'),
      //     },
      //     {
      //       path: '/notifications/badges',
      //       name: 'Badges',
      //       component: () => import('@/views/notifications/Badges.vue'),
      //     },
      //     {
      //       path: '/notifications/modals',
      //       name: 'Modals',
      //       component: () => import('@/views/notifications/Modals.vue'),
      //     },
      //   ],
      // },
      // widget
      // {
      //   path: '/widgets',
      //   name: 'Widgets',
      //   component: () => import('@/views/widgets/Widgets.vue'),
      // },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
