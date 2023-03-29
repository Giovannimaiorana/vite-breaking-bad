<script>
import axios from 'axios';
import { store } from './store.js'
import AppHeader from './components/AppHeader.vue';
import ListCard from './components/ListCard.vue'

export default {
  components: {
    AppHeader,
    ListCard,

  },
  data() {
    return {
      store,
    }
  },
  created() {
    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes')
      .then(response => {
        console.log(response.data.data);
        this.store.cardList = response.data.data;
      })

  }
}
</script>

<template>
  <header>
    <AppHeader titolo="Yu-Gi-Oh"></AppHeader>
  </header>

  <main>
    <div class="containerContent">
      <ListCard />

    </div>
  </main>
</template>

<style lang="scss">
.containerContent {
  width: 100%;
  background-color: rgb(205, 138, 54);
}
</style>