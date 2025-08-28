"use client"

import { Cake, GraduationCap, House, Mail, Phone, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const skills = [

  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 relative"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10 p-10 rounded-lg shadow-lg bg-gray-800 w-10/12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-left">
          About Me
        </h2>
        <div className="mt-20">
          <div className="mx-auto p-8">
            <div className="grid grid-cols-1 gap-8">
              {/* Intro Section */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="mb-12 text-lg text-left break-keep space-y-2 w-full"
              >
                <p>현상을 단순히 받아들이기보다 원인을 분석하고 구조를 파악하는 데 집중해 왔습니다.</p>
                <p>새로운 환경에 빠르게 적응하며, 낯선 기술도 금세 익혀 실무에 적용하는 실행력을 갖추고 있습니다.</p>
                <p>비전공자 출신이지만, AI 데이터 분석 기반 풀스택 웹 개발 과정을 통해 개발 전반을 직접 수행했고,</p>
                <p>그 경험이 웹 개발에 대한 흥미와 확신으로 이어졌습니다.</p>
                <p>기능 구현을 넘어, 사용자 관점에서 문제를 해석하고 주도적으로 개선하려는 태도를 지향합니다.</p>
                <p>작은 불편도 놓치지 않는 섬세함과 끈기를 바탕으로, 협업을 통해 함께 성장하는 개발 문화를 실천하고 있습니다.</p>
              </motion.div>


              <div className="flex flex-col gap-8">
                {/* Personal Details */}
                <h3 className="text-2xl font-bold mb-4 border-b pb-4">Introduce</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-lg text-center break-keep w-full mb-12 justify-center">
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <UserRound className="w-5 h-5 text-blue-400" /> 류상현
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <Cake className="w-5 h-5 text-blue-400" /> 1991.11.28.
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <House className="w-5 h-5 text-blue-400" /> 경상남도 김해시
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <Mail className="w-5 h-5 text-blue-400" /> rsh2231@naver.com
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <Phone className="w-5 h-5 text-blue-400" /> 010-5276-1739
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-2 text-sm">
                    <GraduationCap className="w-5 h-5 text-blue-400" /> 동의대학교대학원<br />(평생교육학과, 석사 졸업)
                  </p>
                </div>


                {/* Skills */}
                <h3 className="text-2xl font-bold mb-4 border-b pb-4">Skills</h3>
                <div className="flex flex-nowrap gap-4 justify-center overflow-x-auto">
                  {skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="bg-gray-800 rounded-lg p-4 text-center flex flex-col items-center justify-center"
                      >
                        <div className="mb-2">
                          <Icon size={20} style={{ color: skill.color }} />
                        </div>
                        <h3 className="text-lg font-bold">{skill.name}</h3>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}