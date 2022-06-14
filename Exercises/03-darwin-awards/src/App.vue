<script setup>
import { ref, watch } from "vue";
import Result from "./Result.vue";

const darwin = ref([]);
const selectDarwin = ref();

watch(darwin, async () => {
  const res = await fetch(` http://localhost:8000/darwins?q=${darwin.value}`);
  selectDarwin.value = await res.json();
  console.log(selectDarwin.value);
});
</script>

<template>
  <div class="bg-slate-50 flex flex-col min-h-screen">
    <header
      class="
        mt-6
        mx-8
        shadow-md
        rounded-md
        flex
        justify-center
        bg-white
        overflow-hidden
      "
    >
      <img src="/logo.png" alt="logo" class="w-16 animation-image" />
    </header>
    <main class="container mx-auto m-8 border-2 border-dashed rounded p-8">
      <div class="form-control input">
        <label for="title">Rechercher</label>
        <input v-model="darwin" />
        <p
          v-for="(element, index) in selectDarwin"
          :key="index"
          :value="element"
        ></p>

        {{ element.name }}
        {{ element.death }}
      </div>
      <div
        class="flex flex-col items-center sapce-y-4 mt-8"
        v-if="selectDarwin"
      >
        <h2 class="font-semibold text-4xl">{{ selectDarwin.name }}</h2>
        <h3 class="font-semibold text-2xl">
          {{ selectDarwin.death }}
        </h3>
        <p class="text-2xl">{{ selectDarwin.description }}</p>
      </div>
    </main>
  </div>
</template>
