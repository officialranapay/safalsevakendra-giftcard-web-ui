
import apiClient from "@/lib/api-client";
import { getSystemTokenApi } from "@/services/auth/system-token.api";

/* ==========================================
   CREATE PAYMENT PAYLOAD
========================================== */


export interface CreatePaymentPayload {
  giftCardId: string;
  giftCardName: string;
  denomination: number;
  quantity: number;
  discountPercent: number;
  discountAmount: number;
  purchaseAmount: number;
  payableAmount: number;
  deviceId: string;
  deviceType: "mobile" | "desktop";
}


/* ==========================================
   PAYMENT API
========================================== */

const PaymentApi = {
  /*
   * ==========================================
   * CREATE GIFT CARD PAYMENT
   * POST /gift-cards/payments
   * ==========================================
   */

  createOrder: async (payload: CreatePaymentPayload) => {
    console.log("SAFALSEVA CREATE PAYMENT REQUEST:", payload);

    try {
      // Generate system token before payment request
      await getSystemTokenApi();

      const response = await apiClient.post(
        "/gift-cards/payments",
        payload
      );

      console.log(
        "SAFALSEVA CREATE PAYMENT RESPONSE:",
        response.data
      );

      return response.data;
    } catch (error: any) {
      console.error(
        "SAFALSEVA PAYMENT ERROR STATUS:",
        error?.response?.status
      );

      console.error(
        "SAFALSEVA PAYMENT ERROR DATA:",
        error?.response?.data || error?.message
      );

      throw error;
    }
  },

  /*
   * ==========================================
   * GET ALL GIFT CARD ORDERS
   * GET /gift-cards/orders
   * ==========================================
   */

  getOrders: async () => {
    console.log("SAFALSEVA GET ORDERS REQUEST");

    try {
      await getSystemTokenApi();

      const response = await apiClient.get(
        "/gift-cards/orders"
      );

      console.log(
        "SAFALSEVA GET ORDERS RESPONSE:",
        response.data
      );

      return response.data;
    } catch (error: any) {
      console.error(
        "SAFALSEVA GET ORDERS ERROR:",
        error?.response?.data || error?.message
      );

      throw error;
    }
  },

  /*
   * ==========================================
   * GET SINGLE ORDER DETAILS
   * GET /gift-cards/orders/:orderId
   * ==========================================
   */

  getOrder: async (orderId: string) => {
    console.log(
      "SAFALSEVA GET ORDER REQUEST:",
      orderId
    );

    try {
      await getSystemTokenApi();

      const response = await apiClient.get(
        `/gift-cards/orders/${encodeURIComponent(orderId)}`
      );

      console.log(
        "SAFALSEVA GET ORDER RESPONSE:",
        response.data
      );

      return response.data;
    } catch (error: any) {
      console.error(
        "SAFALSEVA GET ORDER ERROR:",
        error?.response?.data || error?.message
      );

      throw error;
    }
  },
};

export default PaymentApi;
