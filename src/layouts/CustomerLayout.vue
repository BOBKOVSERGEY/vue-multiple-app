<script setup lang="ts">
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'

defineProps({
  isHeader: {
    type: Boolean,
    default: false
  },
  isFooter: {
    type: Boolean,
    default: false
  }
})

</script>

<template>
  <div>
    <Header v-if="isHeader" />
    <div>Customer Layout</div>
    <slot />
    <Footer v-if="isFooter" />
  </div>
</template>