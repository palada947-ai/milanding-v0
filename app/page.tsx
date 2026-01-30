import { HeroSection } from "@/components/landing/hero-section"
import { PainSection } from "@/components/landing/pain-section"
import { MechanismSection } from "@/components/landing/mechanism-section"
import { BenefitsSection } from "@/components/landing/benefits-section"
import { SocialProofSection } from "@/components/landing/social-proof-section"
import { OfferSection } from "@/components/landing/offer-section"
import { GuaranteeSection } from "@/components/landing/guarantee-section"
import { FinalCtaSection } from "@/components/landing/final-cta-section"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PainSection />
      <MechanismSection />
      <BenefitsSection />
      <SocialProofSection />
      <OfferSection />
      <GuaranteeSection />
      <FinalCtaSection />
      <Footer />
    </main>
  )
}
