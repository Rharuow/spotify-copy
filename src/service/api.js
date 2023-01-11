import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

const client_id = process.env.CLIENT_ID; // Your client id
const client_secret = process.env.CLIENT_SECRET; // Your secret

const buf = Buffer.from(client_id + ":" + client_secret, "base64");

const apiAuth = axios.create({
  baseURL: "https://accounts.spotify.com/api/token",
  timeout: 1000,
  headers: {
    Authorization: `Basic ${buf.toString("base64")}`,
  },
  form: {
    grant_type: "client_credentials",
  },
  json: true,
});

const api = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

api.interceptors.request.use(
  function (config) {
    // Faz alguma coisa antes da requisição ser enviada
    config.headers["Authorization"] = `Bearer ${Cookies.get("token")}`;
    return config;
  },
  function (error) {
    // Faz alguma coisa com o erro da requisição
    Swal.fire({
      title: "Error!",
      text: "Algo aconteceu com a api do spotify",
      icon: "error",
      confirmButtonText: "Ok!",
    });
    return Promise.reject(error);
  }
);

export { apiAuth, api };
