import { Briefcase, GraduationCap } from "lucide-react";

export default function Career() {
  return (
    <section>
      <div className="mb-10">
        <div className="flex items-center text-purple-500 space-x-4">
          <GraduationCap className="w-8 h-8" />
          <h2 className="text-3xl font-bold">Litt om meg</h2>
        </div>
        <p className="mt-2 text-gray-400">
          En kort oversikt over min utdanning og arbeidserfaring.
        </p>
      </div>

      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <GraduationCap className="w-10 h-10 text-purple-500" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">
              Bachelorgrad i Digital infrastruktur og cybersikkerhet
            </h3>
            <p className="text-gray-400">
              Fullførte en 3-årig utdanning i Digital infrastruktur og
              cybersikkerhet ved NTNU, med fokus på systemarkitektur, digital
              sikkerhet og robuste IT-løsninger.
            </p>
            <p className="text-gray-500 text-sm mt-1">2019 - 2022</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <GraduationCap className="w-10 h-10 text-purple-500" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">
              Mastergrad i Informatikk
            </h3>
            <p className="text-gray-400">
              Fullførte en 2-årig utdanning i Informatikk ved NTNU, med fokus på
              databaser, webutvikling og systemdesign.
            </p>
            <p className="text-gray-500 text-sm mt-1">2022 - 2024</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <Briefcase className="w-10 h-10 text-purple-500" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">
              Softwareutvikler hos twoday
            </h3>
            <p className="text-gray-400">
              Jobber som programvareutvikler hos konsulentselskapet twoday, med
              hovedfokus på frontend webutvikling.
            </p>
            <p className="text-gray-500 text-sm mt-1">2024 - Nå</p>
          </div>
        </div>
      </div>
    </section>
  );
}
