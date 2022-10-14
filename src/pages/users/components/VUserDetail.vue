<template>
  <div class="user_detail">
    <h2 class="user_detail__name">{{ user.name }}</h2>

    <ul class="user_detail__list">
      <li
        class="user_detail__item"
        v-for="(item, index) in labelsRuMap"
        :key="index"
      >
        <span class="user_detail__label">
          {{ item[1] }}
        </span>
       
        <span v-if="notContact(item[0])"  :class="`user_detail__${item[0]}`" class="gray user_detail__value">
          {{ detailValue(item[0]) }}
        </span> 
        <a v-else :href="contactHref(item[0])"  :class="`user_detail__${item[0]}`" class="gray user_detail__value">
          {{ detailValue(item[0]) }}
        </a>
      </li>
    </ul>
    <div class="user_detail__additional">
        <div class="user_detail__label">
            Дополнительная информация
        </div>
        <div class="user_detail__value gray">
            {{user.address}}
        </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { User } from "@/stores/models";
const props = defineProps<{
  user: User;
}>();
const labelsRuMap = new Map<keyof User, string>([
  ["phone", "Телефон"],
  ["email", "Почта"],
  ["hireDate", "Дата приема"],
  ["positionName", "Должность"],
  ["department", "Подразделение"],
]);
const detailValue = (key:keyof User)=>{
if(key === 'hireDate')
return props
.user
.hireDate.toLocaleDateString('en-EN',{month:'short',day:'2-digit',year:'numeric'})
return props.user[key]
}

const notContact = (key:keyof User)=>{
return key !=="email" && key !== "phone"
}
const contactHref = (key:keyof User)=>{
if(key === 'email') return `mailto:${props.user[key]}`
if(key === 'phone') return `tel:${props.user[key]}`

} 
</script>
<style scoped lang="scss">
.user_detail {
  width: 578px;
  height: 466px;
  padding: 45px 30px;
  font-weight: 400;
  overflow: hidden;
  &__list{
    margin-top: 60px;
    display: grid;
    gap: 1rem;
  }
  &__item{
    display: grid;
  }
  &__name{
    font-weight: 500;
  }
&__label{
    color: rgb(55, 49, 49);
}
  &__label::after {
    content: ":";
  }
  &__phone.user_detail__value{
    font-size: 18px;
  }
  &__phone,&__email{
    text-decoration: underline;
  }
  &__value{
    width: 310px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
font-size: 14px;
  }
  &__additional{
    margin-top: 50px;
  }
}
.gray{
    color:gray;
 
}
.user_detail__additional{
    display: grid;
    gap: .5rem;
}
@media screen and (min-width:599px) {
    .user_detail__item{
    grid-template-columns: 40% min-content;
  }
}
</style>
