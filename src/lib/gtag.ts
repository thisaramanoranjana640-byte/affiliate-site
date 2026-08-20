import { sendGAEvent } from "@next/third-parties/google";

export const trackAffiliateClick = (productName: string, affiliateUrl: string) => {
  sendGAEvent("event", "click_affiliate_link", {
    event_category: "Outbound Link",
    event_label: productName,
    destination_url: affiliateUrl,
  });
};