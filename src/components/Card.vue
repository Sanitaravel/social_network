<template>
  <v-card
    class="mx-auto"
    color="green"
    dark
    max-width="1300"
  >
    <v-card-title>
      <span class="title font-weight-light">{{title}}</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      {{body}}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Kurtis Weissnat</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    props: ['title', 'body'],
}
</script>