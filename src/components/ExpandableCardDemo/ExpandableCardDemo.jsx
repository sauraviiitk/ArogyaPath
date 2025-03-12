import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const mantras = [
  {
    title: "Om Namah Shivaya",
    description: "A powerful mantra dedicated to Lord Shiva.",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcJ2XuC4un8loZ85IBlzogAozEUaK_NhwtFw&s",
    audio: `${window.location.origin}/audio/om-namah-shivaya.mp3`, // Absolute path
  },
  {
    title: "Gayatri Mantra",
    description: "A sacred Vedic chant invoking divine wisdom.",
    src: "https://gayatrimantra.in/wp-content/uploads/2024/11/gayatri-mantra-1.webp",
    audio: `${window.location.origin}/audio/Gayatrimantra.mp3`, // Absolute path
  },
  {
    title: "Maha Mrityunjaya Mantra",
    description: "A healing mantra for protection and well-being.",
    src: "https://source.unsplash.com/200x200/?hindu-temple",
    audio: `${window.location.origin}/audio/maha-mrityunjaya.mp3`, // Absolute path
  },
  {
    title: "Hare Krishna Mantra",
    description: "A devotional chant of Lord Krishna.",
    src: "https://source.unsplash.com/200x200/?krishna",
    audio: `${window.location.origin}/audio/hare-krishna.mp3`, // Absolute path
  },
];

const Mantras = () => {
  const [active, setActive] = useState(null);
  const [playingAudio, setPlayingAudio] = useState(null);
  const audioRef = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  const handlePlayPause = (mantra) => {
    console.log("Attempting to play:", mantra.audio); // Debugging line
    if (playingAudio === mantra.audio) {
      audioRef.current.pause();
      setPlayingAudio(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(mantra.audio);
      audioRef.current.play()
        .then(() => {
          setPlayingAudio(mantra.audio);
        })
        .catch((error) => {
          console.error("Error playing audio:", error);
          alert("Error playing audio. Please check the console for details.");
        });
    }
  };

  return (
    <>
      {/* Background Overlay */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 h-full w-full z-10"
            onClick={() => setActive(null)}
          />
        )}
      </AnimatePresence>

      {/* Expanded Card */}
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-50">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              className="w-full max-w-md h-full md:h-auto md:max-h-[90%] bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 object-cover"
                />
              </motion.div>

              <div className="p-4">
                <motion.h3
                  layoutId={`title-${active.title}-${id}`}
                  className="text-xl font-bold text-gray-800"
                >
                  {active.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${active.description}-${id}`}
                  className="text-gray-600 mt-2"
                >
                  {active.description}
                </motion.p>

                <audio controls className="w-full mt-3">
                  <source src={active.audio} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>

                <motion.button
                  onClick={() => setActive(null)}
                  className="mt-4 px-4 py-2 text-sm font-bold rounded-full bg-red-500 text-white hover:bg-red-600"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mantras List (Right Aligned) */}
      <div className="flex justify-start m-10 pr-10">
        <ul className="max-w-md gap-5 w-full m-4">
          {mantras.map((mantra) => (
            <motion.div
              layoutId={`card-${mantra.title}-${id}`}
              key={`card-${mantra.title}-${id}`}
              onClick={() => setActive(mantra)}
              className="p-4 m-5 flex flex-col md:flex-row justify-between items-center hover:bg-gray-50 rounded-xl cursor-pointer shadow-md bg-white"
            >
              <motion.div layoutId={`image-${mantra.title}-${id}`}>
                <img
                  src={mantra.src}
                  alt={mantra.title}
                  className="h-16 w-16 md:h-14 md:w-14 rounded-lg object-cover"
                />
              </motion.div>
              <div>
                <motion.h3
                  layoutId={`title-${mantra.title}-${id}`}
                  className="font-medium text-gray-800 text-center md:text-left"
                >
                  {mantra.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${mantra.description}-${id}`}
                  className="text-gray-600 text-center md:text-left text-sm"
                >
                  {mantra.description}
                </motion.p>
              </div>
              <motion.button
                layoutId={`button-${mantra.title}-${id}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handlePlayPause(mantra);
                }}
                className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
              >
                {playingAudio === mantra.audio ? "Pause" : "Play"}
              </motion.button>
            </motion.div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Mantras;