import { reactive } from 'vue';

export const store = reactive({
    cardList: [],
    CardArchetype: [],
    selected: '',
    loading: true
})