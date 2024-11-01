import express from "express";

import {
  placeOrder,
  placeOrderRazorpay,
  placeOrderStripe,
  allOrders,
  updateStatus,
  usersOrders,
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
orderRouter.post("/userorders", authUser, usersOrders);

export default orderRouter;
