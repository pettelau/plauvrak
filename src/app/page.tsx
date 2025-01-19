// import Header from "@/components/header";
// import Projects from "@/components/projects";
// import Contact from "@/components/contact";

import Career from "./components/career";
import ContactMe from "./components/contact-me";
import Hero from "./components/hero";
import Services from "./components/services";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="container mx-auto px-6 sm:px-4 py-8 space-y-14">
        <Hero />
        <Services />
        <Career />
        <ContactMe />
      </main>
    </div>
  );
}
