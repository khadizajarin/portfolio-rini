import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center bg-[#F3E9DC]">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 items-center relative">

        {/* LEFT TEXT */}
        <div className="space-y-4 md:pl-6 md:relative md:z-10 md:translate-x-[100px] ">
          <h1 className="text-5xl md:text-6xl  tracking-tight font-extrabold text-neutral-800">
            Nigar Meherin Rini
          </h1>
          <p className="text-4xl text-[#9A3F3F] font-semibold">
            Journalist
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end md:relative md:z-0 md:translate-x-[-100px] ">
          <Image
            src="/images/image.png"
            alt="Portrait"
            width={1000}
            height={1000}
            className="w-full md:w-[90%] h-[80vh] object-cover shadow-md"
          />
        </div>

        {/* Bottom text */}
         <div className="space-y-4 md:pl-6 md:absolute md:z-10 md:translate-x-[900px] md:translate-y-[200px] ">
          <p className="text-3xl font-semibold text-[#9A3F3F]">
            @journalist
          </p>
        </div>

      </div>
    </section>
  );
}
