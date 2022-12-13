<!-- eslint-disable -->
<template>
    <div class="s-campaignDetail">
        <h3 class="col" style="margin-bottom:30px;">
            Detail Campaign
        </h3>
        <CCard style="margin-bottom:100px;">
            <!-- <CCardHeader> SELEBGRAM </CCardHeader> -->
            <CCardBody>
                <!-- <form action="" method="post" style="padding:30px 30px;"> -->

                    <div class="row d-flex justify-content-center">
                        <div class="mb-3 text-start">
                            <label for="exampleFormControlInput1" class="form-label ps-1">Title</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="endorsin">
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="mb-3 text-start">
                            <label for="exampleFormControlInput1" class="form-label ps-1">Description</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Deskripsi channel"></textarea>
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="mb-3 text-start">
                            <label for="exampleFormControlInput1" class="form-label ps-1">Start Date</label>
                            <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="Surabaya">
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="mb-3 text-start">
                            <label for="exampleFormControlInput1" class="form-label ps-1">End Date</label>
                            <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="Surabaya">
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="mb-3 text-start">
                            <label for="exampleFormControlInput1" class="form-label ps-1">Price</label>
                            <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="3000000">
                        </div>
                    </div>
                    <!-- <div class="row d-flex justify-content-center">
                        <div class="mb-3 text-start">
                            <label for="exampleFormControlInput1" class="form-label ps-1">User ID</label>
                            <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="U-0238384">
                        </div>
                    </div> -->
                    
                    <!-- <div class="row d-flex justify-content-center">
                        <div class="mb-3 d-flex justify-content-start">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                &nbsp;Saya menyetujui  <a href="">Syarat & Ketentuan</a> yang berlaku
                            </label>
                        </div>
                    </div> -->

                    <div class="row d-flex justify-content-center mt-3">
                        <div class="d-flex justify-content-end">
                            <button class="btn btn-success ps-5 pe-5" style="padding:5px 20px 5px 20px; color:white;">Apply</button>
                        </div>
                    </div>

                <!-- </form> -->
            </CCardBody>
        </CCard>
    </div>
</template>
<!-- eslint-disable -->
<script>
export default{
}
</script>