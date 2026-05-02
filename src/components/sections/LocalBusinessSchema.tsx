// components/LocalBusinessSchema.tsx

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Workeraa",
    "image": "https://www.workeraa.co.in/_next/image?url=%2Fimages%2Flogo%2Fworkeraa.png&w=128&q=75",
    "@id": "https://www.workeraa.co.in/",
    "url": "https://www.workeraa.co.in/",
    "telephone": "+91-8700192565",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sector 23, Dwarka, Delhi",
      "addressLocality": "Delhi",
      "postalCode": "110075",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}