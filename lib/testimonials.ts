// Testimonianze.
// FEATURED: quella in evidenza in home, tra "Coaching women to think clearly" e "The experience".
// HIGHLIGHT: in nero subito dopo le credenziali.
// OTHERS: tutte le altre, nella sezione "What clients say" in fondo alla home.
export type Testimonial = { text: string[]; name: string; role: string };

export const FEATURED: Testimonial = {
  text: [
    "Her exceptional expertise in neurolinguistics has deepened my understanding of the subject matter and, above all, helped me understand my inner self. She made it happen spontaneously, leading me with great proficiency towards this great achievement.",
    "An accomplished and knowledgeable professional, as well as a wonderful person.",
  ],
  name: "Mirella Palma Bellantone",
  role: "Account Director, Accent Communication",
};

// In nero subito dopo le credenziali, in home
export const HIGHLIGHT: Testimonial = {
    text: [
      "Liz is an extremely skilled coach who knows how to bring out the best in her clients. I particularly appreciate her approach of establishing clear, shared objectives at the beginning of the journey, as well as her ability to put people at ease during sessions.",
      "She also has a remarkable ability to adapt each session to the specific needs of the moment.",
    ],
    name: "Marco Sala",
    role: "Chief of Staff",
  };

export const OTHERS: Testimonial[] = [
  {
    text: [
      "Working with Liz has been a truly positive and enriching experience. She is deeply empathetic and has a wonderful way of understanding exactly what you need in order to help you reach the goals you set for yourself. She always knows how to find the right key to motivate and guide you.",
      "Our shared passion for music and cinema also made this journey of personal growth even more meaningful, creating a connection that enriched the whole experience. Last but not least, she is genuinely funny, so time with her is not only rewarding, but also enjoyable and fun.",
    ],
    name: "Luca Chiodaroli",
    role: "Partner, PwC Italy \u00b7 AI & Digital Innovation",
  },
  {
    text: [
      "I must say that she is a \u2018super\u2019 professional, very prepared both in language teaching and in coaching. She is giving me all the support, and more, I need.",
      "I am absolutely confident in recommending Elizabeth as a teacher and as a coach.",
    ],
    name: "Carla Curone",
    role: "Head of Strategic Change Management, DHL Express Italy",
  },
  {
    text: [
      "She possesses the flexibility to adapt to different needs, agendas and pressures.",
      "She is so kind, open-minded and friendly, which makes it easy to have fun when working with her.",
    ],
    name: "Federico Papa",
    role: "Co-founder & COO, Ludwig",
  },
];