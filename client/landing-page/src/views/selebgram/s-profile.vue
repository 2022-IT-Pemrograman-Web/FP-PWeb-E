<!-- eslint-disable -->
<template>
    <div class="s-profile">
        <h3 class="col" style="margin-bottom:20px;">
            Your Profile
        </h3>
        <CCard style="margin-bottom:20px;">
            <CCardHeader> SELEBGRAM </CCardHeader>
            <CCardBody>
                <form action="" method="post" style="padding:30px 30px;">

                    <div class="row d-flex justify-content-center">
                        <div class="mb-3 text-start">
                            <label for="IdSeleb" class="form-label ps-1">Your ID</label>
                            <input type="text" class="form-control" id="IdSeleb" placeholder="S-9384929472" disabled>
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="mb-3 text-start">
                            <label for="nameSeleb" class="form-label ps-1">Full Name</label>
                            <input type="text" class="form-control" id="nameSeleb" placeholder="Muhammad Abror Al Qushoyyi">
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="mb-3 text-start">
                            <label for="emailSeleb" class="form-label ps-1">Email</label>
                            <input type="email" class="form-control" id="emailSeleb" placeholder="selebgram@endorsin.co.id">
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="mb-3 text-start">
                            <label for="companySeleb" class="form-label ps-1">Company Name</label>
                            <input type="text" class="form-control" id="companySeleb" placeholder="PT ENDORSIN INDONESIA">
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="mb-3 text-start">
                            <label for="descSeleb" class="form-label ps-1">Description</label>
                            <textarea class="form-control" id="descSeleb" rows="3" placeholder="This is Description"></textarea>
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