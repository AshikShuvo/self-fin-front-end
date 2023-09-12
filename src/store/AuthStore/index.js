import { defineStore } from 'pinia';
const initialState={
    tokens: localStorage.getItem('AuthToken')?JSON.parse(localStorage.getItem('AuthToken')):null
}
export const useAuthStore = defineStore('AuthStore', {
    state: () => initialState,
    getters: {
        isAuthenticated: (state) => {
            if (!state.tokens) {
                return false;
            }
            return true;
        },
        getAuthToken: (state) => {
            return state.tokens;
        }
    },
    actions: {
        setAuthToken(payload) {
            localStorage.setItem('AuthToken',JSON.stringify(payload))
            this.tokens = payload;
        },
        clearAuthToken() {
            localStorage.setItem('AuthToken', null);
            this.tokens = null;
        }
    }
});
