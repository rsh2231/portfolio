import { Cake, GraduationCap, House, Mail, Phone, UserRound } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full h-screen py-12 md:py-24 lg:py-32 relative"
      style={{
                backgroundImage: `url(/portfolio/images/bg2.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex items-center justify-center h-full">
        <div className="flex flex-col justify-center break-keep">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-black mb-4 text-left">디지털 경험에</h1>
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-black mb-8 gradient-text">생명을 불어넣다.</h1>
          <p className="text-left text-lg md:text-2xl">
            안녕하세요, 사용자 중심의 인터랙티브 웹을 만드는 프론트엔드 개발자 류상현입니다.</p>
        </div>
      </div>
    </section>
  );
}