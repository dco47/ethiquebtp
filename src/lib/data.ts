export const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#pourquoi", label: "Pourquoi nous" },
  { href: "#actualites", label: "Actualités" },
  { href: "#contact", label: "Contact" },
] as const;

export const features = [
  {
    icon: "projects",
    title: "+100",
    subtitle: "Projets réalisés",
  },
  {
    icon: "team",
    title: "Équipe qualifiée",
    subtitle: "Professionnels expérimentés",
  },
  {
    icon: "quality",
    title: "Qualité garantie",
    subtitle: "Matériaux & standards élevés",
  },
  {
    icon: "deadline",
    title: "Respect des délais",
    subtitle: "Engagement et rigueur",
  },
] as const;

export const aboutPoints = [
  "Expertise reconnue en construction et rénovation",
  "Accompagnement personnalisé de A à Z",
  "Respect des normes et réglementations en vigueur",
  "Engagement qualité et satisfaction client",
] as const;

export const services = [
  {
    title: "Construction de bâtiments",
    description:
      "Réalisation de projets résidentiels, commerciaux et industriels avec des matériaux de qualité.",
    icon: "building",
  },
  {
    title: "Rénovation",
    description:
      "Transformation et modernisation de vos espaces pour leur redonner vie et valeur.",
    icon: "renovation",
  },
  {
    title: "Génie civil",
    description:
      "Travaux d'infrastructure, voirie et aménagements adaptés à vos besoins.",
    icon: "civil",
  },
  {
    title: "Aménagement intérieur",
    description:
      "Conception et réalisation d'espaces fonctionnels, esthétiques et sur mesure.",
    icon: "interior",
  },
  {
    title: "Peinture & finitions",
    description:
      "Finitions soignées pour un rendu impeccable et durable de vos ouvrages.",
    icon: "paint",
  },
] as const;

export const projects = [
  {
    title: "Villa moderne - Bingerville",
    category: "Rénovation",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    title: "Immeuble résidentiel - ZONE 4",
    category: "Construction",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  },
  {
    title: "Rénovation maison - Yopougon",
    category: "Rénovation",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    title: "Complexe commercial - Marcory",
    category: "Génie civil",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
] as const;

export const stats = [
  { value: "100+", label: "Projets réalisés", icon: "trophy" },
  { value: "100+", label: "Clients satisfaits", icon: "users" },
  { value: "20+", label: "Experts à votre service", icon: "hardhat" },
  { value: "10+", label: "Années d'expérience", icon: "calendar" },
] as const;

export const contactInfo = [
  {
    icon: "phone",
    label: "Téléphone",
    value: "+225 07 49 31 37 25",
    href: "tel:+2250749313725",
  },
  {
    icon: "mail",
    label: "Email",
    value: "ethiquebtp@gmail.com",
    href: "mailto:contact@ethiquebtp.ci",
  },
  {
    icon: "map",
    label: "Adresse",
    value: "Abidjan, Côte d'Ivoire - Angré Terminus 81/82",
    href: "#",
  },
  {
    icon: "clock",
    label: "Horaires",
    value: "Lun - Ven : 8h - 18h",
    href: "#",
  },
] as const;

export const footerServices = [
  "Construction",
  "Rénovation",
  "Génie civil",
  "Aménagement intérieur",
  "Peinture & finitions",
] as const;

export const footerLinks = [
  "Demander un devis",
  "Politique de confidentialité",
  "Mentions légales",
] as const;
