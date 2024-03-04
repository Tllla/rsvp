'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast"


import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Checkbox } from "@/components/ui/checkbox";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { formSchema } from "@/app/validator/formSchema";

type Input = z.infer<typeof formSchema>;

const LandingPage = () => {
  const form = useForm<Input>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      attendance: "Accepts, with pleasure",
      username: "",
      email: "",
      number_of_adults: "",
      number_of_childrens: "",
      messages_to_groom: "",
    },
  });
  
  // Define the type of Input here:
  type Input = z.infer<typeof formSchema>;

  const { toast } = useToast()

  const onSubmit = async (data:Input) => {
   
   
    console.log("Submitted data:", data);
  
    try {
     
      toast({
        title: "Form Submitted!",
        description: "Your RSVP has been received.",
  
      });
  
      form.reset(); // Reset form to default values
    } catch (error) {
      // Handle errors appropriately
      toast({
        title: "Form Submission Failed!",
        description: "An error occurred. Please try again later.",
      });
    }
  };
  

  return (
    <div className="pt-10">
      <Card className={cn("w-[380px] md:w-[500px]")}>
        <CardHeader className="flex items-center">
          <CardTitle className="text-4xl">RSVP</CardTitle>
          <CardDescription className="flex flex-col items-center">
            Will You Attend Our Wedding? Please let us know whether or not you
            can make it to our wedding.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="attendance"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel className="text-base">Attendance</FormLabel>
                      <FormDescription>
                        Please select your attendance preference.
                      </FormDescription>
                    </div>
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={form.watch("attendance") === "Accepts, with pleasure"}
                          onCheckedChange={(checked) =>
                            form.setValue(
                              "attendance",
                              checked ? "Accepts, with pleasure" : "Decline with regrets"
                            )
                          }
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-normal">Accepts, with pleasure</FormLabel>
                      <FormControl>
                        <Checkbox
                          checked={form.watch("attendance") === "Decline with regrets"}
                          onCheckedChange={(checked) =>
                            form.setValue(
                              "attendance",
                              checked ? "Decline with regrets" : "Accepts, with pleasure"
                            )
                          }
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-normal">Decline with regrets</FormLabel>
                    </FormItem>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Your Full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Your Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                 )}
                 />
                
              <FormField
                control={form.control}
                name="number_of_adults"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Adults:</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value || undefined}
                      disabled={form.watch("attendance") === "Decline with regrets"}
                    >
                      <FormControl>
                      <SelectTrigger>
                    <SelectValue placeholder="Select number of Adults" />
                  </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                          
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="5">5</SelectItem>
                        <SelectItem value="more">More</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="number_of_childrens"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Childrens:</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value || undefined}
                      disabled={form.watch("attendance") === "Decline with regrets"}
                    >
                      <FormControl>
                      <SelectTrigger>
                    <SelectValue placeholder="Select number of childrens" />
                  </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="5">5</SelectItem>
                        <SelectItem value="more">More</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="messages_to_groom"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message to Couples</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Write your message here"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormItem className="flex justify-center">
                <Button type="submit">Submit</Button>
              </FormItem>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LandingPage;
