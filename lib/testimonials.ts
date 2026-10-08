// Testimonianze. La prima e' mostrata in home dopo "Coaching women to think clearly";
// tutte le altre compaiono in fondo alla home. Per aggiungerne una basta aggiungere un oggetto.
export type Testimonial = { text: string[]; name: string; role: string };

export const TESTIMONIALS: Testimonial[] = [
  {
    text: [
      "Working with Liz has been a truly positive and enriching experience. She is deeply empathetic and has a wonderful way of understanding exactly what you need in order to help you reach the goals you set for yourself. She always knows how to find the right key to motivate and guide you.",
      "Our shared passion for music and cinema also made this journey of personal growth even more meaningful, creating a connection that enriched the whole experience. Last but not least, she is genuinely funny, so time with her is not only rewarding, but also enjoyable and fun.",
    ],
    name: "Luca Chiodaroli",
    role: "Partner, PwC Italy \u00b7 AI & Digital Innovation",
  },
  // TODO: aggiungere qui le altre testimonianze che Liz ha mandato via email
];
