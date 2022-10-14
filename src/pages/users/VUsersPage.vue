<template>
<div class="page">
  <VModal v-model="elementVisible">
<VUserDetail v-if="selectedUser" :user="selectedUser"/>
  </VModal>
<VSearchBar @onSearch="onSearch">

</VSearchBar>
  <ul class="users__list">
    <transition-group name="fade">
       <VUserCard 
    v-for="user,index in users" 
    :key="index"
    :user="user"
    @click="clickOnCard(user)"
    >
  </VUserCard>
    </transition-group>
 
  </ul>
</div>
</template>
<script setup lang="ts">
import { useToggle } from '@/composition';
import { useUsersStore } from '@/stores/modules/users/use-users.store';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import VUserCard from './components/VUserCard.vue';
import VModal from '@/components/VModal.vue';
import VUserDetail from './components/VUserDetail.vue';
import { User } from '@/stores/models';
import VSearchBar from './components/VSearchBar.vue';
const store = useUsersStore()
const {users,user:selectedUser} = storeToRefs(store)  
const {elementVisible,toggleElement} = useToggle()

const clickOnCard=(user:User)=>{
  store.setUser(user)
  toggleElement()

}
const onSearch=(searchTerm:string)=>{
store.fetchUsers(searchTerm)
}
onMounted(()=>{
  store.fetchUsers()  
})
</script>
<style scoped lang="scss">
@import "./styles/users_page.style.scss";
@import "@/assets/transition.animations.scss";
.page{
  padding: .5rem;
}

</style>