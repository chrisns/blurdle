<template>
  <main>
    <div id="game" :level="level" :style="`background-image: url(${image})`">
      <div v-if="level === 7" class="name">It was {{ name }}!</div>
    </div>
  </main>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  image: string;
  level: number;
}>();
</script>

<style scoped lang="scss">
.name {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 5px solid white;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 1rem;
}
</style>
