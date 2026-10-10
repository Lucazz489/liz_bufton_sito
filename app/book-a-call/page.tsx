import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book a Complimentary Call",
  description: "Book a free, no-obligation call with executive coach Liz Bufton.",
};

export default function BookPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-16 px-6 py-20 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:py-32">
      <div className="lg:col-span-5">
        <h1 className="font-serif text-[clamp(2.4rem,4.4vw,3.6rem)] leading-[1.05] font-normal tracking-[-0.01em] text-balance">
          Book a complimentary call
        </h1>
        <p className="mt-8 max-w-[30ch] font-serif text-[1.5rem] leading-[1.35] text-muted">
          A free, no-obligation conversation about where you are now and where you want to go next.
        </p>
      </div>
      <div className="lg:col-span-6 lg:col-start-7">
        <BookingForm />
      </div>
    </section>
  );
}
