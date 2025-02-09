import NextDeliveryCard from "../_components/next-delivery-card";

export default function WelcomePage() {
  return (
    <NextDeliveryCard
      title="Your next delivery for Dorian and Ocie"
      message="Hey Kayleigh! In two days' time, we'll be charging you for your next
          order for Dorian and Ocie's fresh food."
      totalPrice="£134.00"
      hasFreeGift={true}
    />
  );
}
