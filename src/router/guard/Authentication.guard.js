import { useAuthStore } from '@/store/AuthStore';

export function preventIfNotLogIn(to, from, next) {
    const authStore = useAuthStore();
    if (authStore.isAuthenticated) {
        next();
    } else {
        next('/login');
    }
}

export function preventIfLogIn(to, from, next) {
    const authStore = useAuthStore();
    if (authStore.isAuthenticated) {
        next('/dashboard');
    } else {
        next();
    }
}