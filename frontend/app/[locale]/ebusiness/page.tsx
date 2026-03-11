"use client";

<<<<<<< HEAD
import { useState } from "react";
import Footer from "../component/footer";
import Header from "../component/header";

export default function EBusinessPage() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const eBusinessFeatures = [
=======
import { useState, useEffect } from "react";
import Header from "../component/header";
import Footer from "../component/footer";

interface Feature {
  title: string;
  content: string;
  icon: string;
}

interface StaticContent {
  hero: {
    title: string;
    description: string;
    button: string;
  };
  features: {
    title: string;
    subtitle: string;
  };
  benefits: {
    title: string;
    subtitle: string;
  };
  cta: {
    title: string;
    description: string;
  };
}

export default function EBusinessPage() {
  const rawLocale = typeof window !== "undefined" ? window.location.pathname.split("/")[1] : "en";
  const locale = rawLocale || "en";

  // ✅ Static English content
  const staticContent: StaticContent = {
    hero: {
      title: "E-Business Solutions",
      description:
        "Transform your logistics with cutting-edge digital tools designed for the modern supply chain. Experience seamless, efficient, and intelligent e-business operations.",
      button: "Get Started",
    },
    features: {
      title: "Key E-Business Features",
      subtitle: "Empower your business with innovative digital solutions that drive efficiency and growth.",
    },
    benefits: {
      title: "Why Choose Our E-Business?",
      subtitle:
        "Stay ahead in the digital era with reliable, scalable solutions tailored for logistics leaders.",
    },
    cta: {
      title: "Ready to Digitize Your Logistics?",
      description:
        "Join thousands of businesses revolutionizing their supply chains with our E-Business platform.",
    },
  };

  const eBusinessFeatures: Feature[] = [
>>>>>>> e5ef5b6b706a18aca6a849943993395dbf747f10
    {
      title: "Digital Logistics Platform",
      content:
        "Our intuitive online portal allows real-time tracking, booking, and management of shipments from anywhere in the world.",
      icon: "🚀",
    },
    {
      title: "API Integrations",
      content:
        "Seamlessly connect your systems with our robust APIs for automated data exchange and streamlined operations.",
      icon: "🔌",
    },
    {
      title: "AI-Powered Analytics",
      content:
        "Harness the power of AI to gain insights into your supply chain, predict disruptions, and optimize routes.",
      icon: "🧠",
    },
    {
      title: "Secure E-Documentation",
      content:
        "Digitize all paperwork with electronic signatures and blockchain-verified documents for compliance and efficiency.",
      icon: "📄",
    },
    {
      title: "Mobile App Access",
      content:
        "Stay connected on the go with our mobile app for instant notifications, updates, and support.",
      icon: "📱",
    },
  ];

<<<<<<< HEAD
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation - Placeholder */}
     <Header />
=======
  const [translatedStatic, setTranslatedStatic] = useState<StaticContent>(staticContent);
  const [translatedFeatures, setTranslatedFeatures] = useState<Feature[]>(eBusinessFeatures);
  const [isLoading, setIsLoading] = useState(false);

  // ✅ Translation effect
  useEffect(() => {
    async function translateContent() {
      if (locale === "en") {
        setTranslatedStatic(staticContent);
        setTranslatedFeatures(eBusinessFeatures);
        return;
      }

      try {
        setIsLoading(true);

        const staticPayload = Object.entries(staticContent).flatMap(([sectionKey, sectionValue]) =>
          Object.entries(sectionValue).map(([key, text]) => ({ key: `${sectionKey}.${key}`, text }))
        );

        const featuresPayload = eBusinessFeatures.map((f) => ({ title: f.title, content: f.content }));

        const res = await fetch("/api/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content: { static: staticPayload, services: featuresPayload }, targetLocale: locale.toUpperCase() }),
        });

        if (!res.ok) {
          console.error("Translation failed:", res.statusText);
          setTranslatedStatic(staticContent);
          setTranslatedFeatures(eBusinessFeatures);
          return;
        }

        const data = await res.json();

        // Merge static content
        const mergedStatic: Partial<StaticContent> = {
          hero: { title: "", description: "", button: "" },
          features: { title: "", subtitle: "" },
          benefits: { title: "", subtitle: "" },
          cta: { title: "", description: "" },
        };
        (data.static || staticPayload).forEach((item: any) => {
          const [sectionKey, subKey] = item.key.split(".");
          if (mergedStatic[sectionKey as keyof StaticContent]) {
            (mergedStatic[sectionKey as keyof StaticContent] as any)[subKey] = item.text;
          }
        });
        setTranslatedStatic(mergedStatic as StaticContent);

        // Merge features
        const mergedFeatures = (data.services || featuresPayload).map((item: any, i: number) => ({
          ...eBusinessFeatures[i],
          title: item.title,
          content: item.content,
        }));
        setTranslatedFeatures(mergedFeatures);
      } catch (err) {
        console.error("Translation error:", err);
        setTranslatedStatic(staticContent);
        setTranslatedFeatures(eBusinessFeatures);
      } finally {
        setIsLoading(false);
      }
    }

    translateContent();
  }, [locale]);

  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />
