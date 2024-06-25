"use server"

import Razorpay from "razorpay"
import Payment from "@/app/models/Payment"
import User from "@/app/models/User"
import connectDb from "@/db/connectDb"

export const initiate =async(amount, to_username, paymentform) => {
    await connectDb()
    var instance = new Razorpay({ key_id: process.env.KEY_ID, key_secret: process.env.KEY_SECRET })

instance.orders.create({
amount: 50000,
currency: "INR",
receipt: "receipt#1",
notes: {
    key1: "value3",
    key2: "value2"
}
})
let options ={
    amount: Number.parseInt(amount),
    currency:"INR"
}
 let x = await instance.orders.create(options)

 await Payment.create({
    oid: x.id, amount: amount, to_user: to_username, name: paymentform.name, message: paymentform.message
 })
 return x
}