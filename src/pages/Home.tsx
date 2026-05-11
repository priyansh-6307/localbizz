import React, { useEffect, useRef } from 'react';

/**
 * Home page — renders the original Webflow site as a full-page frame.
 * This preserves ALL original animations (GSAP, Lenis, SplitText, ScrollTrigger,
 * Barba, Odyn) without fighting React's lifecycle or Webflow's ix2 engine.
 *
 * The /webflow-home.html file is served from the Vite public/ folder.
 * Internal Webflow links (Exhibits, Blog, Contact) are intercepted and
 * rewritten to navigate within the React app.
 */
export default function Home() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Hide the React navbar on this page — Webflow's own nav is inside the iframe
    document.body.style.overflow = 'hidden'; // iframe handles scrolling

    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      try {
        const iDoc = iframe.contentDocument;
        if (!iDoc) return;

        // Intercept all internal <a> clicks so they navigate in the parent React app
        const routeMap: Record<string, string> = {
          '/exhibits': '/Services',
          '/contact': '/Contact',
          '/blog': '/blog',
          '/find-us': '/about',
          '/tickets': '/about',
        };

        iDoc.addEventListener('click', (e) => {
          const target = e.target as HTMLElement;
          const anchor = target.closest('a') as HTMLAnchorElement | null;
          if (!anchor) return;
          const href = anchor.getAttribute('href') || '';
          // Skip external links and anchor links
          if (href.startsWith('http') || href.startsWith('#') || href === '') return;
          
          // Map Webflow routes → React routes
          const reactRoute = routeMap[href] ?? href;
          e.preventDefault();
          window.location.href = reactRoute; // Navigate in parent
        });
      } catch (err) {
        // Cross-origin or load error — ignore
        console.warn('[Home iframe] Could not intercept links:', err);
      }
    };

    iframe.addEventListener('load', handleLoad);
    return () => {
      iframe.removeEventListener('load', handleLoad);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src="/webflow-home.html"
      title="Museum of Money Home"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        border: 'none',
        zIndex: 1,
        display: 'block',
      }}
      // Allow all features the Webflow site might use
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    />
  );
}
