import axios from "axios";

// Create a new Axios instance
const instance = axios.create({
    baseURL: import.meta.env.VITE_VUE_APP_BASEURL,
    timeout: 5000 // Adjust the timeout as needed
});

export default instance;
