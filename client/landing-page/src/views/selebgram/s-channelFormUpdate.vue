<!-- eslint-disable -->
<template>
    <div class="s-channelForm">
        <h3 class="col" style="margin-bottom:30px;">
            Channel Form
        </h3>
        <CCard style="margin-bottom:100px;">
            <!-- <CCardHeader> SELEBGRAM </CCardHeader> -->
            <CCardBody>
                <form action="" method="post" style="padding:30px 30px;">

                    <!-- <div class="row d-flex justify-content-center">
                        <div class="mb-3 text-start">
                            <label for="exampleFormControlInput1" class="form-label ps-1">type</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="endorsin">
                        </div>
                    </div> -->
                    <div class="mb-3 row">
                        <label for="role" class="d-flex justify-content-start">Type Sosmed</label>
                    </div>
                    <div class="mb-3 row d-flex justify-content-center">
                        <div class="col">
                            <select class="form-select" aria-label="Default select example" name="role" id="role">
                                <option name="role" selected>Pilih Type</option>
                                <option name="role" value="Instagram">Instagram</option>
                                <option name="role" value="Tiktok">Tiktok</option>
                                <option name="role" value="Twitter">Twitter</option>
                                <option name="role" value="Youtube">Youtube</option>
                            </select>
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="mb-3 text-start">
                            <label for="username" class="form-label ps-1">Username</label>
                            <input type="text" class="form-control" id="username" placeholder="endorsin_indonesia">
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="mb-3 text-start">
                            <label for="follower" class="form-label ps-1">Follower</label>
                            <input type="number" class="form-control" id="follower" placeholder="1.5 k">
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="mb-3 text-start">
                            <label for="link_sosmed" class="form-label ps-1">Link Sosmed</label>
                            <input type="text" class="form-control" id="link_sosmed" placeholder="instagram.com/endorsin_indonesia">
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="mb-3 text-start">
                            <label for="price" class="form-label ps-1">Price</label>
                            <input type="number" class="form-control" id="price" placeholder="3000000">
                        </div>
                    </div>

                    <div class="row d-flex justify-content-center mt-3">
                        <div class="d-flex justify-content-end">
                            <button class="btn btn-success ps-5 pe-5" style="padding:5px 20px 5px 20px; color:white;" type="submit">Perbarui</button>
                        </div>
                    </div>

                </form>
            </CCardBody>
        </CCard>
    </div>
</template>
<!-- eslint-disable -->
<script>
  export default{
    
  }
</script>