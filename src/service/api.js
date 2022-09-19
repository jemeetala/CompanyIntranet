import { apis } from "service";

const COMMON_URL = `https://sandbox.api.sap.com/ariba/api/purchase-orders/v1/sandbox/`;

const API_URLS = { GET_ORDERS: `${COMMON_URL}orders` };

export const getOrders = (payload) => apis.get(API_URLS.GET_ORDERS, payload);
