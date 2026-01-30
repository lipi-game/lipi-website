import { useEffect } from "react";

interface SEOOptions {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: "summary" | "summary_large_image";
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  noIndex?: boolean;
}

/**
 * Custom hook to manage SEO meta tags dynamically.
 * Updates document title and various meta/link tags based on the provided options.
 */
export function useSEO({
  title,
  description,
  canonical,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = "website",
  twitterCard = "summary",
  twitterTitle,
  twitterDescription,
  twitterImage,
  noIndex = false,
}: SEOOptions) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper to set or create meta tags
    const setMetaTag = (
      selector: string,
      attribute: "name" | "property",
      attrValue: string,
      content: string
    ) => {
      let meta = document.querySelector(selector) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, attrValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Helper to remove meta tags
    const removeMetaTag = (selector: string) => {
      const meta = document.querySelector(selector);
      if (meta) {
        meta.remove();
      }
    };

    // Standard meta tags
    setMetaTag('meta[name="description"]', "name", "description", description);

    // Keywords
    if (keywords) {
      setMetaTag('meta[name="keywords"]', "name", "keywords", keywords);
    }

    // Robots
    if (noIndex) {
      setMetaTag('meta[name="robots"]', "name", "robots", "noindex, nofollow");
    } else {
      setMetaTag('meta[name="robots"]', "name", "robots", "index, follow");
    }

    // Canonical link
    if (canonical) {
      let canonicalLink = document.querySelector(
        'link[rel="canonical"]'
      ) as HTMLLinkElement | null;
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute("href", canonical);
    }

    // Open Graph tags
    setMetaTag(
      'meta[property="og:title"]',
      "property",
      "og:title",
      ogTitle || title
    );
    setMetaTag(
      'meta[property="og:description"]',
      "property",
      "og:description",
      ogDescription || description
    );
    setMetaTag('meta[property="og:type"]', "property", "og:type", ogType);

    if (canonical) {
      setMetaTag('meta[property="og:url"]', "property", "og:url", canonical);
    }

    if (ogImage) {
      setMetaTag('meta[property="og:image"]', "property", "og:image", ogImage);
    }

    // Twitter Card tags
    setMetaTag(
      'meta[name="twitter:card"]',
      "name",
      "twitter:card",
      twitterCard
    );
    setMetaTag(
      'meta[name="twitter:title"]',
      "name",
      "twitter:title",
      twitterTitle || ogTitle || title
    );
    setMetaTag(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      twitterDescription || ogDescription || description
    );

    if (twitterImage || ogImage) {
      setMetaTag(
        'meta[name="twitter:image"]',
        "name",
        "twitter:image",
        twitterImage || ogImage || ""
      );
    }

    // Cleanup is optional for SPAs - we leave tags for next page to update
    return () => {
      // No cleanup needed as next page will override
    };
  }, [
    title,
    description,
    canonical,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    ogType,
    twitterCard,
    twitterTitle,
    twitterDescription,
    twitterImage,
    noIndex,
  ]);
}
