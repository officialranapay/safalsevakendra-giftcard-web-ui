
export type ApiResponse<T> = {
  success: boolean;
  message: string;
  data?: T | null;
};

export type AuthUser = {
  id: string;
  fullName: string;
  email: string;
  isEmailVerified: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export type SendOtpPayload = {
  email: string;
};

export type VerifyOtpPayload = {
  email: string;
  otp: string;
};

export type RegisterPayload = {
  fullName: string;
};

export type SendOtpData = {
  otp?: string;
};

export type ExistingUserLoginData = {
  user: AuthUser;
  token: string;
};

export type NewUserVerificationData = {
  email: string;
  isNewUser: true;
  verificationToken: string;
};

export type VerifyOtpData =
  | ExistingUserLoginData
  | NewUserVerificationData;

export type RegisterData = {
  user: AuthUser;
  token: string;
};

export type LogoutData = {
  success?: boolean;
};
