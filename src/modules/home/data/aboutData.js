
export const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export const staggerContainerVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export const ABOUT_STATS = [
  { label: "Phone", val: "+880 1234 567 890" },
  { label: "Email", val: "rayhan@techq.com" },
  { label: "Birth", val: "15 Oct 2000" },
  { label: "From", val: "Chattogram, BD" }
];


export const BIO_DATA = {
  name: "Md. Rayhan",
  experienceYears: "02",
  tagline: "Developing the Future,"
};