import { Cake, GraduationCap, House, Mail, Phone, UserRound } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
          About Me
        </h2>
        <div className="flex justify-center items-center">
          <p className="mx-auto text-gray-300 text-center mt-4 break-keep">
            현상을 단순히 받아들이기보다 원인을 분석하고 구조를 파악하는 데 집중해 왔습니다.<br/>
            새로운 환경에 빠르게 적응하며, 낯선 기술도 금세 익혀 실무에 적용하는 실행력을 갖추고 있습니다.<br/>
            비전공자 출신이지만, AI 데이터 분석 기반 풀스택 웹 개발 과정을 통해 개발 전반을 직접 수행했고,<br/>
            그 경험이 웹 개발에 대한 흥미와 확신으로 이어졌습니다.<br/>
            기능 구현을 넘어, 사용자 관점에서 문제를 해석하고 주도적으로 개선하려는 태도를 지향합니다.<br/>
            작은 불편도 놓치지 않는 섬세함과 끈기를 바탕으로, 협업을 통해 함께 성장하는 개발 문화를 실천하고 있습니다.
          </p>
        </div>
        <div className="mt-12">
          <div className="max-w-[800px] mx-auto bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-700">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {/* Image Section */}
              <div className="flex-shrink-0">
                <Image
                  className="rounded-full object-cover"
                  src="/images/image01.png"
                  alt="Profile Image"
                  width={200}
                  height={200}
                />
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-center md:text-left break-keep">
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
                <p className="flex items-center justify-center md:justify-start gap-2 text-sm">
                  <GraduationCap className="w-5 h-5 text-blue-400" /> 동의대학교대학원<br />(평생교육학과, 석사 졸업)
                </p>
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <Phone className="w-5 h-5 text-blue-400" /> 010-5276-1739
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}