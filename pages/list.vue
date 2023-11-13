<script setup lang="ts">
import TarefaCadModal from "../components/modal/TarefaCadModal.vue";
</script>
<template>
    <NuxtLayout name="default">
        <TarefaCadModal />
        <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h2 class="card-title">Tarefas</h2>
                <button class="btn btn-primary" type="submit">
                    <font-awesome-icon :icon="['fas', 'plus']" />
                </button>
            </div>
            <div class="card-body justify-content-between align-items-center">
                <div class="card tarefa-card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h3 class="card-title ">Tarefa 1</h3>
                        <button class="btn btn-primary" type="submit">
                            <font-awesome-icon :icon="['fas', 'pen-to-square']" />
                        </button>
                    </div>
                    <div class="card-body">
                        <p class="card-text">Descrição</p>
                    </div>
                    <div class="card-footer">
                        <p class="card-text">Data: 12/12/2023</p>
                    </div>
                </div>
                <div class="card tarefa-card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h3 class="card-title ">Tarefa 2</h3>
                        <button class="btn btn-primary" type="submit">
                            <font-awesome-icon :icon="['fas', 'pen-to-square']" />
                        </button>
                    </div>
                    <div class="card-body">
                        <p class="card-text">Descrição</p>
                    </div>
                    <div class="card-footer">
                        <p class="card-text">Data: 12/12/2023</p>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>
