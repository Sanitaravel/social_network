<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">{{login}}</div>
        <v-list-item-title class="headline mb-1">{{name}}</v-list-item-title>
      </v-list-item-content>

      <v-img
      max-height="80"
      max-width="80"
      :src="link"
      ></v-img>
    </v-list-item>

    <v-card-actions>
      <v-btn class="post" tile outlined color="green" text>Перейти в профиль</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    props:['name', 'login', 'id'],
    data() {
        return {
            link:'https://randomuser.me/api/portraits/men/' + this.id +'.jpg'
        }
    },
}
</script>