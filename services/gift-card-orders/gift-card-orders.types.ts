
/*
 * ==========================================
 * SAFALSEVA GIFT CARD ORDER
 * ==========================================
 */

export interface GiftCardOrder {
  _id: string;
  orderId: string;

  customerId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string | null;

  giftCardId: string;
  giftCardName: string;

  denomination: number;
  quantity: number;

  purchaseAmount: number;
  discountAmount: number;
  payableAmount: number;

  paymentStatus: string;
  orderStatus: string;

  createdAt: string;
  updatedAt: string;

  __v?: number;
}

/*
 * ==========================================
 * GET ALL GIFT CARD ORDERS RESPONSE
 * ==========================================
 */

export interface GiftCardOrdersResponse {
  success: boolean;
  message: string;

  data: {
    orders: GiftCardOrder[];
  };
}

/*
 * ==========================================
 * GET SINGLE GIFT CARD ORDER RESPONSE
 * ==========================================
 */

export interface GiftCardOrderDetailsResponse {
  success: boolean;
  message: string;

  data: {
    order: GiftCardOrder;
    payment: unknown | null;
  };
}
