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
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
        .then(response => {
          console.log(response.data.data);
          this.store.cardList = response.data.data;
          this.store.loading = false;
        })
    },
    GetCardArchetype() {
      axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
        .then(response => {
          this.store.CardArchetype = response.data;
          console.log(this.store.CardArchetype);
        })
    },
    SelectArchetype() {
      if (store.selected == '') {
        this.getCards();
      } else {
        let urlApi = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
        urlApi += `?archetype=${this.store.selected}`;

        axios.get(urlApi)
          .then(response => {
            this.store.cardList = response.data.data;
          })
      }
    }
  },
  created() {

    this.getCards();
    this.GetCardArchetype()
  }
}
</script>

<template>
  <header>
    <AppHeader titolo="Yu-Gi-Oh">

    </AppHeader>
  </header>

  <main>
    <div class="containerContent">
      <AppSearch @change="SelectArchetype()" />
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
  margin-bottom: 20px;
}
</style>