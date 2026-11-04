
"use client";

import { useMutation } from "@tanstack/react-query";

import PaymentApi from "./payment.api";

import type {
  CreatePaymentPayload,
} from "./payment.api";

/*
 * ==========================================
 * CREATE GIFT CARD PAYMENT
 * POST /gift-cards/payments
 * ==========================================
 */

export const useCreatePayment = () => {
  return useMutation({
    mutationFn: async (payload: CreatePaymentPayload) => {
      return await PaymentApi.createOrder(payload);
    },

    retry: false,
  });
};

/*
 * ==========================================
 * GET ALL GIFT CARD ORDERS
 * GET /gift-cards/orders
 * ==========================================
 */

export const useGetPaymentOrders = () => {
  return useMutation({
    mutationFn: async () => {
      return await PaymentApi.getOrders();
    },

    retry: false,
  });
};

/*
 * ==========================================
 * GET SINGLE PAYMENT ORDER
 * GET /gift-cards/orders/:orderId
 * ==========================================
 */

export const useGetPaymentOrder = () => {
  return useMutation({
    mutationFn: async (orderId: string) => {
      return await PaymentApi.getOrder(orderId);
    },

    retry: false,
  });
};
