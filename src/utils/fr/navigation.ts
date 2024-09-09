// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/fr/" },
  { name: "Blog", url: "/fr/blog" },
  { name: "Bourses", url: "/fr/Scholarships" },
  { name: "Offres de Stages", url: "/fr/Internship%20Opportunities"},
  { name: "Offres de Doctorat", url: "/fr/PhD%20Opportunities" },
  { name: "Offres d'Emploi", url: "/fr/Job%20Opportunities" },
  { name: "Services", url: "/fr/services" },
  { name: "Contact", url: "/fr/contact" },
  
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