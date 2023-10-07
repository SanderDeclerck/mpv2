import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Breadcrumb,
  BreadcrumbCurrentPage,
  BreadcrumbLinkWithIcon,
  breadcrumbIconStyle,
  breadcrumbLinkWithIconStyle,
} from "@/components/Breadcrumb";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/~button";
import { cn } from "@/lib/utils";
import { CreateTriggerSchema } from "../../api/createTrigger.post";
import { TriggerIcon } from "../TriggerIcon";
import { TriggerPicker } from "./TriggerPicker";

export const TriggerCreate = () => {
  const form = useForm<z.infer<typeof CreateTriggerSchema>>({
    resolver: zodResolver(CreateTriggerSchema),
  });

  function onSubmit(data: z.infer<typeof CreateTriggerSchema>) {
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
      <h1 className="mb-10">Create a trigger</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <TriggerPicker
                    key={field.value}
                    onValueChange={(newType) => form.setValue("type", newType)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="mt-24" type="submit">
            Create trigger
          </Button>
        </form>
      </Form>
    </div>
  );
};
