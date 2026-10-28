import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('[data-reveal]'));
    if (!nodes.length) return undefined;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      nodes.forEach((node) => node.classList.add('reveal-active'));
      return undefined;
    }

    nodes.forEach((node) => {
      if (node.dataset.revealDelay) {
        node.style.transitionDelay = `${node.dataset.revealDelay}ms`;
      }
      if (node.dataset.reveal === 'group') {
        node.querySelectorAll('[data-reveal-item]').forEach((child, index) => {
          child.style.transitionDelay = `${Math.min(index, 10) * 90}ms`;
        });
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('reveal-active');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0, rootMargin: '0px 0px -40px 0px' }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}