>>>>>>> e5ef5b6b706a18aca6a849943993395dbf747f10

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
<<<<<<< HEAD
          <h1 className="text-5xl font-bold mb-6">E-Business Solutions</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Transform your logistics with cutting-edge digital tools designed for the modern supply chain.
            Experience seamless, efficient, and intelligent e-business operations.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get Started
=======
          <h1 className="text-5xl font-bold mb-6">{translatedStatic.hero.title}</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{translatedStatic.hero.description}</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            {translatedStatic.hero.button}
>>>>>>> e5ef5b6b706a18aca6a849943993395dbf747f10
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
<<<<<<< HEAD
          <h2 className="text-4xl font-semibold">Key E-Business Features</h2>
          <p className="text-slate-600 mt-4">
            Empower your business with innovative digital solutions that drive efficiency and growth.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eBusinessFeatures.map((feature, index) => (
=======
          <h2 className="text-4xl font-semibold">{translatedStatic.features.title}</h2>
          <p className="text-slate-600 mt-4">{translatedStatic.features.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {translatedFeatures.map((feature, index) => (
>>>>>>> e5ef5b6b706a18aca6a849943993395dbf747f10
            <div
              key={feature.title}
              className={`p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 ${
                activeFeature === index ? "bg-blue-50 border-blue-300" : ""
              }`}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
<<<<<<< HEAD
              <p className={`transition-opacity duration-300 ${
                activeFeature === index ? "opacity-100" : "opacity-80"
              }`}>
=======
              <p className={`transition-opacity duration-300 ${activeFeature === index ? "opacity-100" : "opacity-80"}`}>
>>>>>>> e5ef5b6b706a18aca6a849943993395dbf747f10
                {feature.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
<<<<<<< HEAD
            <h2 className="text-4xl font-semibold">Why Choose Our E-Business?</h2>
            <p className="text-slate-600 mt-4">
              Stay ahead in the digital era with reliable, scalable solutions tailored for logistics leaders.
            </p>
=======
            <h2 className="text-4xl font-semibold">{translatedStatic.benefits.title}</h2>
            <p className="text-slate-600 mt-4">{translatedStatic.benefits.subtitle}</p>
>>>>>>> e5ef5b6b706a18aca6a849943993395dbf747f10
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>24/7 Access to Real-Time Data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Cost Savings Through Automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Enhanced Security & Compliance</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Scalable for Global Operations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Expert Support Team</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Innovative AI Insights</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto text-center">
<<<<<<< HEAD
        <h2 className="text-3xl font-semibold mb-4">Ready to Digitize Your Logistics?</h2>
        <p className="text-slate-600 mb-8">
          Join thousands of businesses revolutionizing their supply chains with our E-Business platform.
        </p>
        
      </section>

      {/* Footer - Placeholder */}
      <Footer />
    </div>
  );
}
=======
        <h2 className="text-3xl font-semibold mb-4">{translatedStatic.cta.title}</h2>
        <p className="text-slate-600 mb-8">{translatedStatic.cta.description}</p>
      </section>

      <Footer />
    </div>
  );
}
>>>>>>> e5ef5b6b706a18aca6a849943993395dbf747f10
