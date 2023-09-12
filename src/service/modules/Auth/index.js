import { useAuthStore } from '@/store/AuthStore';
import { ref } from 'vue';
import axios from '@/service/Axios';
import { LOGIN_USER } from '@/service/modules/Auth/EndPoints';
import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';
import { DASHBOARD } from '@/router/RouteName';

export default function useAuthService() {
    const toast = useToast();
    const router = useRouter();
    const authStore = useAuthStore();
    const error = ref(null);
    const data = ref(null);
    const isLoading = ref(false);
    const makeUserLogion = async (payload) => {
        try {
            isLoading.value = true;
            const { data: response } = await axios.post(LOGIN_USER, payload);
            authStore.setAuthToken(response);
            data.value = response;
            await router.push({ name: DASHBOARD });
        } catch (e) {
            console.log(e);
            error.value = e;
            toast.add({ severity: 'error', summary: 'Error Message', detail: 'Message Content', life: 3000 });
        } finally {
            isLoading.value = false;
        }
    };

    return {
        data,
        error,
        isLoading,
        makeUserLogion
    };
}
