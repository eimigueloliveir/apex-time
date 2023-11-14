<script setup lang="ts">
import "../assets/css/default.scss";
import { type BaseResponse } from "../types/BaseResponse";

const form = {
    name: "",
    email: "",
    password: "",
}

function submit() {
    console.log(form);
    var { data } = useFetch<BaseResponse>("/api/auth/sign-in", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
    });

    if (data.value?.statusCode == 200){
        navigateTo('/tasks')
    }
}

</script>
<template>
    <NuxtLayout name="login">
        <div>
            <div class="loginBox">
                <form @submit.prevent="submit">
                    <h1>Sign-In</h1>
                    <div class="input-box">
                        <input class="form-control" type="text" v-model="form.name" required placeholder="Nome de Usuario" />
                        <font-awesome-icon class="icon" :icon="['fas', 'user']" />
                    </div>
                    <div class="input-box">
                        <input class="form-control" type="text" v-model="form.email" required placeholder="Email" />
                        <font-awesome-icon class="icon" :icon="['fas', 'envelope']" />
                    </div>
                    <div class="input-box">
                        <input class="form-control" type="password" v-model="form.password" required placeholder="Senha" />
                        <font-awesome-icon class="icon" :icon="['fas', 'lock']" />
                    </div>
                    <div class="input-box">
                        <button class="btn btn-primary me-3" type="submit">Sign-In</button>
                    </div>
                    <div class="input-box">
                        <NuxtLink class="register-link" to="/">Já Tem Uma Conta?</NuxtLink>
                    </div>
                </form>
            </div>
        </div>
    </NuxtLayout>
</template>