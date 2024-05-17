import axios from "axios";

axios.defaults.baseURL = 'https://we-travellers-api-125fa063dfcb.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;
