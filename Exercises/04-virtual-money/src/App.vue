<script setup>
import FormCrypto from "./ui/FormCrypto.vue";
import Header from "./ui/Header.vue";
import CryptoElement from "./ui/CryptoElement.vue";
import { ref, provide } from "vue";

const isLogged = ref(true);
const toggleLogin = () => {
  isLogged.value = !isLogged.value;
};

provide("cryptoUser", isLogged);
provide("toggleCryptoUser", toggleLogin);
</script>



<template>
  <div class="bg-slate-50 flex flex-col min-h-screen">
    <Header />

    <main class="container mx-auto m-8 border-2 border-dashed rounded p-8">
      <FormCrypto />
      <Quote> </Quote>
    </main>
  </div>
</template>
