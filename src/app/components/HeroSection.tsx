export function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full h-screen relative overflow-hidden"
      style={{
        backgroundImage: 'url(/images/bg1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/70 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10 flex items-center justify-center h-full">
        <div className="max-w-4xl text-left">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-2 md:mb-4 text-white [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]">
              디지털 경험에
            </h1>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-8 gradient-text [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)]"
              style={{ animationDelay: '200ms' }}
            >
              생명을 불어넣다.
            </h1>
          </div>
          <p 
            className="text-base md:text-xl text-gray-200 leading-relaxed [text-shadow:1px_1px_2px_rgba(0,0,0,0.5)] animate-fade-in-up"
            style={{ animationDelay: '400ms' }}
          >
            안녕하세요, 사용자 중심의 인터랙티브 웹을 만드는 프론트엔드 개발자 류상현입니다.
          </p>
          <div 
            className="mt-8 md:mt-12 animate-fade-in-up"
            style={{ animationDelay: '600ms' }}
          >
            <a
              href="#projects"
              className="inline-block bg-white text-black font-bold py-2 px-6 text-base md:py-3 md:px-8 md:text-lg rounded-full hover:bg-gray-200 transition-colors duration-300"
            >
              프로젝트 보러가기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}