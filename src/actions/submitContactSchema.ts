"use server";

import { z } from "zod";
import sgMail from "@sendgrid/mail";
import { contactSchema } from "@/app/schemas/contact";

export const submitContactSchema = async (
  data: z.infer<typeof contactSchema>
) => {
  const isValidPayload = contactSchema.safeParse(data);

  if (!isValidPayload.success) {
    console.log(isValidPayload.error.errors[0].message);
    return { error: isValidPayload.error.errors[0].message };
  }

  if (!process.env.SENDGRID_API_KEY) {
    return { error: "Internal server error - missing api key" };
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: "petter.lauvrak@gmail.com",
    from: "petter.lauvrak@hotmail.com",
    subject: "Nytt kontaktskjema Personal Web page",
    text: `Nytt kontaktskjema fra:
      
      Fornavn: ${data.firstName}
      Etternavn: ${data.lastName}
      Firma: ${data.company || "Ikke oppgitt"}
      E-post: ${data.email}
      Telefon: ${data.phone || "Ikke oppgitt"}
      Melding:
      ${data.message}
    `,
    html: `
      <h2>Nytt kontaktskjema fra Personal Web page</h2>
      <p><strong>Fornavn:</strong> ${data.firstName}</p>
      <p><strong>Etternavn:</strong> ${data.lastName}</p>
      <p><strong>Firma:</strong> ${data.company || "Ikke oppgitt"}</p>
      <p><strong>E-post:</strong> <a href="mailto:${data.email}">${
      data.email
    }</a></p>
      <p><strong>Telefon:</strong> ${data.phone}</p>
      <p><strong>Melding:</strong></p>
      <blockquote style="background: #f9f9f9; padding: 10px; border-left: 3px solid #ccc;">
        ${data.message}
      </blockquote>
    `,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
    return { error: "Internal server error - could not send email" };
  }

  return { success: "Skjemaet ble sendt inn!" };
};
