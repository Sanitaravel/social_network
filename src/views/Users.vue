<template>
    <div>
        <ProfileCard v-for="user in users" :key="user.id" :name='user.name' :login='user.username' :id="user.id">
        </ProfileCard>
    </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#nav {
  a {
    font-weight: bold;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
import ProfileCard from '../components/ProfileCard.vue'
export default {
    components:{
        ProfileCard
    },
    data() {
        return {
            users:[]
        }
    },
    methods:{
        update(){
            this.$axios.get('http://jsonplaceholder.typicode.com/users/')
            .then(responce=>{
                console.log("user_responce", responce.data)
                this.users = responce.data
            })
        }        
    },
    watch: {
        $route:{
            handler(){
                this.update()
            }
        },
        immediate: true,
    },
    mounted() {
        this.update()
    },
}
</script>