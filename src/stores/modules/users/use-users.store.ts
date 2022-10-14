
import { defineStore } from 'pinia'
import { User } from '@stores/models/';
import {  Api, Query } from '@stores/store.api';
type UsersState = {
  loading: boolean,
  user: User | null,
  users:User[]
}
export const useUsersStore = defineStore('users', {
  state: ():UsersState => {
    return {
      loading: false,
      user: null,
      users:[]
     
    }
  },
  actions: {
setUser(user?: User) {
this.user = user ?? new User()
},
async fetchUsers(term?:string) {
this.loading = true
const query:Query[] = []
if(term)query.push({key:"term",value:term})
this.users =  await Api.shared()
.get<User[]>(query, User)
this.loading = false
return this.users
},
  }
  })


