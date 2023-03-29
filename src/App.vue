<script>
import axios from 'axios';
import { store } from './store.js'
import AppHeader from './components/AppHeader.vue';
import ListCard from './components/ListCard.vue'
import AppSearch from './components/AppSearch.vue'
import LoadingApp from './components/LoadingApp.vue'

export default {
  components: {
    AppHeader,
    ListCard,
    AppSearch,
    LoadingApp,

  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCards() {
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes')
        .then(response => {
          console.log(response.data.data);
          this.store.cardList = response.data.data;
          this.store.loading = false;
        })
    }
  },
  created() {

    this.getCards();
  }
}
</script>

<template>
  <header>
    <AppHeader titolo="Yu-Gi-Oh"></AppHeader>
  </header>

  <main>
    <div class="containerContent">
      <AppSearch />
      <ListCard />

    </div>
  </main>
  <LoadingApp />
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.containerContent {
  width: 100%;
  background-color: rgb(205, 138, 54);
}
</style>