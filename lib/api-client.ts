import axios from "axios";

export const ACCESS_TOKEN_KEY = "SafalSevaKendra_admin_token";
export const AUTH_USER_KEY = "SafalSevaKendra_admin_user";
export const VERIFICATION_TOKEN_KEY =
  "SafalSevaKendra_verification_token";
export const SYSTEM_TOKEN_KEY = "SafalSevaKendra_system_token";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 15000,
});

export function saveSystemToken(token: string): void {
  if (typeof window === "undefined") return;

  localStorage.setItem(SYSTEM_TOKEN_KEY, token);
}

export function getSystemToken(): string | null {
  if (typeof window === "undefined") return null;

  return localStorage.getItem(SYSTEM_TOKEN_KEY);
}

apiClient.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const authorization = config.headers.get("Authorization");

    if (!authorization) {
      const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
      const verificationToken = localStorage.getItem(
        VERIFICATION_TOKEN_KEY
      );

      if (accessToken) {
        config.headers.set("Authorization", `Bearer ${accessToken}`);
      } else if (verificationToken) {
        config.headers.set(
          "Authorization",
          `Bearer ${verificationToken}`
        );
      }
    }

    const systemToken = getSystemToken();

    if (systemToken) {
      config.headers.set("x-system-token", systemToken);
    }
  }

  return config;
});

export function saveAuthSession(
  token: string,
  user: unknown
): void {
  if (typeof window === "undefined") return;

  localStorage.setItem(ACCESS_TOKEN_KEY, token);
  localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
  localStorage.removeItem(VERIFICATION_TOKEN_KEY);

  window.dispatchEvent(
    new Event("SafalSevaKendra-auth-change")
  );
  window.dispatchEvent(new Event("auth-change"));
}

export function saveVerificationToken(token: string): void {
  if (typeof window === "undefined") return;

  localStorage.setItem(VERIFICATION_TOKEN_KEY, token);
}

export function clearAuthSession(): void {
  if (typeof window === "undefined") return;

  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(AUTH_USER_KEY);
  localStorage.removeItem(VERIFICATION_TOKEN_KEY);

  window.dispatchEvent(
    new Event("SafalSevaKendra-auth-change")
  );
  window.dispatchEvent(new Event("auth-change"));
}

export default apiClient;