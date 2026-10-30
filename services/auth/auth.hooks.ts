
"use client";

import { useMutation } from "@tanstack/react-query";

import {
  sendOtpApi,
  resendOtpApi,
  verifyOtpApi,
  registerApi,
  logoutApi,
} from "./auth.api";

import type {
  SendOtpPayload,
  VerifyOtpPayload,
  RegisterPayload,
} from "./auth.types";

export function useSendOtp() {
  return useMutation({
    mutationFn: (payload: SendOtpPayload) => sendOtpApi(payload),
  });
}

export function useResendOtp() {
  return useMutation({
    mutationFn: (payload: SendOtpPayload) => resendOtpApi(payload),
  });
}

export function useVerifyOtp() {
  return useMutation({
    mutationFn: (payload: VerifyOtpPayload) => verifyOtpApi(payload),
  });
}

export function useRegister() {
  return useMutation({
    mutationFn: (payload: RegisterPayload) => registerApi(payload),
  });
}

export function useLogout() {
  return useMutation({
    mutationFn: () => logoutApi(),
  });
}
