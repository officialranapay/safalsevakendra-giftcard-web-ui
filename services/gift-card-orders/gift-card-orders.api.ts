
import apiClient from "@/lib/api-client";
import { getSystemTokenApi } from "@/services/auth/system-token.api";

import type {
  GiftCardOrdersResponse,
  GiftCardOrderDetailsResponse,
} from "./gift-card-orders.types";

/*
 * ==========================================
 * GET ALL GIFT CARD ORDERS
 * GET /gift-cards/orders
 * ==========================================
 */

export async function getGiftCardOrdersApi(): Promise<GiftCardOrdersResponse> {
  if (typeof window === "undefined") {
    throw new Error(
      "SafalSeva orders can only be retrieved in the browser."
    );
  }

  try {
    // Generate or retrieve system token
    await getSystemTokenApi();

    const response =
      await apiClient.get<GiftCardOrdersResponse>(
        "/gift-cards/orders"
      );

    const result = response.data;

    if (!result.success || !result.data) {
      throw new Error(
        result.message || "Unable to retrieve SafalSeva gift card orders."
      );
    }

    return result;
  } catch (error: any) {
    console.error(
      "SAFALSEVA GET GIFT CARD ORDERS ERROR:",
      error?.response?.data || error?.message
    );

    throw error;
  }
}

/*
 * ==========================================
 * GET SINGLE GIFT CARD ORDER
 * GET /gift-cards/orders/:orderId
 * ==========================================
 */

export async function getGiftCardOrderByIdApi(
  orderId: string
): Promise<GiftCardOrderDetailsResponse> {
  if (typeof window === "undefined") {
    throw new Error(
      "SafalSeva order details can only be retrieved in the browser."
    );
  }

  if (!orderId?.trim()) {
    throw new Error("Order ID is required.");
  }

  try {
    // Generate or retrieve system token
    await getSystemTokenApi();

    const response =
      await apiClient.get<GiftCardOrderDetailsResponse>(
        `/gift-cards/orders/${encodeURIComponent(orderId)}`
      );

    const result = response.data;

    if (!result.success || !result.data) {
      throw new Error(
        result.message || "Unable to retrieve SafalSeva order details."
      );
    }

    return result;
  } catch (error: any) {
    console.error(
      "SAFALSEVA GET ORDER DETAILS ERROR:",
      error?.response?.data || error?.message
    );

    throw error;
  }
}
