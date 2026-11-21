export type FeatureItem = {
  id: string;
  title: string;
  subtitle: string;
  iconSrc: string;
};

export const FEATURES: FeatureItem[] = [
  {
    id: "quality",
    title: "High Quality",
    subtitle: "crafted from top materials",
    iconSrc: "/images/trophy.svg",
  },
  {
    id: "warranty",
    title: "Warranty Protection",
    subtitle: "Over 2 years",
    iconSrc: "/images/guarantee.svg",
  },
  {
    id: "shipping",
    title: "Free Shipping",
    subtitle: "Order over 150 $",
    iconSrc: "/images/shipping.svg",
  },
  {
    id: "support",
    title: "24 / 7 Support",
    subtitle: "Dedicated support",
    iconSrc: "/images/customer-support.svg",
  },
];
