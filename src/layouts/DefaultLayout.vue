<script setup lang="ts">

import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
</script>

<template>
<div>
  <Header/>
  <div>
    <span>Default Layout</span>
  </div>
  <slot />
  <Footer/>
</div>
</template>