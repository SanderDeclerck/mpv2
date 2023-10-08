import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Breadcrumb,
  BreadcrumbCurrentPage,
  BreadcrumbLinkWithIcon,
  breadcrumbIconStyle,
  breadcrumbLinkWithIconStyle,
} from "@/components/Breadcrumb";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
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
    defaultValues: { active: true, actions: [] },
  });

  console.log("errors", form.formState.errors);

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

  const pickedTrigger = form.watch("type");

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
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 max-w-xl"
        >
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <TriggerPicker
                      selectedValue={field.value}
                      onValueChange={(newType) => {
                        form.setValue("type", newType);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <AnimatePresence initial={Boolean(pickedTrigger)}>
            {pickedTrigger && (
              <motion.div
                key="modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <>
                  <FormField
                    control={form.control}
                    name="active"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md ml-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Enable trigger</FormLabel>
                          <FormDescription>
                            {field.value
                              ? "This trigger will be executed when its conditions are met."
                              : "This trigger is paused."}
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                  <div>
                    <Button className="mt-8" type="submit">
                      Create trigger
                    </Button>
                  </div>
                </>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </Form>
    </div>
  );
};
