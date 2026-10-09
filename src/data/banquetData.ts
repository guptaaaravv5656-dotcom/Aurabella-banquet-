export interface EventCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  badge: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'stage' | 'dining' | 'celebration';
  categoryLabel: string;
  image: string;
  caption: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  iconName: string;
}

export const BUSINESS_INFO = {
  name: 'Aurabella Banquet',
  tagline: 'Celebrate Life’s Beautiful Moments.',
  address: 'Millennium Tower, beside Gehna Jewellers, City Center, Gwalior, Madhya Pradesh 474011, India.',
  shortAddress: 'City Center, Gwalior, Madhya Pradesh',
  landmark: 'Beside Gehna Jewellers, Millennium Tower',
  phones: [
    { display: '6260952272', raw: '6260952272', tel: 'tel:+916260952272' },
    { display: '7470399769', raw: '7470399769', tel: 'tel:+917470399769' },
  ],
  whatsapps: [
    { display: '6260952272', raw: '6260952272', link: 'https://wa.me/916260952272' },
    { display: '7470399769', raw: '7470399769', link: 'https://wa.me/917470399769' },
  ],
  instagram: {
    handle: '@aurabellabanquet.gwl',
    url: 'https://www.instagram.com/aurabellabanquet.gwl?stkn=bGh3cnBiaGkxcmhy',
  },
  openingHours: {
    days: 'Monday to Sunday',
    timing: '11:00 AM – 8:00 PM',
    schedule: [
      { day: 'Monday', hours: '11:00 AM – 8:00 PM' },
      { day: 'Tuesday', hours: '11:00 AM – 8:00 PM' },
      { day: 'Wednesday', hours: '11:00 AM – 8:00 PM' },
      { day: 'Thursday', hours: '11:00 AM – 8:00 PM' },
      { day: 'Friday', hours: '11:00 AM – 8:00 PM' },
      { day: 'Saturday', hours: '11:00 AM – 8:00 PM' },
      { day: 'Sunday', hours: '11:00 AM – 8:00 PM' },
    ],
  },
  googleMapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Aurabella+Banquet+Millennium+Tower+beside+Gehna+Jewellers+City+Center+Gwalior+Madhya+Pradesh+474011+India',
};

export const EVENT_CATEGORIES: EventCategory[] = [
  {
    id: 'weddings',
    title: 'Weddings',
    description: 'A grand, timeless backdrop for unforgettable wedding rituals, receptions, and lifelong memories.',
    image: '/src/assets/images/aurabella_real_stage_1791557825927.jpg',
    badge: 'Ceremony & Reception',
  },
  {
    id: 'engagements',
    title: 'Engagement Ceremonies',
    description: 'An elegant and charming setting for ring ceremonies, roka, and auspicious beginnings with loved ones.',
    image: '/src/assets/images/aurabella_stage_detail_1791557860265.jpg',
    badge: 'Pre-Wedding',
  },
  {
    id: 'birthdays',
    title: 'Birthday Celebrations',
    description: 'Vibrant celebratory ambience designed to make milestone birthdays joyfully memorable for all ages.',
    image: '/src/assets/images/aurabella_hall_seating_1791557837098.jpg',
    badge: 'Milestone Events',
  },
  {
    id: 'anniversaries',
    title: 'Anniversary Celebrations',
    description: 'Celebrate cherished years of love and togetherness in a sophisticated, candlelit banquet atmosphere.',
    image: '/src/assets/images/gallery_dining_setup_1791555899191.jpg',
    badge: 'Milestone Love',
  },
  {
    id: 'family-functions',
    title: 'Family Functions',
    description: 'Spacious and welcoming venue for naming ceremonies, sacred rituals, and joyful family get-togethers.',
    image: '/src/assets/images/aurabella_venue_panoramic_1791557848838.jpg',
    badge: 'Family Gatherings',
  },
  {
    id: 'corporate-events',
    title: 'Corporate Events',
    description: 'Polished venue ideal for company conferences, annual gala dinners, awards, and networking seminars.',
    image: '/src/assets/images/aurabella_hall_seating_1791557837098.jpg',
    badge: 'Business & Conferences',
  },
  {
    id: 'festive-celebrations',
    title: 'Festive Celebrations',
    description: 'Celebrate cultural festivals, Diwali soirees, Eid parties, and seasonal gatherings in grand festive style.',
    image: '/src/assets/images/aurabella_real_stage_1791557825927.jpg',
    badge: 'Cultural Festive',
  },
  {
    id: 'private-gatherings',
    title: 'Private Gatherings',
    description: 'Exclusive and intimate celebration setting tailored for your close inner circle and special moments.',
    image: '/src/assets/images/aurabella_stage_detail_1791557860265.jpg',
    badge: 'Intimate Soirees',
  },
];

