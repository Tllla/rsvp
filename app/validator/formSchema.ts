import { z } from "zod";

export const formSchema = z.object({
  attendance: z.enum([
    "Accepts, with pleasure",
    "Decline with regrets",
  ] as const),
  username: z.string().min(3, { message: "Invalid username" }),
  email: z.string().email({ message: "Invalid email address" }),
  number_of_adults: z.string().min(1, {message: "Number of adults ?"}),
  number_of_childrens: z.string().min(1, {message: "Number of childrens?"} ),
  
  messages_to_groom: z.string().min(2, {message: "Message to couples?"}).max(150),
});
