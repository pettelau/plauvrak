import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(1, "Fornavn er påkrevd."),
  lastName: z.string().min(1, "Etternavn er påkrevd."),
  company: z.string().optional(),
  email: z.string().email("Ugyldig e-postadresse."),
  phone: z.string().optional(),
  message: z.string().min(1, "Melding er påkrevd."),
});

export type ContactSchemaType = z.infer<typeof contactSchema>;
