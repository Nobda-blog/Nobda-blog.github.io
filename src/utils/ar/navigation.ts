// An array of links for navigation bar
const navBarLinks = [
  { name: "الرئيسية", url: "/ar/" },
  { name: "مدونة", url: "/ar/blog" },
  { name: "منح دراسية", url: "/ar/Scholarships" },
  { name: "فرص التدريب", url: "/ar/Internship%20Opportunities"},
  { name: "فرص عمل", url: "/ar/Job%20Opportunities" },
  { name: "فرص اخرى", url: "/ar/Other" },
  { name: "خدمات", url: "/ar/services" },
  { name: "اتصل بنا", url: "/ar/contact" },
  
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
  youtube: "https://www.youtube.com/@Nobda-x7y",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};