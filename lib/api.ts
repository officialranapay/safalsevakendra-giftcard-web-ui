import { getAuthToken } from "@/lib/authStorage";
import { getSystemToken } from "@/lib/api-client";

export const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_URL ||
  "https://gitcard-backend-service.vercel.app/api/v1"
).replace(/\/+$/, "");

type ApiOptions = RequestInit & {
  params?: Record<
    string,
    string | number | boolean | undefined
  >;
};

export async function apiRequest<T>(
  endpoint: string,
  options: ApiOptions = {}
): Promise<T> {
  const { params, headers, ...requestOptions } = options;

  if (!API_BASE_URL) {
    throw new Error("SafalSevaKendra API URL is not configured.");
  }

  const cleanEndpoint = endpoint.replace(/^\/+/, "");
  const url = new URL(
    `${API_BASE_URL}/${cleanEndpoint}`
  );

  Object.entries(params ?? {}).forEach(([key, value]) => {
    if (value !== undefined && value !== "") {
      url.searchParams.set(key, String(value));
    }
  });

  const requestHeaders = new Headers(headers);

  requestHeaders.set("Accept", "application/json");

  const isFormData =
    typeof FormData !== "undefined" &&
    requestOptions.body instanceof FormData;

  if (requestOptions.body && !isFormData) {
    if (!requestHeaders.has("Content-Type")) {
      requestHeaders.set("Content-Type", "application/json");
    }
  }

  if (typeof window !== "undefined") {
    const systemToken = getSystemToken();
    const authToken = getAuthToken();

    if (systemToken) {
      requestHeaders.set("x-system-token", systemToken);
    }

    if (authToken) {
      requestHeaders.set(
        "Authorization",
        `Bearer ${authToken}`
      );
    }
  } else {
    // Server-side only: never expose this token through NEXT_PUBLIC_.
    const systemToken = process.env.SYSTEM_TOKEN?.trim();

    if (systemToken) {
      requestHeaders.set("x-system-token", systemToken);
    }
  }

  let response: Response;

  try {
    response = await fetch(url.toString(), {
      ...requestOptions,
      headers: requestHeaders,
      cache: "no-store",
    });
  } catch {
    throw new Error(
      "SafalSevaKendra API network error. Check the backend, CORS settings, and connection."
    );
  }

  const result = await response.json().catch(() => null);

  if (!response.ok || result?.success === false) {
    throw new Error(
      result?.message ||
        `SafalSevaKendra API request failed (${response.status})`
    );
  }

  return result as T;
}