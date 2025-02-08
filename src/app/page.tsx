import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start px-4 py-12">
      <Card className="relative">
        <div className="rounded-full border overflow-hidden h-[53px] w-[53px] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
            <h1>Your next delivery for Dorian and Ocie</h1>
          </CardTitle>
          <p className="text-sm mb-4">
            Hey Kayleigh! In two days' time, we'll be charging you for your next
            order for Dorian and Ocie's fresh food.
          </p>
          <strong className="text-sm">Total price: £134.00</strong>
          <div className="mt-6 w-full flex gap-4 justify-center">
            <Button size="sm" asChild>
              <Link href="#">See details</Link>
            </Button>
            <Button size="sm" variant="outline">
              <Link href="#">Edit delivery</Link>
            </Button>
          </div>
          <div className="w-fit text-sm uppercase font-bold border border-[#E7AADA] bg-[#FFB8EF] text-[#773E75] px-3 py-1 rotate-[-4.75deg] absolute -bottom-4 left-1/2 -translate-x-1/2">
            Free gift
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
