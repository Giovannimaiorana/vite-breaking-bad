<script>
import axios from 'axios';
import store from './store'
import AppHeader from './components/AppHeader.vue';
import ListCard from './components/ListCard.vue'

export default {
  components: {
    AppHeader,
    ListCard,

  },
  data() {
    return {
      store
    }
  },
  mounted() {
    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes')
      .then(response => {
        this.store.cardList = response.data;
      })

  }
}
</script>

<template>
  <header>
    <AppHeader titolo="Yu-Gi-Oh"></AppHeader>
  </header>

  <main>

    <ListCard />




  </main>
</template>

<style lang="scss"></style>