import axios from "axios";

const paymentApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_PAYMENT_BASE_URL,
  timeout: 30000,
});
    
paymentApi.interceptors.request.use((config) => {
  config.headers.set(
    "Content-Type",
    "application/json"
  );

  config.headers.set(
    "x-access-key",
    process.env.NEXT_PUBLIC_PAYMENT_ACCESS_KEY || ""
  );

  config.headers.set(
    "x-secret-key",
    process.env.NEXT_PUBLIC_PAYMENT_SECRET_KEY || ""
  );

  return config;
});

export default paymentApi;
