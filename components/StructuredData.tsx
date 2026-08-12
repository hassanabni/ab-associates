const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://abassociates.com.pk";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "AB Associates",
    description:
      "A private real estate consultancy in Karachi — twenty years of hands-on expertise across HMR Waterfront, Phase 8, and DHA City.",
    url: SITE_URL,
    telephone: "+92-301-2685000",
    email: "enquiries@abassociates.pk",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Office no M4, teen talwar, Yousuf Grand Square, Khayaban-e-Iqbal Rd, Block 8 Clifton",
      addressLocality: "Karachi",
      postalCode: "75600",
      addressCountry: "PK",
    },
    hasMap: "https://maps.app.goo.gl/8pHticfWBgmzTtKA7",
    areaServed: [
      { "@type": "Place", name: "HMR Waterfront, Karachi" },
      { "@type": "Place", name: "Phase 8, DHA, Karachi" },
      { "@type": "Place", name: "DHA City, Karachi" },
    ],
    sameAs: ["https://instagram.com/ab.associates1"],
    foundingDate: "2004",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
