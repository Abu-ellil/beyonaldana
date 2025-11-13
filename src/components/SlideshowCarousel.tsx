'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const images = [
  '/slides/1D7A1495-Enhanced-NR.jpg.webp',
  '/slides/20230124_205142_ALDANA_WATN_MENNO_2048px.jpg.webp',
  '/slides/20230509-210519-ALDANA-BACKSTREETBOYS-WATN-SIL-0005-HR-bewerkt.jpg.webp',
  '/slides/221208_214539_JulienDuval_2M5A7827-LR.jpg.webp',
  '/slides/230121_000739_JulienDuval_IMG_2098-LR-e1677071587302.jpg.webp',
  '/slides/230202_213445_rutger_R3A_9711.jpg.webp',
  '/slides/250214-223442-ALDANA-ANDRERIEU-RUTGER-R1A_6483-LR.jpg',
  '/slides/AR-1.jpg.webp',
  '/slides/DSC0988.jpg.webp',
  '/slides/JH-1.jpg.webp',
  '/slides/Maz-Jobrani-3.jpg.webp',
  '/slides/MM-5.jpg.webp',
  '/slides/Mo-2.jpg.webp',
  '/slides/NS-1-e1671143149484.jpg.webp',
];

export default function SlideshowCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="h-screen relative overflow-hidden mt-22">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
      <button
        onClick={goToPrev}
        className="absolute w-10 left-4 border border-white top-1/2 text-white font-bold rounded-full text-4xl flex items-center justify-center"
        aria-label="Previous image"
      >
        <MdChevronLeft />
      </button>
      <button
        onClick={goToNext}
        className="absolute w-10 right-4 border border-white top-1/2 text-white font-bold rounded-full text-4xl flex items-center justify-center"
        aria-label="Next image"
      >
        <MdChevronRight />
      </button>
    </div>
  );
}