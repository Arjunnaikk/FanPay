import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/app/models/Payment";
import connectDb from "@/db/connectDb";
import User from "@/app/models/User";

export const POST = async (req) => {
    await connectDb()
    let body = await req.formData()
    body = Object.fromEntries(body)

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      console.log("Invalid form data", { razorpay_order_id, razorpay_payment_id, razorpay_signature });
      return NextResponse.json({ success: false, message: "Invalid form data" });
    }

    let p = await Payment.findOne({oid: razorpay_order_id})
    if(!p){
        return NextResponse.json({success:false,message:"Order Id not found"})
    }

    let user = await User.findOne({username: p.to_user})
    const secret = user.razorpaySecret

    let xx = validatePaymentVerification({order_id: razorpay_order_id, payment_id:razorpay_payment_id}, razorpay_signature, secret)

        if(xx){
            const updatedPayment = await Payment.findOneAndUpdate({oid: razorpay_order_id}, {done:true}, {new:true})
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`)
        }
        else{
            return NextResponse.json({success:false,message:"Payment Verification Failed"})
        }
}