/**
 * Add IntersectionObserver
 * @param {string} addClass - Name of the added class
 * @param {object} options - Options for IntersectionObserver
 * @returns {IntersectionObserver} - IntersectionObserver
 */
export default function addIntersectionObserver(addClass, options) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add(addClass);
        observer.unobserve(entry.target);
      } else {
        const element = entry.target;
        const content = element.innerHTML;
        const cacheKey = `cache-${element.id}`;
        caches.open('my-cache').then((cache) => {
          cache.put(cacheKey, new Response(content));
        });
      }
    }
  }, options);
  return observer;
}
