
import apiClient, {
  VERIFICATION_TOKEN_KEY,
  saveAuthSession,
  saveVerificationToken,
  clearAuthSession,
} from "@/lib/api-client";

import type {
  ApiResponse,
  SendOtpPayload,
  SendOtpData,
  VerifyOtpPayload,
  VerifyOtpData,
  RegisterPayload,
  RegisterData,
  LogoutData,
} from "./auth.types";

const APP_NAME = "SafalSevaKendra";

export async function sendOtpApi(
  payload: SendOtpPayload
): Promise<ApiResponse<SendOtpData>> {
  const { data } = await apiClient.post<ApiResponse<SendOtpData>>(
    "/auth/send-otp",
    payload
  );

  if (!data.success) {
    throw new Error(
      data.message || `${APP_NAME}: Unable to send email OTP.`
    );
  }

  return data;
}

export async function resendOtpApi(
  payload: SendOtpPayload
): Promise<ApiResponse<SendOtpData>> {
  const { data } = await apiClient.post<ApiResponse<SendOtpData>>(
    "/auth/resend-otp",
    payload
  );

  if (!data.success) {
    throw new Error(
      data.message || `${APP_NAME}: Unable to resend email OTP.`
    );
  }

  return data;
}

export async function verifyOtpApi(
  payload: VerifyOtpPayload
): Promise<ApiResponse<VerifyOtpData>> {
  const { data } = await apiClient.post<ApiResponse<VerifyOtpData>>(
    "/auth/verify-otp",
    payload
  );

  if (!data.success || !data.data) {
    throw new Error(
      data.message || "Email OTP verification failed."
    );
  }

  const result = data.data;

  if ("token" in result && result.token && result.user) {
    saveAuthSession(result.token, result.user);
  } else if (
    "isNewUser" in result &&
    result.isNewUser &&
    result.verificationToken
  ) {
    saveVerificationToken(result.verificationToken);
  } else {
    throw new Error(
      "Unexpected email OTP verification response."
    );
  }

  return data;
}

export async function registerApi(
  payload: RegisterPayload
): Promise<ApiResponse<RegisterData>> {
  const verificationToken =
    typeof window !== "undefined"
      ? localStorage.getItem(VERIFICATION_TOKEN_KEY)
      : null;

  if (!verificationToken) {
    throw new Error(
      "Verification session expired. Please verify your email again."
    );
  }

  const { data } = await apiClient.post<ApiResponse<RegisterData>>(
    "/auth/register",
    payload,
    {
      headers: {
        Authorization: `Bearer ${verificationToken}`,
      },
    }
  );

  if (!data.success || !data.data?.token || !data.data?.user) {
    throw new Error(data.message || "Registration failed.");
  }

  saveAuthSession(data.data.token, data.data.user);

  return data;
}

export async function logoutApi(): Promise<ApiResponse<LogoutData>> {
  try {
    const { data } = await apiClient.post<ApiResponse<LogoutData>>(
      "/auth/logout"
    );

    if (!data.success) {
      throw new Error(data.message || "Logout failed.");
    }

    return data;
  } finally {
    clearAuthSession();
  }
}
