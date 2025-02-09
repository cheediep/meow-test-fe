import NextDeliveryCard from "../_components/next-delivery-card";

export default async function WelcomePage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  const response = await fetch(
    `http://localhost:3001/comms/your-next-delivery/${userId}`
  );
  const data = await response.json();

  if (!response.ok) {
    return <div>Error: {response.statusText}</div>;
  }

  return (
    <NextDeliveryCard
      title={data.title}
      message={data.message}
      totalPrice={data.totalPrice}
      hasFreeGift={data.freeGift}
    />
  );
}
