/**
 * Single source of truth for business details, nav and services.
 *
 * Anything marked PLACEHOLDER is waiting on the client — swap the value here
 * and it updates across every page. Nothing else needs editing.
 */

export const site = {
  name: 'Simply Sorted',
  tagline: 'The art of everyday order',
  owner: 'Carolyn Kriel',
  role: 'Professional Organiser',

  email: 'office.simplysorted@gmail.com',

  // PLACEHOLDER — confirm with Carolyn whether to publish a number at all.
  // Set `publish: false` to hide the call/WhatsApp buttons sitewide.
  phone: {
    publish: false,
    display: '+27 00 000 0000',
    tel: '+270000000000',
    whatsapp: '270000000000',
  },

  area: {
    primary: 'Centurion',
    secondary: 'Pretoria',
    label: 'Centurion & greater Pretoria',
    region: 'Gauteng',
    country: 'ZA',
  },

  // Roughly central Centurion. Used only for LocalBusiness schema.
  geo: { lat: -25.8603, lng: 28.1894 },

  // PLACEHOLDER — Kenan is creating these. Empty strings are skipped in the footer.
  social: {
    facebook: '',
    instagram: '',
  },

  responseTime: 'within 1–2 business days',
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About Us' },
  { href: '/services/', label: 'Services' },
  { href: '/contact/', label: 'Contact Us' },
];

/**
 * The four offerings. Copy is the client's, verbatim from her brief, with the
 * per-service "includes" headings she wrote preserved.
 */
export const services = [
  {
    id: 'decluttering',
    number: '01',
    title: 'Professional Decluttering',
    tagline: 'Restore calm, clarity, and control to your living space.',
    teaser: 'Sort what you own at your own pace, then keep it that way with systems built around your habits.',
    body: [
      'Clutter in your home often leads to clutter in your mind. If your cupboards are overflowing, your garage is inaccessible, or your living rooms no longer feel relaxing, we can help you regain control.',
      'We work alongside you at your own pace to sort through your belongings, helping you decide what to keep, donate, sell, or discard. More than just cleaning up, we set up practical, easy-to-maintain storage systems tailored to your daily habits so your home stays beautifully organized long after we leave.',
    ],
    includesLabel: 'Our decluttering service includes:',
    includes: [
      'Wardrobe, kitchen, garage, and entire home sorting.',
      'Sensitive guidance on what to keep and what to let go.',
      'Ethical disposal, recycling, and donation drop-offs.',
      'Custom organization and storage solutions for every room.',
    ],
  },
  {
    id: 'downsizing-estates',
    number: '02',
    title: 'Downsizing & Deceased Estates',
    tagline: 'Gentle, respectful transition support during life’s sensitive moments.',
    teaser: 'Unhurried, dignified help through downsizing and the estate of someone you have lost.',
    // Handled with extra visual calm and space — see the brief's sensitivity note.
    sensitive: true,
    body: [
      'Moving to a smaller home or managing the estate of a loved one who has passed away can be emotionally and physically exhausting. You do not have to handle it alone. We specialize in managing these delicate transitions with the utmost dignity, patience, and care.',
      'For downsizers, we help you carefully select the most meaningful items that will fit comfortably into your new layout. For deceased estates, we work closely with family members or executors to methodically sort through sentimental belongings, catalogue items, and clear the property entirely so it is ready for sale or handover.',
    ],
    includesLabel: 'Our transition service includes:',
    includes: [
      'Patient decision-making support for downsizers.',
      'Sifting, sorting, and cataloguing items in deceased estates.',
      'Coordination of family heirloom distribution.',
      'Complete property clearance and cleaning prep.',
    ],
  },
  {
    id: 'pre-move-packing',
    number: '03',
    title: 'Pre-Move Decluttering & Expert Packing',
    tagline: 'The perfect preparation for a smooth, organized move.',
    teaser: 'Move only what you love, packed and labelled so unpacking is fast and stress-free.',
    body: [
      'Moving house is famously stressful, but the secret to a seamless move lies entirely in the preparation. If you don’t want to pack boxes for weeks or accidentally move items you no longer need, let us do the heavy lifting for you. We focus on getting your home completely sorted, decluttered, and professionally packed so that your actual moving day is an absolute breeze.',
      'We don’t just throw things into boxes; we curate your preparation. First, we help you clear out the clutter so you only pay to move the things you love. Then, we expertly wrap and box your belongings using systematic labelling. By organizing your items logically by room and function, we make sure that when you or your chosen removalists arrive at the new house, unpacking is fast, simple, and entirely stress-free.',
    ],
    includesLabel: 'Our packing preparation service includes:',
    includes: [
      'Strategic pre-move decluttering to lighten your load and reduce moving costs.',
      'Professional packing using high-quality protective materials.',
      'Highly detailed box labeling and room-by-room inventory mapping.',
      'Organizing essential “Day One” boxes so your immediate necessities are easy to find.',
    ],
  },
  {
    id: 'home-staging',
    number: '04',
    title: 'Home Staging',
    tagline: 'Maximize your property’s sale price using what you already own.',
    teaser: 'Present your home at its best for sale — using the furniture you already have.',
    body: [
      'First impressions matter enormously when selling a property, but you do not need to spend thousands renting a house full of temporary furniture to attract buyers. Our home staging service focuses primarily on using your existing furniture, editing and arranging it strategically to showcase your property’s best features, maximize the perception of space, and create an instant emotional connection with potential buyers.',
      'We evaluate your property through the lens of a buyer. By decluttering, depersonalizing, and repurposing your own quality pieces, we make each room look light, spacious, and highly desirable. Our goal is to help your property stand out online and during inspections using your home’s unique potential, ensuring a faster sale and a premium market price.',
    ],
    includesLabel: 'Our home staging service includes:',
    includes: [
      'Comprehensive property presentation assessments focusing on your existing layout.',
      'Decluttering, depersonalizing, and editing your spaces ahead of property photography.',
      'Strategic furniture rearranging to improve room flow and highlight key features.',
      'A tailored shopping list of affordable decor accents, cushions, and throws for you to buy.',
      'Professional placement and final styling of your new and existing pieces.',
    ],
  },
];

/** Options for the enquiry form's service dropdown. */
export const serviceOptions = [
  ...services.map((s) => s.title),
  'Not sure yet — I’d like to talk it through',
];
