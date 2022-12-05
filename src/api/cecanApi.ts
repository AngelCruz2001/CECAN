import axios from "axios";

let token;
if (typeof window !== "undefined") {
  token = localStorage.getItem("token");
}

const cecanApi = axios.create({
  baseURL: "http://gosling-pro.duckdns.org:3001/api/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export default cecanApi;
