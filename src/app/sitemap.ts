import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: "https://www.workeraa.co.in",
      lastModified: now,
      priority: 1,
    },
    {
      url: "https://www.workeraa.co.in/about",
      lastModified: now,
      priority: 0.8,
    },
    {
      url: "https://www.workeraa.co.in/contact",
      lastModified: now,
      priority: 0.8,
    },
    {
      url: "https://www.workeraa.co.in/industries",
      lastModified: now,
      priority: 0.8,
    },
    {
      url: "https://www.workeraa.co.in/services",
      lastModified: now,
      priority: 0.8,
    },

    // Service pages
    {
      url: "https://www.workeraa.co.in/services/it-recruitment-agency",
      lastModified: now,
      priority: 0.9,
    },
    {
      url: "https://www.workeraa.co.in/services/accounting-finance-recruitment-services",
      lastModified: now,
      priority: 0.9,
    },
    {
      url: "https://www.workeraa.co.in/services/sales-marketing-recruitment-services",
      lastModified: now,
      priority: 0.9,
    },
    {
      url: "https://www.workeraa.co.in/services/saas-cybersecurity-recruitment-services",
      lastModified: now,
      priority: 0.9,
    },
    {
      url: "https://www.workeraa.co.in/services/manufacturing-operation-recruitment-services",
      lastModified: now,
      priority: 0.9,
    },
    {
      url: "https://www.workeraa.co.in/services/bpo-customer-support-recruitment-services",
      lastModified: now,
      priority: 0.9,
    },
  ];
}