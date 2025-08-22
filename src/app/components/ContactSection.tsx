export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Contact Me
        </h2>
        <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
          Feel free to reach out to me at <a href="mailto:rsh2231@naver.com" className="underline">rsh2231@naver.com</a>
        </p>
      </div>
    </section>
  );
}
