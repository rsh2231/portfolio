export function ContactSection() {
  return (
    <section id="contact" className="py-20 scroll-reveal">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
        Contact
      </h2>
      <p className="text-center text-gray-400 mt-5 mb-12">궁금한 점이 있으시면 언제든지 연락주세요.</p>
      <form action="MAILTO:rsh2231@naver.com" method="post" encType="text/plain" className="max-w-xl mx-auto">
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">이름</label>
          <input type="text" id="name" className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="홍길동" required />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">이메일</label>
          <input type="email" id="email" className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="hello@example.com" required />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">메시지</label>
          <textarea id="message" rows={4} className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="내용을 입력하세요..." required></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="text-white bg-blue-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-lg text-sm p-3 text-center transition duration-300 cursor-pointer shadow-lg font-semibold">SEND</button>
        </div>
      </form>
    </section>
  );
}
