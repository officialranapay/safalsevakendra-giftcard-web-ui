
"use client";

import {
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  getGiftCardOrdersApi,
  getGiftCardOrderByIdApi,
} from "./gift-card-orders.api";

/*
 * ==========================================
 * QUERY KEYS
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
 * GET ALL ORDERS
 * ==========================================
 */

export function useGiftCardOrders() {
  return useQuery({
    queryKey: giftCardOrderKeys.lists(),

    queryFn: getGiftCardOrdersApi,

    staleTime: 0,

    refetchOnMount: "always",

    refetchOnWindowFocus: true,

    refetchOnReconnect: true,

    refetchInterval: 10000,

    retry: 1,
  });
}

/*
 * ==========================================
 * GET SINGLE ORDER
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

    staleTime: 0,

    refetchOnWindowFocus: true,

    retry: 1,
  });
}

/*
 * ==========================================
 * REFRESH ORDERS AFTER PAYMENT / ORDER CREATION
 * ==========================================
 */

export function useRefreshGiftCardOrders() {
  const queryClient = useQueryClient();

  return () =>
    queryClient.invalidateQueries({
      queryKey: giftCardOrderKeys.all,
    });
}
