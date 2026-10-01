export const SITE = {
  name: "Evolve Fitness",
  tagline: "Train Hard. Stay Humble. Evolve Daily.",
  city: "Pir Mahal",
  country: "Pakistan",
  address: "Main Road, Pir Mahal, Punjab, Pakistan",
  phoneDisplay: "+92 340 7437050",
  phoneHref: "tel:+923407437050",
  whatsapp: "https://wa.me/923407437050",
  facebook: "https://www.facebook.com/share/1EPfs5VDEA/?mibextid=wwXIfr",
  hours: [
    { days: "Monday – Saturday", time: "6:00 AM – 10:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Trainers", href: "/trainers" },
  { label: "Pricing", href: "/pricing" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const PROGRAMS = [
  {
    slug: "strength",
    title: "Strength Training",
    desc: "Build raw power with free weights, squat racks, and plate-loaded machines under expert supervision.",
    image:
      "/images/program-strength.jpg",
    points: ["Free-weight zone", "Squat & bench racks", "Progressive programs"],
  },
  {
    slug: "muscle",
    title: "Muscle Building",
    desc: "Hypertrophy-focused splits, proper form coaching, and nutrition guidance for serious size gains.",
    image:
      "/images/program-muscle.jpg",
    points: ["Split routines", "Form correction", "Diet planning"],
  },
  {
    slug: "fat-loss",
    title: "Fat Loss & Cardio",
    desc: "Treadmills, cycles, and HIIT circuits designed to burn fat fast and keep your heart strong.",
    image:
      "/images/program-fatloss.jpg",
    points: ["Cardio machines", "HIIT circuits", "Weight tracking"],
  },
  {
    slug: "personal",
    title: "Personal Training",
    desc: "One-on-one coaching with a dedicated trainer, custom workout and diet plan built around your goals.",
    image:
      "/images/program-personal.jpg",
    points: ["1-on-1 sessions", "Custom diet plan", "Faster results"],
  },
  {
    slug: "group",
    title: "Group Classes",
    desc: "High-energy group sessions that keep you motivated — train together, push harder, have fun.",
    image:
      "/images/program-group.jpg",
    points: ["Morning & evening batches", "All fitness levels", "Team energy"],
  },
  {
    slug: "conditioning",
    title: "Conditioning & Core",
    desc: "Functional training, core work, and mobility drills for athletic performance and injury prevention.",
    image:
      "/images/program-conditioning.jpg",
    points: ["Functional zone", "Core circuits", "Mobility work"],
  },
];

export const TRAINERS = [
  {
    name: "Bilal Ahmed",
    role: "Head Coach — Strength & Conditioning",
    image:
      "/images/trainer-coach1.jpg",
    specialty: "Powerlifting · 8 yrs experience",
  },
  {
    name: "Usman Tariq",
    role: "Personal Trainer",
    image:
      "/images/trainer-coach2.jpg",
    specialty: "Muscle building · Transformations",
  },
  {
    name: "Ayesha Khan",
    role: "Fitness Coach",
    image:
      "/images/trainer-coach3.jpg",
    specialty: "Fat loss · Ladies batches",
  },
  {
    name: "Imran Shah",
    role: "Cardio & Group Instructor",
    image:
      "/images/trainer-coach4.jpg",
    specialty: "HIIT · Group energy",
  },
];

export const PLANS = [
  {
    name: "Monthly",
    price: "Rs 3,000",
    period: "/month",
    desc: "Perfect for trying us out.",
    features: ["Full gym access", "Locker facility", "1 diet guideline", "Group classes"],
    featured: false,
  },
  {
    name: "Quarterly",
    price: "Rs 8,000",
    period: "/3 months",
    desc: "Commit for 90 days, see real change.",
    features: [
      "Full gym access",
      "Locker facility",
      "Custom diet plan",
      "Group classes",
      "Monthly measurements",
    ],
    featured: true,
  },
  {
    name: "Half-Yearly",
    price: "Rs 14,000",
    period: "/6 months",
    desc: "For serious transformations.",
    features: [
      "Full gym access",
      "Locker facility",
      "Custom diet plan",
      "Group classes",
      "Monthly measurements",
      "Priority trainer support",
    ],
    featured: false,
  },
  {
    name: "Yearly",
    price: "Rs 24,000",
    period: "/year",
    desc: "Best value — 4 months free.",
    features: [
      "Full gym access",
      "Locker facility",
      "Custom diet plan",
      "Group classes",
      "Monthly measurements",
      "Priority trainer support",
      "2 guest passes",
    ],
    featured: false,
  },
];

export const TESTIMONIALS = [
  {
    name: "Danish Raza",
    text: "Best gym in Pir Mahal, hands down. The trainers actually correct your form and the environment keeps you consistent. Lost 12 kg in 4 months.",
  },
  {
    name: "Sana Malik",
    text: "As a woman I was nervous about joining a gym, but the separate ladies timing and respectful staff made it comfortable from day one.",
  },
  {
    name: "Fahad Iqbal",
    text: "Proper equipment, no waiting for machines, and the diet plan actually works. Gained 6 kg of clean muscle in 5 months.",
  },
];

export const GALLERY = [
  "/images/hero-main.jpg",
  "/images/gym-wide.jpg",
  "/images/program-strength.jpg",
  "/images/program-muscle.jpg",
  "/images/program-fatloss.jpg",
  "/images/program-personal.jpg",
  "/images/program-group.jpg",
  "/images/program-conditioning.jpg",
  "/images/trainer-coach1.jpg",
];

export const SCHEDULE = [
  { day: "Monday", focus: "Chest + Triceps", group: "HIIT Blast — 7 PM" },
  { day: "Tuesday", focus: "Back + Biceps", group: "Core Crusher — 7 PM" },
  { day: "Wednesday", focus: "Legs", group: "HIIT Blast — 7 PM" },
  { day: "Thursday", focus: "Shoulders + Abs", group: "Mobility Flow — 7 PM" },
  { day: "Friday", focus: "Arms + Cardio", group: "HIIT Blast — 7 PM" },
  { day: "Saturday", focus: "Full Body + Functional", group: "Weekend Warrior — 10 AM" },
];
