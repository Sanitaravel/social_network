<template>
    <div class="d-flex justify-center">
        <v-card width="600px" class="mt-12 pa-10">
            <v-card-title>
                Войдите в аккаунт
            </v-card-title>

            <v-text-field
                label="Введите логин"
                v-model="login"
                outlined
            ></v-text-field>

            <v-text-field
                label="Введите пароль"
                v-model="password"
                outlined
                :rules="[rules.required, rules.min]"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1"
            ></v-text-field>

            <v-btn @click="authenticate">
                Войти
            </v-btn>
            <div class="nav">
            <router-link to="registration">Регистрация</router-link>
            </div>
        </v-card>
        <router-view/>

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
export default {
    data () {
      return {
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: '',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 4 || 'Min 4 characters',
          emailMatch: () => ('The email and password you entered don\'t match'),
        },
      }
    },
    methods:{
        authenticate(){
            this.axios.get('http://188.225.47.187/api/jsonstorage/34c68c7f92b79a3fdaa0fc579f9340d6')
            .then(
                (response) =>{
                    let users = response.data;
                    let found = false;
                    for (let index in users){
                        if (this.login == users[index].login && this.password == users[index].password){
                            let z = users[index].id;
                            this.$emit('login', z)
                            this.$router.push('/profile/' + z);
                            found = true;
                            break;
                        }
                    }
                    if (!found){
                        window.alert("Неверный логин или пароль!")
                    }
                }
            )
        }
    }
}
</script>