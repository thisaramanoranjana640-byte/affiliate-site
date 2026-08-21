'use client';

import { useEffect, useState } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Select all H2 and H3 elements inside the article
    const elements = Array.from(document.querySelectorAll('article h2, article h3'));
    const items: Heading[] = elements.map((elem, index) => {
      // Ensure each heading has an ID for anchoring
      if (!elem.id) {
        elem.id = elem.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') || `heading-${index}`;
      }
      return {
        id: elem.id,
        text: elem.textContent || '',
        level: elem.tagName === 'H2' ? 2 : 3,
      };
    });

    setHeadings(items);

    // Scroll Observer to highlight current active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -70% 0px' }
    );

    elements.forEach((elem) => observer.observe(elem));
    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm sticky top-6">
      <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">
        On This Page
      </h4>
      <ul className="space-y-2 text-xs">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ paddingLeft: heading.level === 3 ? '0.75rem' : '0' }}
          >
            <a
              href={`#${heading.id}`}
              className={`block transition-colors ${
                activeId === heading.id
                  ? 'text-amber-600 font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}