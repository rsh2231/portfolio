"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="hero"
      className="w-full h-screen py-12 md:py-24 lg:py-32 relative"
      style={{
        backgroundImage: 'url(/images/bg1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex items-center justify-center h-full">
        <motion.div
          className="flex flex-col justify-center break-keep"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-7xl font-black mb-4 text-left"
            variants={itemVariants}
          >
            디지털 경험에
          </motion.h1>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-7xl font-black mb-8 gradient-text"
            variants={itemVariants}
          >
            생명을 불어넣다.
          </motion.h1>
          <motion.p
            className="text-left text-lg md:text-2xl"
            variants={itemVariants}
          >
            안녕하세요, 사용자 중심의 인터랙티브 웹을 만드는 프론트엔드 개발자 류상현입니다.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
