// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Scholarships", url: "/blog" },
  { name: "Internship Opportunities", url: "/Internship%20Opportunities"},
  { name: "PhD Opportunities", url: "/PhD%20Opportunities" },
  { name: "Job Opportunities", url: "/Job%20Opportunities" },
  { name: "Contact", url: "/contact" },
  { name: "Services", url: "/services" },
  { name: "Blog", url: "/blog" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Company",
    links: [
      { name: "About us", url: "#" },
      { name: "Blog", url: "/blog" },
      { name: "Customers", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};