import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-[68ch] px-6 py-24">
      <h1 className="mb-8 font-serif text-5xl font-normal">Privacy Policy</h1>
      <p className="text-muted">
        TODO: inserire qui il testo della privacy policy (generatore tipo iubenda o consulente). Deve indicare quali dati
        raccoglie il form, perché, per quanto tempo e che vengono inviati tramite Web3Forms.
      </p>
    </section>
  );
}
