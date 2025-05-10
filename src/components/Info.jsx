import { motion } from "framer-motion";
import landingImg from "../assets/landingpage.jpg";
import industryImg from "../assets/manchester-industry.jpg";
import musicImg from "../assets/manchester-music.jpg";
import footballImg from "../assets/manchester-football.jpg";
import scienceImg from "../assets/manchester-science.jpg";
import peopleImg from "../assets/manchester-people.jpg";

const sections = [
  {
    title: "Birthplace of the Industrial Revolution",
    img: industryImg,
    text: "Manchester revolutionised the world in the 18th century. From cotton mills to railways, it was the engine of global change and one of the world’s first industrialised cities.",
  },
  {
    title: "City of Music",
    img: musicImg,
    text: "From The Smiths to Oasis and New Order, Manchester's musical legacy is iconic. Its clubs, venues, and underground scene continue to shape world culture.",
  },
  {
    title: "Home of Champions",
    img: footballImg,
    text: "Manchester United and Manchester City are not just football teams—they're global symbols. Football in Manchester is heritage, rivalry, and worldwide pride.",
  },
  {
    title: "City of Innovation",
    img: scienceImg,
    text: "Manchester is where the atom was split and graphene was discovered. It’s a hub of science, technology, and radical thinking from past to present.",
  },
  {
    title: "A Cultural Melting Pot",
    img: peopleImg,
    text: "From Chinatown to Curry Mile, Manchester is one of the UK’s most diverse cities. It celebrates identity, expression, and multicultural unity.",
  },
  {
    title: "Pioneering Spirit",
    img: industryImg,
    text: "Votes for women, workers' rights, free libraries—Manchester has always led movements for change. It's a city that empowers the people.",
  },
];

export default function Info() {
  return (
    <div
      className="min-h-screen bg-cover bg-center px-6 pt-40 pb-24 relative"
      style={{ backgroundImage: `url(${landingImg})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 max-w-6xl mx-auto text-white space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Discover Manchester
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            A powerhouse of ideas, culture, and history — Manchester is more than a city, it’s a movement that changed the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {sections.map((sec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden shadow-xl backdrop-blur"
            >
              <img src={sec.img} alt={sec.title} className="w-full h-52 object-cover" />
              <div className="p-6 space-y-3">
                <h2 className="text-2xl font-bold">{sec.title}</h2>
                <p className="text-gray-300 text-sm leading-relaxed">{sec.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
