import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { UsedBy } from "@/components/home/used-by";
import { Features } from "@/components/home/features";
import { Pricing } from "@/components/home/pricing";
import { FAQ } from "@/components/home/faq";
import { Newsletter } from "@/components/home/newsletter";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <UsedBy />
        <Features />
        <Pricing />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
