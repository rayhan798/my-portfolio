export const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const staggerContainerVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export const ABOUT_STATS = [
  { label: "Phone", val: "+880 1518-979553" },
  { label: "Email", val: "mdrayhan0474@gmail.com" },
  { label: "Birth", val: "25 Nov 2006" },
  { label: "From", val: "Chattogram, BD" },
];

export const BIO_DATA = {
  name: "Rayhan",
  experienceYears: "02",
  tagline: "Developing the Future,",
};
