<template>
<div class="layout">

<main class="layout__main">
    <RouterView/>
</main>
</div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">

@media screen and (min-width:960px) {
  .layout__main{
width:var(--main_width);
margin: auto;
}  
}
</style>