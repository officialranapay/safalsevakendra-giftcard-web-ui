
"use client";

import { useQuery } from "@tanstack/react-query";

import {
  getGiftCardOrdersApi,
  getGiftCardOrderByIdApi,
} from "./gift-card-orders.api";

/*
 * ==========================================
 * SAFALSEVA GIFT CARD ORDER QUERY KEYS
 * ==========================================
 */

export const giftCardOrderKeys = {
  all: ["safalseva-gift-card-orders"] as const,

  lists: () =>
    [...giftCardOrderKeys.all, "list"] as const,

  details: () =>
    [...giftCardOrderKeys.all, "detail"] as const,

  detail: (orderId: string) =>
    [...giftCardOrderKeys.details(), orderId] as const,
};

/*
 * ==========================================
 * GET ALL GIFT CARD ORDERS
 * ==========================================
 */

export function useGiftCardOrders() {
  return useQuery({
    queryKey: giftCardOrderKeys.lists(),

    queryFn: getGiftCardOrdersApi,

    staleTime: 30 * 1000,

    retry: false,
  });
}

/*
 * ==========================================
 * GET SINGLE GIFT CARD ORDER
 * ==========================================
 */

export function useGiftCardOrderById(
  orderId: string
) {
  return useQuery({
    queryKey: giftCardOrderKeys.detail(orderId),

    queryFn: () =>
      getGiftCardOrderByIdApi(orderId),

    enabled: Boolean(orderId?.trim()),

    staleTime: 30 * 1000,

    retry: false,
  });
}
