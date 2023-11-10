<template>
    <NuxtLayout name="login">
        <div>
            <div class="loginBox">
                <form>
                    <h1>Sign-In</h1>
                    <div class="input-box">
                        <input class="form-control" type="text" name="" placeholder="Nome de Usuario" />
                        <font-awesome-icon class="icon" :icon="['fas', 'user']" />
                    </div>
                    <div class="input-box">
                        <input class="form-control" type="text" name="" placeholder="Email" />
                        <font-awesome-icon class="icon" :icon="['fas', 'envelope']" />
                    </div>
                    <div class="input-box">
                        <input class="form-control" type="password" name="" placeholder="Senha" />
                        <font-awesome-icon class="icon" :icon="['fas', 'lock']" />
                    </div>
                    <div class="input-box">
                        <button class="btn btn-primary me-3" type="submit">Sign-In</button>
                    </div>
                    <div class="input-box">
                        <a class="register-link" href="/">Já Tem Uma Conta?</a>
                    </div>
                </form>
            </div>
        </div>
    </NuxtLayout>
</template>