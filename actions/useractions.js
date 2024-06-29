"use server"

import Razorpay from "razorpay"
import Payment from "@/app/models/Payment"
import User from "@/app/models/User"
import connectDb from "@/db/connectDb"

export const initiate =async(amount, to_username, paymentform) => {
    await connectDb()
    let user = await User.findOne({username: to_username})
    const secret = user.razorpaySecret

    var instance = new Razorpay({ key_id: user.razorpayId, key_secret: secret })

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
    oid: x.id, amount: amount/100, to_user: to_username, name: paymentform.name, message: paymentform.message
 })
 return x
}

export const fetchuser = async (username) => {
    await connectDb()
    let u = await User.findOne({username: username})
    let user = u.toObject({flattenObjectIds: true})
    console.log(user)

    return user
}

export const fetchpayments = async (username) => {
    await connectDb()
    let p = await Payment.find({to_user: username, done:true}).sort({amount: -1}).limit(10).lean()
    return p
}
export const fetchpayments2 = async (username) => {
    await connectDb()
    let paym = await Payment.find({to_user: username, done:true}).lean()
    return paym
}

export const updateProfile = async(data, oldusername) => {
    await connectDb()
    let ndata = Object.fromEntries(data)
    if(oldusername !== ndata.username){
        let u = await User.findOne({username: ndata.username})
        if(u){
            return{error:"Username already exist"}
        }
        await User.updateOne({email:ndata.email}, ndata)
        await Payment.updateMany({to_user: oldusername},{to_user: ndata.username})
    }
    else{
        await User.updateOne({email:ndata.email}, ndata)
    }
}