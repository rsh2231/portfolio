import { Cake, GraduationCap, House, Mail, Phone, UserRound } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 relative"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
          About
        </h2>
        <div className="mt-20">
          <div className="max-w-[800px] mx-auto p-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">

              {/* Personal Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg text-center md:text-left break-keep">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}