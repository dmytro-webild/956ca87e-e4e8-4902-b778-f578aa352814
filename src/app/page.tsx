"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="largeSmall"
        background="fluid"
        cardStyle="glass-elevated"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Products",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Lumina"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "gradient-bars",
      }}
      title="Pure Beauty, Reimagined."
      description="Discover our collection of organic, handcrafted skincare designed to nourish your skin and reveal your natural radiance."
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/ecofriendly-beauty-product_23-2150669167.jpg",
          imageAlt: "Luxury skincare bottle",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/natural-medicine-concept-with-serum-plant_23-2148899363.jpg",
          imageAlt: "Organic skincare serum",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-posing-with-gold-body-painting_23-2150466378.jpg",
          imageAlt: "Beauty model skincare",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/gua-sha-cotton-arrangement-top-view_23-2149357125.jpg",
          imageAlt: "Spa skincare setting",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/arrangement-skin-care-cream_23-2148761493.jpg",
          imageAlt: "Cosmetic packaging",
        },
      ]}
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Our Philosophy"
      title="Nature meets Science"
      description="We believe in high-performance beauty without compromise. Every ingredient is ethically sourced and scientifically validated to ensure efficacy."
      subdescription="Our formulas are vegan, cruelty-free, and formulated to restore your skin's natural barrier."
      icon={Sparkles}
      imageSrc="http://img.b2bpic.net/free-photo/flat-lay-natural-cosmetics-concept_23-2148565380.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Luminous Face Cream",
          price: "$48",
          imageSrc: "http://img.b2bpic.net/free-photo/pink-cream-jar-with-gold-lid-beauty-skincare-products_187299-47318.jpg",
        },
        {
          id: "2",
          name: "Hydrating Serum Oil",
          price: "$62",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-serum-bottle-leaf_23-2148899373.jpg",
        },
        {
          id: "3",
          name: "Gentle Foam Cleanser",
          price: "$34",
          imageSrc: "http://img.b2bpic.net/free-photo/beauty-product-spreading-out_23-2151427880.jpg",
        },
        {
          id: "4",
          name: "Botanical Face Toner",
          price: "$38",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-delicately-moisturizes-skin-with-cosmetic-tonic-portrait-lady-with-healthy-skin-without-makeup-isolated-wall_197531-13872.jpg",
        },
        {
          id: "5",
          name: "Revitalizing Clay Mask",
          price: "$42",
          imageSrc: "http://img.b2bpic.net/free-photo/self-care-home-happy-woman-with-cosmetics_23-2148537430.jpg",
        },
        {
          id: "6",
          name: "Anti-Aging Eye Cream",
          price: "$55",
          imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-brunette-woman-hair-curlers-smiling-creaming-face-facial-treatment-beauty-health-cosmetology_176420-14154.jpg",
        },
      ]}
      title="The Collection"
      description="Explore our curated essentials for a radiant complexion."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      negativeCard={{
        items: [
          "Paraben Free",
          "Sulfate Free",
          "Phthalate Free",
          "Synthetic Fragrance Free",
          "Mineral Oil Free",
        ],
      }}
      positiveCard={{
        items: [
          "100% Organic",
          "Dermatologist Tested",
          "Ethically Sourced",
          "Vegan & Cruelty Free",
          "Sustainable Packaging",
        ],
      }}
      title="Why Lumina?"
      description="Excellence in every drop."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          date: "Jan 2024",
          title: "Radiant Skin",
          quote: "My skin has never felt this hydrated and soft. Absolutely love the serums!",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/beauty-vlogger-adjusting-camera_23-2148916349.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/ecofriendly-beauty-product_23-2150669167.jpg",
          imageAlt: "happy customer healthy skin beauty",
        },
        {
          id: "2",
          name: "Mark D.",
          date: "Feb 2024",
          title: "Amazing Results",
          quote: "Effective products that don't irritate. The face cream is my daily go-to.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/closeup-cute-caucasian-young-girl-with-snowwhite-smile-dark-hair-white-background-people-free-time-concept_197531-31402.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/natural-medicine-concept-with-serum-plant_23-2148899363.jpg",
          imageAlt: "happy customer healthy skin beauty",
        },
        {
          id: "3",
          name: "Emily P.",
          date: "Mar 2024",
          title: "Fresh Glow",
          quote: "Lumina has completely changed my skincare routine for the better. Truly refreshing.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/master-applying-makeup-smiling-blond-woman_23-2148113227.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-posing-with-gold-body-painting_23-2150466378.jpg",
          imageAlt: "happy customer healthy skin beauty",
        },
        {
          id: "4",
          name: "Lisa K.",
          date: "Apr 2024",
          title: "Pure Excellence",
          quote: "Clean, effective, and ethical. What more could a skincare enthusiast ask for?",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/studio-shot-good-looking-woman-with-curly-bushy-hair-applies-cosmetic-eye-patches-holds-calla-smiles-gladfully-stands-bare-shoulders-isolated-brown-background-copy-space-your-text_273609-56986.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/gua-sha-cotton-arrangement-top-view_23-2149357125.jpg",
          imageAlt: "happy customer healthy skin beauty",
        },
        {
          id: "5",
          name: "Anna S.",
          date: "May 2024",
          title: "Must Have",
          quote: "The toner is a game-changer. My skin looks visibly brighter every single day.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-holding-bag-with-organic-vegetables_23-2148454518.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/arrangement-skin-care-cream_23-2148761493.jpg",
          imageAlt: "happy customer healthy skin beauty",
        },
      ]}
      title="Loved by Thousands"
      description="Hear what our radiant community has to say."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="By The Numbers"
      tag="Our Impact"
      metrics={[
        {
          id: "m1",
          value: "50K+",
          description: "Happy Customers",
        },
        {
          id: "m2",
          value: "98%",
          description: "Skin Satisfaction",
        },
        {
          id: "m3",
          value: "20+",
          description: "Organic Ingredients",
        },
        {
          id: "m4",
          value: "100%",
          description: "Vegan Ingredients",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Are products vegan?",
          content: "Yes, our entire line is 100% vegan.",
        },
        {
          id: "q2",
          title: "What's the return policy?",
          content: "We offer 30-day money-back guarantee.",
        },
        {
          id: "q3",
          title: "Are you cruelty-free?",
          content: "Absolutely. We never test on animals.",
        },
        {
          id: "q4",
          title: "Where are you sourced?",
          content: "We source ingredients from organic farms across the globe.",
        },
        {
          id: "q5",
          title: "How long until results?",
          content: "Most users see visible results within 2-4 weeks of consistent use.",
        },
      ]}
      title="Common Questions"
      description="Find answers to your skincare journey."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Get In Touch"
      description="Have questions about your skincare routine? Our experts are here to help."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
        {
          name: "subject",
          type: "text",
          placeholder: "Subject",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "How can we help?",
        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/owner-getting-ready-reopening_23-2149142196.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Lumina"
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "All Products",
              href: "#products",
            },
            {
              label: "New Arrivals",
              href: "#",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
