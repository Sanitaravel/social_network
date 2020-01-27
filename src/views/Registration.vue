<template>
    <v-row class="text-left">
    <v-col cols="11">
    <div class="center">
        <v-form
        ref="form"
        v-model="valid"
        :lazy-validation="lazy"
        >
        <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Имя"
            required
        ></v-text-field>

        <v-text-field
            v-model="login"
            :counter="10"
            :rules="loginRules"
            label="Логин"
            required
        ></v-text-field>

        <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
        ></v-text-field>
        <v-banner single-line="true">
            Далее поля, необязательные для заполнения
        </v-banner>

        <v-text-field
            v-model="website" 
            label="Веб-сайт"
            required
        ></v-text-field>

        <v-text-field
            v-model="city" 
            label="Город"
            required
        ></v-text-field>

        <v-text-field
            v-model="company" 
            label="Место работы"
            required
        ></v-text-field>

        <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'Для продолжения вы должны быть согласны!']"
            label="Вы согласны с условиями пользования?"
            required
        ></v-checkbox>

        <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
        >
            Регистрация
        </v-btn>

        <v-btn
            color="error"
            class="mr-4"
            @click="reset"
        >
            Сбросить форму
        </v-btn>

        <v-btn
            color="warning"
            @click="resetValidation"
        >
            Сбросить регистрацию
        </v-btn>
        </v-form>
    </div>
    </v-col>
    </v-row>
</template>


<script>
  export default {
    data: () => ({
      datas: [],
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Имя обязательно',
        v => (v && v.length <= 10) || 'Имя должно иметь меньше 10 символов',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail обязателен',
        v => /.+@.+\..+/.test(v) || 'E-mail должен быть реальным',
      ],
      login: '',
      loginRules: [
        v => !!v || 'Логин обязателен',
        v => (v && v.length <= 10) || 'Логин должен иметь меньше 10 символов',
      ],
      website: '',
      city: '',
      company: '',
      checkbox: false,
      lazy: false,
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>
