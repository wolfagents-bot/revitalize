export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://revitalize.health/#business",
    name: "Revitalize Performance Medicine",
    description:
      "Physician-led peptide therapy, hormone optimization, and advanced bloodwork. Personalized protocols for peak human performance.",
    url: "https://revitalize.health",
    logo: {
      "@type": "ImageObject",
      url: "https://revitalize.health/og-image.jpg",
      width: 1200,
      height: 630,
    },
    telephone: "(555) 000-0000", // TODO: Replace with real phone
    email: "hello@revitalize.health", // TODO: Replace with real email
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      // TODO: Add real address details
    },
    medicalSpecialty: [
      "https://schema.org/Endocrine",
      "https://schema.org/Musculoskeletal",
    ],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Peptide Therapy",
        description:
          "Targeted peptide protocols for recovery, body composition, cognition, and longevity.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Hormone Optimization",
        description:
          "Evidence-based hormone replacement and optimization with comprehensive lab monitoring.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Advanced Bloodwork",
        description:
          "Comprehensive 80+ biomarker panels for personalized health optimization.",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Free Consultation",
            description:
              "No-obligation initial consultation with a licensed physician.",
          },
          price: "0",
          priceCurrency: "USD",
        },
      ],
    },
    sameAs: [
      // TODO: Add social media URLs
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
