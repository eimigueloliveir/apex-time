<script setup lang="ts">
import "../../assets/css/components/modal.scss";
const isOpen = ref(false);
</script>

<template>
    <div>
      <UButton class="btn btn-primary" @click="isOpen = true">
        <font-awesome-icon :icon="['fas', 'plus']" />
      </UButton>
      
      <UModal :ui="{
        'background': 'bg-transparent',
        'border': '2px solid rgba(255,255,255, .2)'
        }" class="modalCad" v-model="isOpen">
        <div class="modalCad">
          <h2 class="mt-4">Nova Tarefa</h2>
          <div class="modalBody">
            <input type="text" placeholder="Título" class="input-text"/>
            <textarea placeholder="Descrição" class="input-area"></textarea>
            <select class="select-modal">
              <option selected value="Iniciado">Iniciado</option>
              <option value="Em Andamento">Em Andamento</option>
              <option value="Concluído">Concluído</option>
            </select>
          </div>
          <div class="modalFooter">
            <UButton class="btn btn-primary mb-4" @click="isOpen = false">
              Criar
            </UButton>
          </div>
        </div>
      </UModal>
    </div>
  </template>