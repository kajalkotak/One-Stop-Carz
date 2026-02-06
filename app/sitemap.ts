// 

import { packages } from "@/app/data/packages";

export default function sitemap() {
  const baseUrl = "https://one-stop-carz.vercel.app";

  const offerPages = packages.map((pkg) => ({
    url: `${baseUrl}/offers/${pkg.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/offers`, lastModified: new Date() },
    { url: `${baseUrl}/booking`, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    ...offerPages,
  ];
}
