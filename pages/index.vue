<script setup lang="ts">
import type { BaseResponse } from "~/types/BaseResponse";
import "../assets/css/default.scss";

let form = {
    email: "",
    password: "",
}

function submit(e) {
    e.stopPropagation();

    var { data } = useFetch<BaseResponse>("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(form),
    });

    if (data.value?.statusCode == 400) {
        alert(data.value.statusMessage);
        return;
    }

    navigateTo("/tasks");
}

</script>
<template>
    <NuxtLayout name="login">
        <div>
            <div class="loginBox">
                <form @submit.prevent="submit">
                    <h1>Login</h1>
                    <div class="input-box">
                        <input class="form-control" type="text" v-model="form.email" required placeholder="Nome de Usuario" />
                        <font-awesome-icon class="icon" :icon="['fas', 'user']" />
                    </div>
                    <div class="input-box">
                        <input class="form-control" type="password" v-model="form.password" required placeholder="Senha" />
                        <font-awesome-icon class="icon" :icon="['fas', 'lock']" />
                    </div>
                    <div class="input-box">
                        <button class="btn btn-primary me-3" type="submit">Login</button>
                    </div>
                    <div class="input-box">
                        <NuxtLink class="register-link" to="/sign-in">Não Tem Conta?</NuxtLink>
                    </div>
                </form>
            </div>
        </div>
    </NuxtLayout>
</template>