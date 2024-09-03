const express = require('express');
require('dotenv').config()
const axios = require('axios');
const router = express.Router();


let data = JSON.stringify({
    "data": {
      "action": "SALE",
      "class": "ECOM",
      "capture_method": "AUTOMATIC",
      "payment_token": "",
      "customer_details": {
        "m_customer_id": "123456",
        "name": "Purnachand Tummala",
        "email": "t.purnachandu@gmail.com",
        "mobile": "9603838227",
        "code": "91"
      },
      "billing_details": {
        "address_line1": "Hyderabad",
        "address_line2": "Hyderabad",
        "city": "Dubai",
        "province": "Dubai",
        "country": "AE",
        "pin": "54044"
      },
      "shipping_details": {
        "address_line1": "Hyderabad",
        "address_line2": "Hyderabad",
        "city": "Dubai",
        "province": "Dubai",
        "country": "AE",
        "pin": "54044"
      },
      "order_details": {
        "m_order_id": "123456",
        "amount": "1",
        "currency": "AED",
        "description": "description"
      },
      "urls": {
        "success": "",
        "cancel": "",
        "failure": ""
      }
    }
});
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: process.env.API_URL,
    headers: { 
      'merchant-key': process.env.merchant_key, 
      'merchant-secret': process.env.merchant_secret, 
      'Content-Type': 'application/json'
    },
    data : data
  };
  

router.get('/create',async (req,res)=>{
    try{
        console.log(process.env.merchant_key + " "+ process.env.merchant_secret);
        console.log("---------------");
        console.log(process.env.API_URL);
        console.log("created order");
        const response = await axios(config);
        console.log(response.data);
        res.status(200).json({
            server1:response.data
        })
    }
    catch(e){
        res.status(500).json({
            error:"Error Occured"
        })
    }
    
})



module.exports=router;