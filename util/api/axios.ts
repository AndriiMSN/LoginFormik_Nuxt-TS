import axios from "axios";

export default axios.create({
    baseURL: "http://sergiy.takasho.work/artlift/public/api",
    responseType: "json"
});