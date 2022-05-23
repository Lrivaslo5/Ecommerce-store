//API folder is specific to next.js, it serves the entire backend, our server
// No need for node and Express server
import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51L1Ia4CNvwSgjAVRlL4rynafxfl0tR6580ADJ5M0UZqvfjKLG3k0Uu7i4bE42ssLMvLHGFalXfNny5kqf9yD95rg00L7McINvT"
);

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    try {
      // processing payment --> read stripe documentation
      //Accept online payments --> Prebuilt checkout page
      // Create Checkout Sessions from body params.
      const params = {
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [
          // array of shipping option with different rates
          { shipping_rate: "shr_1L1bnaCNvwSgjAVRg600bEoz" },
        ],
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell

        line_items: req.body.map((item) => {
          const img = item.image[0].asset._ref;
          const newImage = img
            .replace(
              "image-",
              "https://cdn.sanity.io/images/mazgtnu3/production/"
            )
            .replace("-webp", ".webp");
          console.log("IMAGE", newImage);
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name,
                images: [newImage],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          };
        }),

        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`,
      };
      const session = await stripe.checkout.sessions.create(params);

      res.status(200).json(session);
      res.redirect(303, session.url);
    } catch (err) {
      // if error occurs we spit out error code (500 = server error)
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
