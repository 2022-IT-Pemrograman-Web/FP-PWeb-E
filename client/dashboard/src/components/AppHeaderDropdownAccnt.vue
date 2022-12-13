<!-- eslint-disable -->
<template>
  <CDropdown variant="nav-item">
    <CDropdownToggle placement="bottom-end" class="py-0" :caret="false">
      <CAvatar :src="avatar" size="md" />
    </CDropdownToggle>
    <CDropdownMenu class="pt-0">
      <!-- <div class="avatar avatar-lg mg-r-auto mg-l-auto"> -->
      <CDropdownItem>
        <div class="p-4 d-flex justify-content-center">
          <img
            src="../assets/images/avatars/2.jpg"
            onerror=""
            class="rounded-circle"
            alt=""
          />
        </div>
      </CDropdownItem>
      <CDropdownItem>
        <h5 class="text-center">MUHAMMAD ABROR AL QUSHOYYI</h5>
        <p class="text-center">Mahasiswa</p>
        <router-link
          class="d-flex btn btn-outline-secondary"
          to="/dashboard/profile"
        >
          <p class="d-flex m-auto">Kelola Akun</p>
        </router-link>
      </CDropdownItem>
      <hr />
      <CDropdownItem>
        <router-link class="d-flex btn" to="/logout">
          <p class="d-flex m-auto">Logout</p>
        </router-link>
      </CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</template>

<script>
import avatar from '@/assets/images/avatars/2.jpg'
export default {
  name: 'AppHeaderDropdownAccnt',
  setup() {
    return {
      avatar: avatar,
      itemsCount: 42,
    }
  },
}
</script>
