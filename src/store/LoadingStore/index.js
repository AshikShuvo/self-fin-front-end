import { defineStore } from 'pinia';

export const useLoadingStore = defineStore('LoadingStore', {
    state: () => ({
        counter: 0
    }),
    getters: {
        isLoading: (state) => {
            if (state.counter > 0) {
                return true;
            } else {
                return false;
            }
        }
    },
    actions: {
        startLoader(){
            this.counter++;
        },
        stopLoader(){
            if(this.counter>0){
                this.counter--;
            }
        }
    }
});
