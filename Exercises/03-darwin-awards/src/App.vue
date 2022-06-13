<script setup>
import { ref, onMounted, watch } from "vue";
import Result from "./Result.vue";
const darwins = ref([]);
const darwin = ref();
const selectDarwin = ref();
onMounted(async () => {
  const res = await fetch("http://localhost:8000/darwins");
  darwins.value = await res.json();
});

watch(darwin, async () => {
  const res = await fetch(
    `http://localhost:8000/darwins/${darwin.value.name.death}`
  );
  selectDarwin.value = (await res.json())[0];
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
          v-for="(element, index) in darwins"
          :key="index"
          :value="element"
        ></p>

        {{ name }}
        {{ death }}
      </div>
    </main>
  </div>
</template>
