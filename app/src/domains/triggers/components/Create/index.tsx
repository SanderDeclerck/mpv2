import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import { Form, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Breadcrumb,
  BreadcrumbCurrentPage,
  BreadcrumbLinkWithIcon,
  breadcrumbIconStyle,
  breadcrumbLinkWithIconStyle,
} from "@/components/Breadcrumb";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/~button";
import { ProfilePicker } from "@/domains/profiles/components/ProfilePicker";
import { cn } from "@/lib/utils";
import { CreateTriggerSchema } from "../../api/createTrigger.post";
import { TriggerIcon } from "../TriggerIcon";

export const TriggerCreate = () => {
  const form = useForm<z.infer<typeof CreateTriggerSchema>>({
    resolver: zodResolver(CreateTriggerSchema),
  });

  function onSubmit(data: z.infer<typeof CreateTriggerSchema>) {
    console.log("toasting", data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="">
      <Breadcrumb>
        <BreadcrumbLinkWithIcon>
          <Link to="/triggers" className={cn(breadcrumbLinkWithIconStyle())}>
            <TriggerIcon className={cn(breadcrumbIconStyle())} />
            Triggers
          </Link>
        </BreadcrumbLinkWithIcon>
        <BreadcrumbCurrentPage>Create a trigger</BreadcrumbCurrentPage>
      </Breadcrumb>
      <h1>Create a trigger</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="profileId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profile</FormLabel>
                <FormControl>
                  <ProfilePicker
                    profileId={field.value}
                    onValueChange={(profileId) =>
                      form.setValue("profileId", profileId)
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Create</Button>
        </form>
      </Form>
    </div>
  );
};
