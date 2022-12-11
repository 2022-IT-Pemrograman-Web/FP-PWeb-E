<!-- eslint-disable -->
<template>
  <div class="dashboard">
    <CRow>
      <CCol>
        <div class="col-sm-12 col-lg-12 mg-b-20 d-flex justify-content-center">
          <div class="m-5">
                  <img src="../assets/images/avatars/2.jpg" class="rounded-circle shadow" alt="">
              </div>
        </div>
        <div class="col">
          <h3 class="row  d-flex justify-content-center">Selamat datang, MUHAMMAD ABROR AL QUSHOYYI</h3>
          <p class="row  d-flex justify-content-center">selebgram</p>
        </div>
        <CCard style="margin-top:100px;">
          <CCardHeader> SELEBGRAM </CCardHeader>
          <CCardBody>
            <CRow>

              <div class="col m-3" style="border-radius:10px; border:1px solid #D9D9D9;">
                <router-link class="p-4 nav-link d-flex justify-content-center" to="dashboard/selebgram/campaign">
                  <h4>                      
                    <CIcon icon="cil-puzzle" width="30px" /> 
                    Campaign
                  </h4>
                </router-link>
              </div>
              <div class="col m-3" style="border-radius:10px; border:1px solid #D9D9D9;">
                <router-link class="p-4 nav-link d-flex justify-content-center" to="dashboard/selebgram/channel">
                  <h4>                      
                    <CIcon icon="cil-puzzle" width="30px" /> 
                    Channel
                  </h4>
                </router-link>
              </div>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
export default {
  // name: 'Dashboard',
}
</script>
