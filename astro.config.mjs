import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://Nobda.github.io",
  image: {
    domains: ["images.unsplash.com"]
  },

  prefetch: true,
  integrations: [tailwind(), sitemap({
    i18n: {
      defaultLocale: "en",
      locales: {
        en: "en",
        ar: "ar"
      }
    }
  }), starlight({
    title: "ScrewFast Docs",
    defaultLocale: "root",
    locales: {
      root: {
        label: "English",
        lang: "en"
      },
      de: {
        label: "Deutsch",
        lang: "de"
      },
      es: {
        label: "Español",
        lang: "es"
      },
      fa: {
        label: "Persian",
        lang: "fa",
        dir: "rtl"
      },
      ar: {
        label: "Arabic",
        lang: "ar"
      },
      ja: {
        label: "日本語",
        lang: "ja"
      },
      "zh-cn": {
        label: "简体中文",
        lang: "zh-CN"
      }
    },
    sidebar: [{
      label: "Quick Start Guides",
      translations: {
        de: "Schnellstartanleitungen",
        es: "Guías de Inicio Rápido",
        fa: "راهنمای شروع سریع",
        ar: "Guides de Démarrage Rapide",
        ja: "クイックスタートガイド",
        "zh-cn": "快速入门指南"
      },
      autogenerate: {
        directory: "guides"
      }
    }, {
      label: "Tools & Equipment",
      items: [{
        label: "Tool Guides",
        link: "tools/tool-guides/"
      }, {
        label: "Equipment Care",
        link: "tools/equipment-care/"
      }]
    }, {
      label: "Construction Services",
      autogenerate: {
        directory: "construction"
      }
    }, {
      label: "Advanced Topics",
      autogenerate: {
        directory: "advanced"
      }
    }],
    social: {
      github: "https://github.com/mearashadowfax/ScrewFast"
    },
    disable404Route: true,
    customCss: ["./src/assets/styles/starlight.css"],
    favicon: "/favicon.ico",
    components: {
      SiteTitle: "./src/components/ui/starlight/SiteTitle.astro",
      Head: "./src/components/ui/starlight/Head.astro",
      MobileMenuFooter: "./src/components/ui/starlight/MobileMenuFooter.astro",
      ThemeSelect: "./src/components/ui/starlight/ThemeSelect.astro"
    },
    head: [{
      tag: "meta",
      attrs: {
        property: "og:image",
        content: "https://screwfast.uk" + "/social.webp"
      }
    }, {
      tag: "meta",
      attrs: {
        property: "twitter:image",
        content: "https://screwfast.uk" + "/social.webp"
      }
    }]
  }), compressor({
    gzip: false,
    brotli: true
  }), react()],
  experimental: {
    clientPrerender: true,
    directRenderScript: true
  },
  output : "static",
  adapter: vercelStatic()
});