import axios from "axios"
export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()
    const { user, logout } = useAuthStore()
    const router = useRouter()

    let api = axios.create({
        baseURL: config.public.baseURL
    });
    api.interceptors.request.use(function (config) {
        config.headers.Authorization = user.token
        return config;
    });
    api.interceptors.response.use(function(response) {
        return response
    }, function (error){
        const code = parseInt(error.response && error.response.status)
        if (code === 401) {
            api.post('/users/tokenThere').then((response) => {
              if (response.data.result === false) {
                logout()
                router.push({ path: "/" })
              }
            })
          }
        return Promise.reject(error)
    })
    return {
        provide: {
            api: api,
        },
    };
});
  