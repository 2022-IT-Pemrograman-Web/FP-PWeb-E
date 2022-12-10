<template>
    <div class="register">
        <!-- body -->
        <div class="container" style="margin-top:5rem;">

            <div class="row">

                <h1 class="d-flex justify-content-center"  style="font:bold 46px poppins, sans-serif; margin:30px 0 25px 0; color:#000;">
                    SIGN UP
                </h1>
                <div class="row p-4" style="background-color:#f0f0f0; border:1px solid #c3c3c3; border-radius:5px;">

                    <div class="col text-end m-auto">
                        <h3 >Sign up anddd</h3>
                        <h1 >Be part of ENDORSIN</h1>
                    </div>
                    <div class="col-sm-1 d-flex justify-content-center align-items-center">
                        <img src="../assets/line.png" alt="" >
                    </div>
                    <div class="col">
                        <!-- <div class="body" style="margin: 10rem;"> -->        
                            <form action="" method="post">
                                <div class="mb-2 row">
                                    <label for="name" class="d-flex justify-content-start">Name</label>
                                </div>
                                <div class="mb-3 row d-flex justify-content-center">
                                    <div class="col">
                                        <input name="name" type="text" class="form-control" id="name" value="">
                                    </div>
                                </div>
                                <div class="mb-2 row">
                                    <label for="username" class="d-flex justify-content-start">Username</label>
                                </div>
                                <div class="mb-3 row d-flex justify-content-center">
                                    <div class="col">
                                        <input name="username" type="text" class="form-control" id="username" value="">
                                    </div>
                                </div>
                                <div class="mb-2 row">
                                    <label for="email" class="d-flex justify-content-start">E-mail</label>
                                </div>
                                <div class="mb-3 row d-flex justify-content-center">
                                    <div class="col">
                                        <input name="email" type="email" class="form-control" id="email">
                                    </div>
                                </div>
                                <div class="mb-2 row">
                                    <label for="telepon" class="d-flex justify-content-start">Telepon</label>
                                </div>
                                <div class="mb-3 row d-flex justify-content-center">
                                    <div class="col">
                                        <input name="telepon" type="text" class="form-control" id="telepon">
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
                                <div class="mb-2 row">
                                    <label for="password2" class="d-flex justify-content-start">Konfirmasi Password</label>
                                </div>
                                <div class="mb-3 row d-flex justify-content-center">
                                    <div class="col">
                                        <input name="password2" type="password" class="form-control" id="password2">
                                    </div>
                                </div>
                                    
                                <p class="d-flex justify-content-center fst-italic">sudah punya akun?&nbsp;<router-link to="/login" style="color:#E5B323;">login</router-link></p>
                                
                                <div class="d-flex justify-content-center">
                                    <button class="btn" type="submit" name="register" style="background-color:#E5B323; font-weight: 600; color:white; padding:10px 200px">sign up</button>
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