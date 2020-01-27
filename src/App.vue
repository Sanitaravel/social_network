 <template>
  <v-app id="app">
    <v-navigation-drawer color="green"
                         dark
                         right
                         app
                         expand-on-hover
                         hide-overlay
                         permanent>
      <v-list
          nav 
          shaped
          dense>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src='https://randomuser.me/api/portraits/men/1.jpg' alt="мужчина">
          </v-list-item-avatar>
          <v-list-item-content class="text-left">
            <v-list-item-title class="font-weight-black">SocialLink</v-list-item-title>
            <v-list-item-subtitle>Kurtis Weissnat</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="my-3"></v-divider>  
        <v-list-item link
                     :to="link.path"
                     :key="link.path"
                     v-for="link in links">
          <v-list-item-icon>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-left">
              {{link.label}}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content class="px-12 py-3">
      <v-container fluid>
        <router-view v-on:login="updateUser"/>
      </v-container>
    </v-content>
  </v-app>
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
export default {
  props: {
      source: String,
    },
  methods:{
    updateUser(updID){
      this.links[2].path = this.links[2].path + updID;
    }
  },
  data(){
    return {
      drawer: null,
      photo: '',
      links: [
        {
          label: 'Главная',
          path: '/',
          icon: 'mdi-home-outline'
        },
        {
          label: 'Пользователи',
          path: '/users',
          icon: 'mdi-fingerprint'
        },
        {
           label: 'Профиль',
           path: '/profile/',
           icon: 'mdi-face'
        },
        {
          label: 'Логин',
          path:'/login',
          icon: 'mdi-login'
        }
      ]
    }
  },
}
</script>