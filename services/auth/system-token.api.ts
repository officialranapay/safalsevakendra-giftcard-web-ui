
import apiClient, {
  saveSystemToken,
  SYSTEM_TOKEN_KEY,
} from "@/lib/api-client";

interface SystemTokenResponse {
  success: boolean;
  message?: string;
  data?: {
    token?: string;
    expiresAt?: string | null;
  };
}

let tokenRequest: Promise<string> | null = null;

export async function getSystemTokenApi(): Promise<string> {
  if (typeof window === "undefined") {
    throw new Error("System token must be requested in the browser.");
  }

  const existingToken = localStorage.getItem(SYSTEM_TOKEN_KEY);

  if (existingToken?.startsWith("sys_")) {
    return existingToken;
  }

  if (tokenRequest) {
    return tokenRequest;
  }

  tokenRequest = (async () => {
    try {
      const clientId =
        process.env.NEXT_PUBLIC_SYSTEM_CLIENT_ID?.trim();
      const clientSecret =
        process.env.NEXT_PUBLIC_SYSTEM_CLIENT_SECRET?.trim();

      if (!clientId || !clientSecret) {
        throw new Error(
          "System credentials missing. Check .env.local and restart the dev server."
        );
      }

      const { data } = await apiClient.post<SystemTokenResponse>(
        "/system-token",
        { clientId, clientSecret },
        {
          headers: {
            Authorization: "",
            "x-system-token": "",
          },
        }
      );

      const token = data?.data?.token;

      if (!data?.success || !token?.startsWith("sys_")) {
        throw new Error(
          data?.message || "Invalid system token response."
        );
      }

      saveSystemToken(token);
      return token;
    } finally {
      tokenRequest = null;
    }
  })();

  return tokenRequest;
}
