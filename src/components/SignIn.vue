<template>
    <section class="container-signin">
        <div class="row">
            <div class="card-sign">
                <form action="">
                    <div class="form-group-email">
                        <label for="email" class="input-label">Email <span class="text-danger"> *</span></label>
                        <input type="email" class="form-control" placeholder="Email" required="required"/>
                    </div>
                    <div class="form-group-password">
                        <label for="password" class="input-label">Password<span class="text-danger"> *</span></label>
                        <input type="password" class="form-control" placeholder="Password" required="required"/>
                    </div>
                    <br />
                    <p class="remember"><input type='checkbox' />Remember Me</p>
                    <br />
                    <div class="form-group d-flex justify-content-left">
                        <a class="forgot" href="">Forgot Your Password ? </a>
                    </div>
                    <div class="form-group d-flex justify-content-center">
                        <button class="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
    import { ref } from 'vue'
    export default {
        name: 'signin',
        created() {
            console.log('asdfasdasdf')
        }
    }
</script>

<style>
    .card-sign {
        width: 300px;
        height: 350px;
        margin-bottom: 30%;
        margin-top: 50%;
        margin-left: 7%;
        border-radius: 10px;
        background-color: #ffffff;
    }

    .form-group-email {
        margin-top: 5%;
        margin-left: 2%;
    }

    .form-group-password {
        margin-top: 5%;
        margin-left: 2%;
    }

    .forgot {
        margin-left: 2%;
        margin-top: 5%;
    }

    .remember {
        margin-left: 2%;
    }

    .btn-primary {
        margin-bottom: 10%;
        margin-left: 90%;
        width: 150px;
    }

    @media (min-width: 320px) {

        .container-signin {
            height: 750px;
            position: relative;
        }

        .card-sign {
            width: 250px;
            height: 350px;
            background-color: #ffffff;
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            border-radius: 10px;
        }

        .form-group-email {
            margin-top: 5%;
            margin-left: 2%;
        }

        .form-group-password {
            margin-top: 5%;
            margin-left: 2%;
        }

        .forgot {
            margin-left: 2%;
            margin-top: 5%;
        }

        .remember {
            margin-left: 2%;
        }

        .btn-primary {
            margin-bottom: 10%;
            margin-left: 50%;
            margin-top: 10%;
            width: 150px;
        }
    }

</style>