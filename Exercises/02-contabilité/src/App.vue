 <!-- mi version -->

<script setup>
import { ref, computed } from "vue";

const revenus = ref({
  title: "",
  montant: "",
});
const addNum = () => {
  revenusList.value.push({ title: in.value, montant: });
};
const sorties = ref({
  title: "",
  montant: "",
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
      <!-- CONTENU ICI -->
      <div id="form" class="grid gap-4 grid-cols-2">
        <form class="grid grid-2 gap-4">
          <div class="form-control input">
            <label for="title">Titre</label>
            <input type="text" id="in" v-model="revenus.title" />
          </div>
          <div class="form-control input">
            <label for="montant">Montant</label>
            <input
              type="number"
              id="montant"
              v-model.number="revenus.montant"
            />
          </div>

          <div class="col-span-2">
            <button class="btn primary" type="submit">Ajouter</button>
          </div>
          <div class="border-t-2 grid grid-cols-2 gap-4">
            <ul>
              <li
                v-for="{ title, montant } in revenus"
                @click="onClickRev"
                :key="index"
              >
                {{ title }} {{ montant }}
              </li>
            </ul>
          </div>
        </form>

        <form class="grid grid-2 gap-4">
          <div class="form-control input">
            <label for="title">Titre</label>
            <input type="text" id="title" v-model="sorties.title" />
          </div>
          <div class="form-control input">
            <label for="montant">Montant</label>
            <input type="number" id="out" v-model.number="sorties.montant" />
          </div>

          <div class="col-span-2">
            <button class="btn primary" type="submit">Ajouter</button>
          </div>
          <div
            class="mt-8 border-t-2 pt-8 fles justify-center text-4xl"
            v-if="sumRandomList !== 0"
          >
            {{ sumRandomList }}
          </div>
        </form>
      </div>
      <div
        class="
          mt-8
          border-t-2 border-t-green-200
          pt-8
          fles
          justify-center
          text-4xl
        "
        v-if="sumRandomList !== 0"
      >
        {{ sumRandomList }}
      </div>
    </main>
  </div>
</template>
