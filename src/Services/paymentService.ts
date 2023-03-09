import axios from "axios";

class PaymentService {
  async createPayment(data:any) {
    
    const url = "https://api.mercadopago.com/checkout/preferences";

    const body = {
      payer_email: "${process.env.PAYER_EMAIL} ",
      items: data,
      back_urls: {
        failure: "/ecommerce--pf.vercel.app/",
        pending: "/ecommerce--pf.vercel.app/",
        success: "/ecommerce--pf.vercel.app/",
      },
    };

    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });

    return payment.data;
  }

  async createSubscription() {
    const url = "https://api.mercadopago.com/preapproval";

    const body = {
      reason: "Suscripción de ejemplo",
      auto_recurring: {
        frequency: 1,
        frequency_type: "months",
        transaction_amount: 10,
        currency_id: "ARS",
      },
      back_url: "https://google.com.ar",
      payer_email: "${process.env.PAYER_EMAIL} ",
    };

    const subscription = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });

    return subscription.data;
  }
}

export default PaymentService;
