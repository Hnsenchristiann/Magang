<template>
    <div class="container-regis">
        <div class="row">
            <div class="card-regis">
                <form action="">
                    <div class="form-group-user">
                        <label for="username" class="input-label">Username<span class="text-danger"> *</span></label>
                        <input type="username" class="form-control" placeholder="Masukkan Username" required="required" maxlength="20" mmin="5" />
                    </div>
                    <br />
                    <div class="form-group-full">
                        <label for="fullname" class="input-label">Full Name<span class="text-danger"> *</span></label>
                        <input type="fullname" class="form-control" placeholder="Masukkan fullname" required="required" maxlength="20" />
                    </div>
                    <div class="form-group-email">
                        <label for="email" class="input-label">Email<span class="text-danger"> *</span></label>
                        <input type="email" class="form-control" placeholder="Email" required="required" />
                    </div>
                    <br />
                    <div class="form-group-pass">
                        <label for="password" class="input-label">Password<span class="text-danger"> *</span></label>
                        <input type="password" class="form-control" placeholder="Password" required="required" />
                    </div>
                    <br />
                    <div class="form-group-conpass">
                        <label for="password" class="input-label">Confrim Passwrod<span class="text-danger"> *</span></label>
                        <input type="password" class="form-control" placeholder="Password" required="required" />
                    </div>
                    <br />
                    <p class="remember"><input type='checkbox' /> i agree to <a href="">terms</a> and <a href="">policy</a></p>
                    <a class="regis" href="">Already registered ? </a>
                    <div class="form-group d-flex justify-content-center">
                        <button class="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue'
    export default {
        name: 'regis',
        created() {
            console.log('asdfasdasdf')
        }
    }
</script>

<style>

    .card-regis {
        width: 570px;
        height: 580px;
        margin-bottom: 5%;
        margin-top: 10%;
        margin-left: 10%;
    }

    .form-group-user {
        margin-top: 5%;
    }

    .regis {
        margin-left: 2%;
    }

    .form-group-user {
        margin-left: 2%;
    }

    .form-group-full {
        margin-left: 2%;
    }

    .form-group-email {
        margin-left: 2%;
    }

    .form-group-pass {
        margin-left: 2%;
    }

    .form-group-conpass {
        margin-left: 2%;
    }

    .btn-primary {
        width: 250px;
        margin-right: 5%;
    }

    @media (min-width: 320px) {

        .container-regis {
            height: 750px;
            position: relative;
        }

        .card-regis {
            width: 300px;
            background-color: #ffffff;
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            border-radius: 10px;
        }

        .form-group-user {
            margin-top: 5%;
        }

        .regis {
            margin-left: 2%;
        }

        .form-group-user {
            margin-left: 2%;
        }

        .form-group-full {
            margin-left: 2%;
        }

        .form-group-email {
            margin-left: 2%;
        }

        .form-group-pass {
            margin-left: 2%;
        }

        .form-group-conpass {
            margin-left: 2%;
        }

        .btn-primary {
            width: 250px;
            margin-right: 5%;
        }
    }

</style>