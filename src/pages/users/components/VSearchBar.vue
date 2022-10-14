<template>
<form class="search__form" @submit.prevent="onSearch">
<div class="search__wrapper">
    <input class="search__input" 
    type="text"
    v-model="term"
    @keyup="debouncedFn"
    >
    <font-awesome-icon class="search__icon" icon="magnifying-glass"/>

</div>
</form>
</template>
<script setup lang="ts">
import {useDebounce} from '@/composition/'
import { ref } from 'vue';

const term = ref('')
const onSearch = ()=>{
emit("onSearch",term.value)
}
const debouncedFn = useDebounce(onSearch,1000)

const emit = defineEmits<{
    (event:"onSearch",term:string):void
}>()
</script>
<style scoped lang="scss">
.search{
    &__form{
        margin:40px 0;
    }
    &__wrapper{
    display: flex;
padding: .6rem 1rem;
border:1.2px solid rgb(236, 235, 235);
border-radius: 1.3rem;
    }
    &__input{
      flex:1 1 auto;  
      padding: 0;
      margin: 0;
      font-size: 1em;
    background-color: transparent;
    border: none;
    }
    &__input:focus{
        outline: none;
    }
    &__icon{
        width: 1.2rem;
        height: 1.2rem;
color: var(--accent-color);
    }
}
</style>