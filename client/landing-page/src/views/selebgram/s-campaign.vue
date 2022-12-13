<!-- eslint-disable -->
<template>
    <div class="s-campaign">
        <h3 style="margin-bottom:30px;">
          Campaign
        </h3>
        <div class="row">

            <div class="col col-sm-4 p-5">
                <CCard>
                    <CCardImage orientation="top" :src="VueImg" />
                    <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>
                      Some quick example text to build on the card title and make up
                      the bulk of the card&#39;s content.
                    </CCardText>
                    <p>
                        17 Okt 2022 - 27 Des 2022
                    </p>
                    <hr>
                    <div class="d-flex justify-content-end">
                      <router-link to="campaign/detail" class="text-end btn btn-outline-secondary ps-5 pe-5">
                          Lihat Detail
                      </router-link>
                    </div>
                    </CCardBody>
                </CCard>
            </div>
            <div class="col col-sm-4 p-5">
                <CCard>
                    <CCardImage orientation="top" :src="VueImg" />
                    <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>
                      Some quick example text to build on the card title and make up
                      the bulk of the card&#39;s content.
                    </CCardText>
                    <p>
                        17 Okt 2022 - 27 Des 2022
                    </p>
                    <hr>
                    <div class="d-flex justify-content-end">
                      <router-link to="campaign/detail" class="text-end btn btn-outline-secondary ps-5 pe-5">
                          Lihat Detail
                      </router-link>
                    </div>
                    </CCardBody>
                </CCard>
            </div>
            <div class="col col-sm-4 p-5">
                <CCard>
                    <CCardImage orientation="top" :src="VueImg" />
                    <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>
                      Some quick example text to build on the card title and make up
                      the bulk of the card&#39;s content.
                    </CCardText>
                    <p>
                        17 Okt 2022 - 27 Des 2022
                    </p>
                    <hr>
                    <div class="d-flex justify-content-end">
                      <router-link to="campaign/detail" class="text-end btn btn-outline-secondary ps-5 pe-5">
                          Lihat Detail
                      </router-link>
                    </div>
                    </CCardBody>
                </CCard>
            </div>

        </div>
    </div>
</template>
<!-- eslint-disable -->
<script>
import VueImg from '@/assets/images/campaign1.jpeg'
export default {
  name: 'Cards',
  setup() {
    return {
      VueImg,
    }
  },
}
</script>

