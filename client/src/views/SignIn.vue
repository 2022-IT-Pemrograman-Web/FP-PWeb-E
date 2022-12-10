<template>
    <div class="login">
        <!-- body -->
        <div class="container" style="margin-top:10rem;">

            <div class="row">

                <h1 class="d-flex justify-content-center"  style="font:bold 46px poppins, sans-serif; margin:30px 0 75px 0; color:#000;">
                    LOGIN
                </h1>
                <div class="row p-5" style="background-color:#f0f0f0; border:1px solid #c3c3c3; border-radius:5px;">

                    <div class="col text-end m-auto">
                        <h3 >login anddd</h3>
                        <h1 >let's enjoy our feature</h1>
                    </div>
                    <div class="col-sm-1 d-flex justify-content-center align-items-center">
                        <img src="../assets/line.png" alt="" >
                    </div>
                    <div class="col">
                        <!-- <div class="body" style="margin: 10rem;"> -->        
                            <form action="" method="post">
                                <div class="mb-2 row">
                                    <label for="username" class="d-flex justify-content-start">Username</label>
                                </div>
                                <div class="mb-3 row d-flex justify-content-center">
                                    <div class="col">
                                        <input name="username" type="text" class="form-control" id="username" value="">
                                    </div>
                                </div>
                                <div class="mb-2 row">
                                    <label for="password" class="d-flex justify-content-start">Password</label>
                                </div>
                                <div class="mb-3 row d-flex justify-content-center">
                                    <div class="col">
                                        <input name="password" type="password" class="form-control" id="password">
                                    </div>
                                </div>
                                    
                                <p class="d-flex justify-content-center fst-italic">belum punya akun? daftar&nbsp;<a href="/register" style="color:#E5B323;">disini</a> </p>
                                
                                <div class="d-flex justify-content-center">
                                    <button class="btn" type="submit" name="login" style="background-color:#E5B323; font-weight: 600; color:white; padding:10px 200px">login</button>
                                </div>
                            </form>
                        <!-- </div> -->
                    </div>

                </div>

            </div>

        </div>
        <!-- body     -->
        <div class="row4 pt-3 fixed-bottom" style="background-color:#FFF;">
            <div class="row d-flex justify-content-center" >
              <p style="font:poppins, sans-serif">
                Endorsin Indonesia. All Right Reseved 2022
              </p>
            </div>
        </div>
    </div>
</template>

<script>

export default{

}

</script>