<template>
  <section>
    <div class="container mx-auto px-4">
      <div class="py-10 space-y-10">
        <h3 class="font-bold text-center section-title uppercase">Nosso Espaço</h3>
        <div class="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <div class="aspect-w-2 aspect-h-2 row-span-2 bg-red-200">
            <img src="https://i.redd.it/gv2lx322w5001.png" class="object-cover" alt="Office">
          </div>
          <div class="aspect-w-2 aspect-h-1 bg-red-200">
            <img src="https://i.redd.it/gv2lx322w5001.png" class="object-cover" alt="Office">
          </div>
          <div class="aspect-w-2 aspect-h-1 bg-red-200">
            <img src="https://i.redd.it/gv2lx322w5001.png" class="object-cover" alt="Office">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.slide {
  @apply bg-red-200 p-20;
}

.quote-left {
  top: -12.88px;
  left: -12px
}
.quote-right {
  bottom: -12.25px;
  right: -13px
}
</style>

<script>
import { VueAgile } from "vue-agile";

export default {
  name: "Home",
  components: {
    agile: VueAgile,
  },
};
</script>
