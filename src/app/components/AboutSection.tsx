import { Cake, GraduationCap, House, Mail, Phone, UserRound } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full h-screen py-12 md:py-24 lg:py-32 relative"
      style={{
        backgroundImage: 'url(/images/bg1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-85"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col justify-center items-center break-keep">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-black text-blue-400 mb-4">디지털 경험에</h1>
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-black mb-8 gradient-text">생명을 불어넣다.</h1>
          <p className="text-center text-lg md:text-xl mt-20 max-w-2xl mx-auto">
            안녕하세요, 사용자 중심의 인터랙티브 웹을 만드는<br /> 
            프론트엔드 개발자 <strong className="text-blue-400 text-3xl">류상현</strong>입니다.</p>
        </div>
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