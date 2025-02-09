import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

export type NextDeliveryCardProps = {
  title: string;
  message: string;
  totalPrice: string;
  hasFreeGift: boolean;
};

export default function NextDeliveryCard({
  title,
  message,
  totalPrice,
  hasFreeGift,
}: NextDeliveryCardProps) {
  return (
    <Card className="relative md:flex md:max-h-[244px] md:max-w-[752px]">
      <div
        className={cn(
          "rounded-full border overflow-hidden h-[53px] w-[53px] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
          "md:relative md:w-full md:h-auto md:max-w-[339px] md:transform-none md:rounded-md md:left-auto"
        )}
      >
        <picture>
          <source
            srcSet="/images/space-meow-sm.webp"
            media="(max-width: 768px)"
          />
          <img
            src="/images/space-meow.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </picture>
      </div>
      <CardContent className="text-center relative pb-8 pt-10">
        <CardTitle>
          <h1>{title}</h1>
        </CardTitle>
        <p className="text-sm mb-4">{message}</p>
        <strong className="text-sm">
          Total price:{" "}
          {Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
          }).format(Number(totalPrice))}
        </strong>
        <div className="mt-6 w-full flex gap-4 justify-center">
          <Button size="sm" asChild>
            <Link href="#">See details</Link>
          </Button>
          <Button size="sm" variant="outline">
            <Link href="#">Edit delivery</Link>
          </Button>
        </div>
        {hasFreeGift && (
          <div
            className={cn(
              "w-fit text-sm uppercase font-bold border border-[#E7AADA] bg-[#FFB8EF] text-[#773E75] px-3 py-1 rotate-[-4.75deg] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
              "md:top-0 md:bottom-auto md:rotate-[8.61deg] md:left-auto md:right-0 md:translate-x-3 md:-translate-y-2"
            )}
          >
            Free gift
          </div>
        )}
      </CardContent>
    </Card>
  );
}
