"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { useState, useTransition } from "react";
import { submitContactSchema } from "@/actions/submitContactSchema";
import { contactSchema, ContactSchemaType } from "../schemas/contact";

export default function ContactMe() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactSchemaType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const onSubmit = (values: ContactSchemaType) => {
    setError(null);
    setSuccess(null);

    startTransition(() => {
      submitContactSchema(values)
        .then((data) => {
          if (data.error) {
            setError(data.error);
          }

          if (data.success) {
            setSuccess(data.success);
            reset({
              firstName: "",
              lastName: "",
              company: "",
              email: "",
              phone: "",
              message: "",
            });
          }
        })
        .catch(() => setError("Noe gikk galt!"));
    });
  };

  return (
    <section
      id="contact-section"
      className="relative overflow-hidden rounded-2xl border border-blue-300 "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-950 opacity-30 rounded-2xl"></div>
      <div className="relative grid md:grid-cols-2 gap-8 max-w-6xl mx-auto p-4 py-10 sm:p-8 ">
        <div className="flex flex-col justify-center text-center">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-200">
            Kontakt meg
          </h2>
          <div className="flex flex-col lg:flex-row gap-2 sm:gap-4 justify-center items-center text-white text-sm">
            <div className="flex items-center">
              <Mail className="mr-2 h-5 w-5 text-blue-300" />
              <a
                href="mailto:petter.lauvrak@hotmail.com"
                className="text-gray-300 hover:underline"
              >
                petter.lauvrak@hotmail.com
              </a>
            </div>

            <div className="flex items-center">
              <Phone className="mr-2 h-5 w-5 text-blue-300" />
              <span>+47 906 36 538</span>
            </div>
          </div>
          <p className="mb-4 text-sm sm:text-base text-white pt-6">
            Jeg er alltid interessert i nye prosjekter og utfordringer. Ta
            gjerne kontakt for en uforpliktende prat om hvordan jeg kan hjelpe
            deg med å skape en flott nettside for deg eller din bedrift.
          </p>
          <p className="text-sm sm:text-base text-white">
            Fyll ut kontaktskjemaet eller kontakt meg direkte på telefon eller
            e-post!
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 sm:p-3 rounded-lg"
          noValidate
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Controller
              control={control}
              name="firstName"
              render={({ field }) => (
                <Input {...field} placeholder="Fornavn" className="w-full" />
              )}
            />
            <Controller
              control={control}
              name="lastName"
              render={({ field }) => (
                <Input {...field} placeholder="Etternavn" className="w-full" />
              )}
            />
          </div>

          <Controller
            control={control}
            name="company"
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Firma (valgfritt)"
                className="w-full"
              />
            )}
          />

          <div className="grid sm:grid-cols-2 gap-4">
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <Input
                  required
                  {...field}
                  placeholder="E-post"
                  type="email"
                  className="w-full"
                />
              )}
            />
            <Controller
              control={control}
              name="phone"
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Telefonnummer"
                  type="tel"
                  className="w-full"
                />
              )}
            />
          </div>

          <Controller
            control={control}
            name="message"
            render={({ field }) => (
              <Textarea
                {...field}
                placeholder="Din melding"
                rows={4}
                className="w-full"
              />
            )}
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}

          <Button
            disabled={isSubmitting || isPending}
            className="w-full bg-blue-300 hover:bg-blue-500 text-black"
          >
            {isSubmitting ? "Sender..." : "Send melding"}
          </Button>
        </form>
      </div>
    </section>
  );
}