export const WHY_CHOOSE_US_ITEMS: FeatureItem[] = [
  {
    title: 'Elegant Ambience',
    description: 'Tastefully designed banquet space with warm illumination, grand chandeliers, and refined decorative architecture.',
    iconName: 'Sparkles',
  },
  {
    title: 'Convenient City Center Location',
    description: 'Centrally situated at Millennium Tower beside Gehna Jewellers in City Center, easily accessible for guests across Gwalior.',
    iconName: 'MapPin',
  },
  {
    title: 'A Setting for Special Occasions',
    description: 'Thoughtfully planned layouts accommodating weddings, engagements, family ceremonies, and corporate banquets.',
    iconName: 'CalendarCheck',
  },
  {
    title: 'Memorable Celebrations',
    description: 'A warm, welcoming hospitality environment where family and friends come together to cherish life’s beautiful milestones.',
    iconName: 'HeartHandshake',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Aurabella Celebration Stage',
    category: 'stage',
    categoryLabel: 'Stage Setup',
    image: '/src/assets/images/aurabella_real_stage_1791557825927.jpg',
    caption: 'Signature wedding and reception stage with white tufted Victorian loveseat, circular floral wreath arch, and flower base runner.',
  },
  {
    id: 'g-2',
    title: 'Banquet Hall & Seating Layout',
    category: 'interior',
    categoryLabel: 'Hall Seating',
    image: '/src/assets/images/aurabella_hall_seating_1791557837098.jpg',
    caption: 'Mustard yellow velvet lounge sofas in the foreground with organized rows of banquet chairs tied with maroon satin sashes.',
  },
  {
    id: 'g-3',
    title: 'Panoramic Venue Hall View',
    category: 'interior',
    categoryLabel: 'Grand Venue View',
    image: '/src/assets/images/aurabella_venue_panoramic_1791557848838.jpg',
    caption: 'Spacious perspective showing the elevated celebration stage, crystal chandeliers, mirror pillars, and festive gatherings.',
  },
  {
    id: 'g-4',
    title: 'Stage Detail & Candelabras',
    category: 'stage',
    categoryLabel: 'Stage Decor',
    image: '/src/assets/images/aurabella_stage_detail_1791557860265.jpg',
    caption: 'Close-up of the ornate white loveseat, golden candelabras with warm illumination, and dense floral hedge runner.',
  },
  {
    id: 'g-5',
    title: 'Banquet Dining Table Arrangement',
    category: 'dining',
    categoryLabel: 'Dining & Decor',
    image: '/src/assets/images/gallery_dining_setup_1791555899191.jpg',
    caption: 'Exquisite banquet dining setting with fine glassware, golden accents, and candlelight centerpieces.',
  },
  {
    id: 'g-6',
    title: 'Welcome Lounge & Architecture',
    category: 'interior',
    categoryLabel: 'Banquet Lounge',
    image: '/src/assets/images/about_banquet_hall_1791555871354.jpg',
    caption: 'Plush ivory seating, carved jali partitions, and modern designer cove lighting.',
  },
];
