"use client";

import { Presentation } from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiSwagger,
  SiJavascript,
  SiGit,
  SiGithub,
  SiYoutube,
  SiFastapi,
} from "react-icons/si";
import { useState } from "react";
import { Modal } from "./Modal";

const project = {
  title: "해기사 시험 대비 지능형 QA 튜터 서비스",
  description:
    "AI 데이터 분석 기반의 풀스택 프로젝트로, 해기사 시험 준비생을 위한 개인 맞춤형 학습 플랫폼입니다. 프론트엔드 개발을 주도하며 사용자 경험(UX)과 개발 경험(DX)을 동시에 혁신하는 데 기여했습니다.",
  role: "Frontend Lead & UX/DX Innovator",
  features: [
    "Gemini API와 RAG를 활용한 멀티모달 AI 챗봇",
    "Chart.js 기반 학습 데이터 시각화 대시보드",
    "Intersection Observer를 이용한 지연 로딩으로 성능 최적화",
    "Swagger를 통한 API 문서화 및 체계적인 협업 프로세스 정립",
  ],
  techStack: [
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "FastAPI", icon: SiFastapi, color: "#009688" },
    { name: "Swagger", icon: SiSwagger, color: "#85EA2D" },
    { name: "Git", icon: SiGit, color: "#F05032" },
  ],
  githubUrl: "https://github.com/rsh2231/MarinAI",
  demoUrl: "your-demo-video-link", // 여기에 시연 영상 링크를 추가하세요.
  modalImages: [
    {
      src: "/images/main-screen-1.png",
      alt: "AI 챗봇 인터페이스",
      description: "텍스트와 이미지를 모두 지원하는 멀티모달 AI 챗봇 화면입니다.",
    },
    {
      src: "/images/main-screen-2.png",
      alt: "기출문제 풀이 화면",
      description: "실제 시험과 유사한 환경에서 기출문제를 풀어볼 수 있습니다.",
    },
  ],
};

export function ProjectsSection() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="projects" className="w-full py-12 md:py-24 lg:py-32 break-keep">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Projects
          </h2>

          {/* Project Card */}
          <div className="mx-auto max-w-4xl bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8">

              {/* Project Title */}
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">{project.title}</h3>

              {/* Project Details */}
              <p className="text-gray-400 mb-6">{project.description}</p>

              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-white mb-2">
                    담당 역할: <span className="font-normal text-gray-300">{project.role}</span>
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-white mb-3">주요 기능:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-white mb-3">기술 스택:</p>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech) => (
                      <div key={tech.name} className="flex items-center gap-2 bg-gray-700 px-3 py-1 rounded-full">
                        <tech.icon style={{ color: tech.color }} className="w-5 h-5" />
                        <span className="text-sm">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  <SiGithub className="w-5 h-5" />
                  GitHub
                </a>
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  <Presentation className="w-5 h-5" />
                  주요 화면 보기
                </button>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  <SiYoutube className="w-5 h-5" />
                  시연 영상
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        items={project.modalImages}
      />
    </>
  );
}