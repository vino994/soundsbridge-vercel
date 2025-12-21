    import axios from "axios";

    const api = axios.create({
    baseURL: "https://soundsbridge-backend.onrender.com/api", // change to Render URL later
    headers: {
        "Content-Type": "application/json",
    },
    });

    export default api;
