export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackAffiliateClick = (slug: string) => {
  event({
    action: 'click_affiliate_link',
    category: 'Affiliate',
    label: slug,
  });
};