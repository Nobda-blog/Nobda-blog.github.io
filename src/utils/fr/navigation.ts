// An array of links for navigation bar
const navBarLinks = [
  { name: "الرئيسية", url: "/fr/" },
  { name: "مدونة", url: "/fr/blog" },
  { name: "منح دراسية", url: "/fr/Scholarships" },
  { name: "عروض التدريب", url: "/fr/Internship%20Opportunities"},
  { name: "عروض الدكتوراه", url: "/fr/PhD%20Opportunities" },
  { name: "فرص عمل", url: "/fr/Job%20Opportunities" },
  { name: "خدمات", url: "/fr/services" },
  { name: "اتصل بنا", url: "/fr/contact" },
  
].reverse();


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