import { useEffect } from 'react';

export default function Seo({ title, description, image, type = 'website', schema }) {
  useEffect(() => {
    document.title = title;

    // Helper for meta tags
    function setMeta(property, name, content) {
      if (!content) return;
      const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (property) el.setAttribute('property', property);
        if (name) el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    }

    // Standard description
    setMeta(null, 'description', description);

    // Canonical link
    const siteUrl = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/$/, '');
    const fullUrl = `${siteUrl}${window.location.pathname}`;

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullUrl);

    // Image URL resolution
    let fullImageUrl = '';
    if (image) {
      const cleanImg = image.startsWith('/') ? image : '/' + image;
      fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${cleanImg}`;
    }

    // OpenGraph meta tags
    setMeta('og:title', null, title);
    setMeta('og:description', null, description);
    setMeta('og:url', null, fullUrl);
    setMeta('og:type', null, type);
    if (fullImageUrl) setMeta('og:image', null, fullImageUrl);

    // Twitter meta tags
    setMeta(null, 'twitter:card', fullImageUrl ? 'summary_large_image' : 'summary');
    setMeta(null, 'twitter:title', title);
    setMeta(null, 'twitter:description', description);
    if (fullImageUrl) setMeta(null, 'twitter:image', fullImageUrl);

    // JSON-LD Schema (LocalBusiness + custom schemas)
    const baseLocalBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'FreshCut Home',
      url: siteUrl,
      telephone: '+92-311-2605525',
      description,
      address: { '@type': 'PostalAddress', addressLocality: 'Karachi', addressCountry: 'PK' },
      areaServed: { '@type': 'City', name: 'Karachi' },
      priceRange: 'PKR'
    };

    const schemaList = [baseLocalBusinessSchema];
    if (schema) {
      if (Array.isArray(schema)) schemaList.push(...schema);
      else schemaList.push(schema);
    }

    let script = document.getElementById('freshcut-schema');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'freshcut-schema';
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(schemaList.length === 1 ? schemaList[0] : schemaList);

    return () => {
      // Cleanup custom script on unmount
      script?.remove();
    };
  }, [title, description, image, type, schema]);

  return null;
}
