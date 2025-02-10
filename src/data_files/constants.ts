import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "",
  tagline: "Internships, PhD, Jobs, and Scholarships for Students",
  description: "Nobda helps students find the best internships, PhD positions, jobs, and scholarships worldwide. Start your career journey with verified opportunities in various fields.",
  description_short: "Find top internship, PhD, job, and scholarship opportunities for students.",
  url: "https://nobda.com",  // Update with your actual website domain
  author: "Nobda Team",
};


export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
    potentialAction: {
      "@type": "SearchAction",
      "target": `${SITE.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  },
};


export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title} - Internships, Jobs & Scholarships`,
  description: "Explore the best internship, PhD, job, and scholarship opportunities for students worldwide. Start your journey with Nobda today!",
  image: ogImageSrc, // Ensure this image is relevant (e.g., your logo or a banner)
};

