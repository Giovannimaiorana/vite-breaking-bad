<script>
import { store } from '../store.js';
export default {
    name: AppSearch,
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container_select">
        <select id="type_select">
            <option v-for="(name, i) in store.CardArchetype" :key="i" :value="name.archetype_name">
                {{ name.archetype_name }}
            </option>



        </select>
    </div>
</template>

<style scoped lang="scss">
#type_select {
    height: 40px;
    border: none;
    border-radius: 5px;
    padding: 10px;

}

.container_select {
    max-width: 1300px;
    margin: auto;
    padding: 10px;
}
</style>