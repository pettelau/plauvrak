import { Card, CardContent } from "@/components/ui/card";
import { Code, Layout, Cpu, Wrench, CheckCircle } from "lucide-react";

const services = [
  {
    title: "Skreddersydde nettsider",
    description: "Innholdsrike nettsider tilpasset din bedrifts behov",
    icon: Code,
  },
  {
    title: "Responsivt webdesign",
    description: "Nettsider som ser flotte ut på alle enheter",
    icon: Layout,
  },
  {
    title: "Moderne webteknologi",
    description:
      "Kostnadseffektive og raske nettsider med moderne webteknologi",
    icon: Cpu,
  },
  {
    title: "Vedlikehold og support",
    description: "Kontinuerlig støtte og oppdateringer for din nettside",
    icon: Wrench,
  },
];

export default function Services() {
  return (
    <section>
      <div className="flex items-center mb-8  text-purple-500 space-x-4">
        <CheckCircle className="w-8 h-8" />
        <h2 className="text-3xl font-bold">Hva jeg kan tilby</h2>
      </div>
      <div className="grid gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <Card
            key={index}
            className="bg-gradient-to-br from-purple-950 to-blue-950 opacity-100"
          >
            <CardContent className="p-6 flex flex-col items-center text-center">
              <service.icon className="w-12 h-12 mb-4 text-purple-500" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-200 text-sm">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
