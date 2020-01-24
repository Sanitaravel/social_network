<template>
<div v-if="profile">
    <v-row class="text-left">
        <v-col cols="10">
            <h1 class="green--text text--darken-2">
                <v-icon large color="green darken-2">mdi-account-outline</v-icon>
                {{profile.name}}
            </h1>
        </v-col>
    </v-row>
    <v-row class="text-left">
        <v-col cols="2">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" style="max-width: 100%">
        </v-col>
        <v-col cols="10" class="text-left">
            <p>
                Веб-сайт: <a :href="profile.website" target="_blank">{{profile.website}}</a>
            </p>
            <p>
                E-mail: <a :href="`mailto:${profile.email}`">{{profile.email}}</a>
            </p>
            <p>
                Город: {{profile.address.city}}
            </p>
            <p>
                Место работы: {{profile.company.name}}
            </p>
        </v-col>
    </v-row>
    <v-row>
    <Card v-for="post in posts" :key="post.id" :body="post.body" :title="post.title">
    </Card>
    </v-row>
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
import Card from '../components/Card.vue'
    export default {
        data(){
            return {
                profile: null,
                posts: null
            }
        },
        watch: {
            $route: {
                handler(){
                    console.log("i'm ready")
                    this.$axios.get('http://jsonplaceholder.typicode.com/users/'+ this.$route.params.id)
                    .then(response=>{
                        console.log('response', response)
                        this.profile = response.data
                    })
                    console.log("posts")
                    this.$axios.get('http://jsonplaceholder.typicode.com/posts?userId='+ this.$route.params.id)
                    .then(response1=>{
                        console.log('response1', response1)
                        this.posts = response1.data
                    })
                },
                immediate: true,
            }
        },
        components:{
            Card
        }
    }
</script>
