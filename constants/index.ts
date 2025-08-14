// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", labelKey: "home" },
  { href: "/about", key: "about", labelKey: "about" },
  { href: "/", key: "services", labelKey: "services" },
  { href: "/reviews", key: "reviews", labelKey: "reviews" },
  // { href: "/", key: "pricing", labelKey: "pricing" },
  { href: "/contact", key: "contact_us", labelKey: "contactUs" },
];

// CAMP SECTION
export const PEOPLE_URL = [
  "/person-1.webp",
  "/person-2.webp",
  "/person-3.webp",
  "/person-4.webp",
];

// FEATURES SECTION
export const FEATURES = [
  {
    titleKey: "realMapsOffline.title",
    icon: "/map.svg",
    variant: "green",
    descriptionKey: "realMapsOffline.description",
  },
  {
    titleKey: "adventureSchedule.title",
    icon: "/calendar.svg",
    variant: "green",
    descriptionKey: "adventureSchedule.description",
  },
  {
    titleKey: "augmentedReality.title",
    icon: "/tech.svg",
    variant: "green",
    descriptionKey: "augmentedReality.description",
  },
  {
    titleKey: "newLocations.title",
    icon: "/location.svg",
    variant: "orange",
    descriptionKey: "newLocations.description",
  },
];

// REVIEWS SECTION
export const REVIEWS = [
  {
    id: 1,
    nameKey: "ali.name",
    rating: 5,
    commentKey: "ali.comment",
    avatar: "/person-1.webp",
  },
  {
    id: 2,
    nameKey: "sara.name",
    rating: 4,
    commentKey: "sara.comment",
    avatar: "/person-2.webp",
  },
  {
    id: 3,
    nameKey: "mohamed.name",
    rating: 5,
    commentKey: "mohamed.comment",
    avatar: "/person-3.webp",
  },
  {
    id: 4,
    nameKey: "fatima.name",
    rating: 5,
    commentKey: "fatima.comment",
    avatar: "/person-4.webp",
  },
  {
    id: 5,
    nameKey: "omar.name",
    rating: 4,
    commentKey: "omar.comment",
    avatar: "/person-4.webp",
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    id: 1,
    titleKey: "learnMore",
    linksKeys: [
      "aboutHilink",
      "pressReleases",
      "environment",
      "jobs",
      "privacyPolicy",
      "contactUs",
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  titleKey: "contactUsTitle",
  links: [
    { labelKey: "adminOfficer", value: "123-456-7890" },
    { labelKey: "emailOfficer", value: "hilink@akinthil.com" },
  ],
};

export const SOCIALS = {
  titleKey: "social",
  links: [
    "/facebook.svg",
    "/instagram.svg",
    "/twitter.svg",
    "/youtube.svg",
  ],
};
