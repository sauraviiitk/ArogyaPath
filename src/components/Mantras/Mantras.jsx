import React, { useRef } from "react";
import { motion } from "framer-motion";

const mantras = [
  {
    title: "Om Namah Shivaya",
    description: "A powerful mantra dedicated to Lord Shiva.",
    src: "https://source.unsplash.com/200x200/?shiva",
    audio: "/audio/OmNamahShivaya.mp3",
  },
  {
    title: "Gayatri Mantra",
    description: "A sacred Vedic chant invoking divine wisdom.",
    src: "https://source.unsplash.com/200x200/?meditation",
    audio: "/audio/Gayatrimantra.mp3",
  },
  {
    title: "Maha Mrityunjaya Mantra",
    description: "A healing mantra for protection and well-being.",
    src: "https://source.unsplash.com/200x200/?hindu-temple",
    audio: "/audio/MahaMrityunjaya.mp3",
  },
  {
    title: "Hare Krishna Mantra",
    description: "A devotional chant of Lord Krishna.",
    src: "https://source.unsplash.com/200x200/?krishna",
    audio: "/audio/HareKrishna.mp3",
  },
];

const Mantras = () => {
  const audioRefs = useRef({}); // Store multiple audio refs

  const playAudio = (index) => {
    // Pause all other audios before playing the new one
    Object.values(audioRefs.current).forEach((audio) => audio.pause());
    audioRefs.current[index].play();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-gray-800 mb-6"
      >
        Mantras Playlist 🎶
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-4xl">
        {mantras.map((mantra, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex items-center space-x-4 p-4 cursor-pointer"
          >
            <img
              src={mantra.src}
              alt={mantra.title}
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-900">{mantra.title}</h2>
              <p className="text-gray-600 text-sm">{mantra.description}</p>
            </div>

            {/* Custom Play Button */}
            <button
              onClick={() => playAudio(index)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              ▶ Play
            </button>

            {/* Hidden Audio Element */}
            <audio ref={(el) => (audioRefs.current[index] = el)} preload="auto">
              <source src={mantra.audio} type="audio/mpeg" />
            </audio>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Mantras;
