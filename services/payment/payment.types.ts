
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
   PAYMENT ORDER
========================================== */

export interface PaymentOrder {
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

  _id: string;
  createdAt: string;
  updatedAt: string;
}

/* ==========================================
   CREATE PAYMENT DATA
========================================== */

export interface CreatePaymentData {
  orderId: string;
  order: PaymentOrder;
  paymentId: string | null;
  payableAmount: number;
  discountAmount: number;
  qr: string | null;
}

/* ==========================================
   CREATE PAYMENT RESPONSE
========================================== */

export interface CreatePaymentResponse {
  success: boolean;
  message: string;
  data: CreatePaymentData;
}
