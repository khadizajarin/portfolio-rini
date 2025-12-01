import Image from "next/image";
import { Inter, Vollkorn } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['400','600','700'] })
const vollkorn = Vollkorn({ subsets: ['latin'], weight: ['400','600','700'] })

export default function HeroSection() {
  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center bg-[#F3E9DC]">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center relative">

        {/* LEFT TEXT */}
        <div className="space-y-2 md:relative md:z-10"
             style={{ transform: 'translateX(6rem) translateY(-7rem)' }}>
          <h1 className={`${vollkorn.className} text-8xl md:text-7xl tracking-tight font-extrabold text-neutral-600`}>
            Nigar Meherin Rini
          </h1>
          <p className="text-4xl text-[#9A3F3F] font-semibold">
            Journalist
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end md:relative md:z-0"
             style={{ transform: 'translateX(-6.25rem)' }}>
          <Image
            src="/images/image.png"
            alt="Portrait"
            width={1000}
            height={1000}
            className="w-full md:w-[90%] h-[80vh] object-cover shadow-md"
          />
        </div>

        {/* Bottom text */}
        <div className="space-y-4 md:absolute md:z-10"
             style={{ transform: 'translate(70rem, 13.75rem)' }}>
          <p className="text-3xl font-semibold text-[#9A3F3F]">
            @journalist
          </p>
        </div>

      </div>
    </section>
  );
}
