import express from "express";

import {
  placeOrder,
  placeOrderRazorpay,
  placeOrderStripe,
  allOrders,
  updateStatus,
  userOrders,
  verifyStripe,
  verifyRazorpay,
} from "../controllers/orderController.js";
import authUser from "../middleware/auth.js";
import adminAuth from "../middleware/adminAuth.js";

const orderRouter = express.Router();

// Admin features
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

// payment
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStripe);
orderRouter.post("/razorpay", authUser, placeOrderRazorpay);

// user feature
orderRouter.post("/userorders", authUser, userOrders);

orderRouter.post("/verifyStripe", authUser, verifyStripe);
orderRouter.post("/verifyRazorpay", authUser, verifyRazorpay);
export default orderRouter;
