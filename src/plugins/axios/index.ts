import Axios from "./Axios";
const http = new Axios({
    baseURL: 'api',
    timeout: 100000,
    method: "GET",
    headers:{}
})

export default http