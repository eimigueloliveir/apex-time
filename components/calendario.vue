<script setup lang="ts">
import "../../assets/css/components/modal.scss";

const emit = defineEmits(["refresh"]);

const isOpen = ref(false);

let form = {
  title: "",
  content: "",
  status: 1,
};

let daysOfMothn = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31
]

async function submit() {
  var { data } = await useFetch("/api/tasks/create", {
    method: "POST",
    body: JSON.stringify(form),
  });

  if (data.value?.statusCode == 200) {

    isOpen.value = false;
  }

  emit("refresh");
}

</script>

<template>
  <div>
    <UButton class="btn btn-primary" @click="isOpen = true">
      <font-awesome-icon :icon="['fas', 'plus']" />
    </UButton>

    <UModal :ui="{
      'background': 'bg-transparent',
      'border': '2px solid rgba(255,255,255, .2)',
      'width': '800px'
    }" class="modalCad" v-model="isOpen">
      <div class="modalCad">
        <h2 class="mt-4">Nova Tarefa</h2>
        <form @submit.prevent="submit">
          <div class="modalBody d-flex">
            <div v-for="days in daysOfMothn" class="card day m-1">
                <h3>{{ days }}</h3>
            </div>
          </div>
        </form>
      </div>
    </UModal>
  </div>
</template>