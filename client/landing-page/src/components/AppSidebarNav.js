/* eslint-disable no-unused-vars */
import { defineComponent, h, onMounted, ref, resolveComponent } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useAuth0 } from '@auth0/auth0-vue'

import {
  CBadge,
  CSidebarNav,
  CNavItem,
  CNavGroup,
  CNavTitle,
} from '@coreui/vue'
import nav from '@/_nav.js'

const normalizePath = (path) =>
  decodeURI(path)
    .replace(/#.*$/, '')
    .replace(/(index)?\.(html)$/, '')

const isActiveLink = (route, link) => {
  if (link === undefined) {
    return false
  }

  if (route.hash === link) {
    return true
  }

  const currentPath = normalizePath(route.path)
  const targetPath = normalizePath(link)

  return currentPath === targetPath
}

const isActiveItem = (route, item) => {
  if (isActiveLink(route, item.to)) {
    return true
  }

  if (item.items) {
    return item.items.some((child) => isActiveItem(route, child))
  }

  return false
}

const AppSidebarNav = defineComponent({
  name: 'AppSidebarNav',
  components: {
    CNavItem,
    CNavGroup,
    CNavTitle,
  },
  setup() {
    const route = useRoute()
    const { idTokenClaims, isAuthenticated } = useAuth0()
    const role = idTokenClaims.value['http://localhost:8080/role']

    const firstRender = ref(true)

    onMounted(() => {
      firstRender.value = false
    })

    const renderItem = (item) => {
      if (item.items) {
        return h(
          CNavGroup,
          {
            ...(firstRender.value && {
              visible: item.items.some((child) => isActiveItem(route, child)),
            }),
          },
          {
            togglerContent: () => [
              h(resolveComponent('CIcon'), {
                customClassName: 'nav-icon',
                name: item.icon,
              }),
              item.name,
            ],
            default: () => item.items.map((child) => renderItem(child)),
          },
        )
      }

      return item.to
        ? h(
          RouterLink,
          {
            to: item.to,
            custom: true,
          },
          {
            default: (props) =>
              h(
                resolveComponent(item.component),
                {
                  active: props.isActive,
                  href: props.href,
                  onClick: () => props.navigate(),
                },
                {
                  default: () => [
                    item.icon &&
                    h(resolveComponent('CIcon'), {
                      customClassName: 'nav-icon',
                      name: item.icon,
                    }),
                    item.name,
                    item.badge &&
                    h(
                      CBadge,
                      {
                        class: 'ms-auto',
                        color: item.badge.color,
                      },
                      {
                        default: () => item.badge.text,
                      },
                    ),
                  ],
                },
              ),
          },
        )
        : h(
          resolveComponent(item.component),
          {},
          {
            default: () => item.name,
          },
        )
    }
    // eslint-disable-next-line no-unused-vars

    const filteredNav = nav.filter((item) => {
      if (item.role) {
        return item.role === role
      }
      return true
    })

    return () =>
      h(
        CSidebarNav,
        {},
        {
          default: () =>
            filteredNav.map((item) => renderItem(item))
        },
      )
  },
})
export { AppSidebarNav }
