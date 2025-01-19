import { Button } from "@/components/ui/button";
import { BriefcaseBusiness, Github, SendHorizonal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-20 pl-6 md:pl-0 pr-6">
      <div className="absolute rounded-2xl inset-0 bg-gradient-to-br from-purple-950 to-blue-950 opacity-100"></div>
      <div className="relative flex flex-col-reverse md:flex-row-reverse items-center justify-between max-w-6xl mx-auto">
        <div className="md:w-2/3 mt-6 md:mt-0 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4 leading-tight text-white">
            Petter Lauvrak
          </h1>
          <p className="text-xl mb-6 text-gray-300">
            Jeg er en engasjert webutvikler som liker å lage nettsider for små
            bedrifter og foretak!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center lg:justify-start gap-4 md:gap-2">
            <Link href="#contact-section" className="w-40">
              <Button className="w-full" size="lg">
                <SendHorizonal />
                Kontakt meg
              </Button>
            </Link>

            <Link href="https://github.com/pettelau" className="w-40">
              <Button
                className="bg-black hover:text-black w-full text-white border border-white"
                size="lg"
              >
                <Github /> GitHub
              </Button>
            </Link>

            <Link
              href="https://www.linkedin.com/in/petter-lauvrak-9445b21bb/?originalSubdomain=no"
              className="w-40"
            >
              <Button
                className="bg-[#2d64bc] hover:text-black w-full text-white border border-white"
                size="lg"
              >
                <BriefcaseBusiness /> LinkedIn
              </Button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <div className="relative w-32 h-32 sm:w-48 sm:h-48 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 blur-lg opacity-70"></div>
            <Image
              src="/petter_lauvrak.jpg"
              alt="Petter Lauvrak"
              width={300}
              height={300}
              className="relative rounded-full border-0.5 border-transparent bg-gradient-to-r from-yellow-500 via-blue-500 to-yellow-500 p-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
