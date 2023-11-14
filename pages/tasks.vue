<script setup lang="ts">
import TarefaUpdateModal from "~/components/modal/TarefaUpdateModal.vue";
import TarefaCadModal from "../components/modal/TarefaCadModal.vue";

const router = useRouter();

var { data } = await useFetch("/api/tasks/all", {
    method: "GET",
});

async function deletetask(id: number) {

    await useFetch(`/api/tasks/delete/${id}`)
    
    await router.push({
        path: "/tasks", 
        force: true,
        query: {
            id: id
        },
        state: {}
    })

    window.location.reload();
}


</script>
<template>
    <NuxtLayout name="default">
        <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h2 class="card-title">Tarefas</h2>
                <TarefaCadModal />
            </div>
            <div class="card-body justify-content-between align-items-center">
                <div class="card tarefa-card" v-for="task in data">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h3 class="card-title ">{{ task.title }}</h3>
                        <div>
                            <TarefaUpdateModal :id="task.id"/>
                            <button class="btn btn-danger" @click="deletetask(task.id)">
                                <font-awesome-icon :icon="['fas', 'trash']" />
                            </button>

                        </div>
                    </div>
                    <div class="card-body text-left m-4">
                        <p class="card-text">{{ task.content }}</p>
                    </div>
                    <div class="card-footer text-right">
                        <p class="card-text">Data: {{ new Date(task.createdAt).toLocaleDateString() }}</p>
                    </div>
                </div>
                
            </div>
        </div>
    </NuxtLayout>
</template>
