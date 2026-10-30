import type { AuthUser } from "@/services/auth/auth.types";
import {
  ACCESS_TOKEN_KEY,
  AUTH_USER_KEY,
  clearAuthSession,
} from "@/lib/api-client";

export function setAuthData(
  token: string,
  user: AuthUser
): void {
  if (typeof window === "undefined") return;

  localStorage.setItem(ACCESS_TOKEN_KEY, token);
  localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));

  window.dispatchEvent(
    new Event("SafalSevaKendra-auth-change")
  );
  window.dispatchEvent(new Event("auth-change"));
}

export function getAuthToken(): string | null {
  if (typeof window === "undefined") return null;

  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function getAuthUser(): AuthUser | null {
  if (typeof window === "undefined") return null;

  const storedUser = localStorage.getItem(AUTH_USER_KEY);

  if (!storedUser) return null;

  try {
    return JSON.parse(storedUser) as AuthUser;
  } catch {
    localStorage.removeItem(AUTH_USER_KEY);
    return null;
  }
}

export function clearAuthData(): void {
  clearAuthSession();
}

export function isAuthenticated(): boolean {
  return Boolean(getAuthToken());
}

export function logout(): void {
  clearAuthData();

  if (typeof window !== "undefined") {
    window.location.replace("/login");
  }
}