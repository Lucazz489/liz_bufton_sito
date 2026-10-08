import Link from "next/link";
import Band from "@/components/Band";
import { CTA } from "@/lib/site";

export default function FinalCta() {
  return (
    <section>
      <Band as="p">
        When you are ready for what comes next, <em>let&apos;s talk.</em>
      </Band>
      <div className="px-6 py-20 text-center">
        <p className="mx-auto mb-10 max-w-[40ch] text-muted">
          A free, no-obligation conversation about where you are now and where you want to go next.
        </p>
        <Link href={CTA.href} className="cta">Book a complimentary call</Link>
      </div>
    </section>
  );
}
