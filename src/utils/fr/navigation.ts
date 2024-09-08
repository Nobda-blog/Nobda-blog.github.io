// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Blog", url: "/blog" },
  { name: "Scholarships", url: "/Scholarships" },
  { name: "Internship Opportunities", url: "/Internship%20Opportunities"},
  { name: "PhD Opportunities", url: "/PhD%20Opportunities" },
  { name: "Job Opportunities", url: "/Job%20Opportunities" },
  { name: "Services", url: "/services" },
  { name: "Contact", url: "/contact" },
  
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
  telegram: "https://t.me/nobdaforyou",
  instagram: "https://www.instagram.com/robotxandmore/",
  whatsapp: "https://whatsapp.com/channel/0029Vao1nXVBlHpVq95Al91J",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};