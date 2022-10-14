<template>
<li class="user_card">
<h3 class="user_card__name">
   {{user.name}} 
</h3>

<ul class="user_card__contacts">
    <li class="user_card__contact">
   <a :href="`tel:${user.phone}`" @click.stop class="user_card__link">
       <font-awesome-icon class="user_card__icon" icon="fa-mobile-screen"/>
       <span class="user_card__phone">{{user.phone}}</span>
   </a>
    </li>
    <li class="user_card__contact">
  <a :href="`mailto:${user.email}`" @click.stop  class="user_card__link">
        <font-awesome-icon class="user_card__icon" icon="fa-regular fa-envelope"/>
        <span class="user_card__email">{{user.email}}</span>
    </a>
    </li>
</ul>

</li>
</template>
<script setup lang="ts">
import { User } from '@/stores/models';
const props = defineProps<{
    user:User
}>()

</script>
<style scoped lang="scss">
@import "../styles/users_page.style.scss";
@import "@/assets/transition.animations.scss";

</style>