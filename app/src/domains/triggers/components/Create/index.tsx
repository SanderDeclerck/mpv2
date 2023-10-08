import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { UseFormReturn, useForm } from "react-hook-form";
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
import { useCreateTrigger } from "../../api/createTrigger.post";
import {
  CreateAssignedProfileTrigger,
  CreateStatusChangeTrigger,
  CreateTrigger,
} from "../../schemas";
import { TriggerIcon } from "../TriggerIcon";
import { ProfileAssignedTriggerForm } from "./ProfileChangeTriggerForm";
import { StatusChangeTriggerForm } from "./StatusChangeTriggerForm";
import { TriggerPicker } from "./TriggerPicker";

export const TriggerCreate = () => {
  const form = useForm<CreateTrigger>({
    resolver: zodResolver(CreateTrigger),
    defaultValues: { active: true, actions: [] },
  });

  const { mutateAsync, isLoading } = useCreateTrigger();

  async function onSubmit(data: z.infer<typeof CreateTrigger>) {
    await mutateAsync(data);
    toast({
      title: "Trigger created",
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
          <AnimatePresence initial={false}>
            {pickedTrigger && (
              <motion.div
                key="trigger-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8"
              >
                {pickedTrigger === "StatusChange" ? (
                  <StatusChangeTriggerForm
                    form={form as UseFormReturn<CreateStatusChangeTrigger>}
                  />
                ) : pickedTrigger === "AssignedProfile" ? (
                  <ProfileAssignedTriggerForm
                    form={form as UseFormReturn<CreateAssignedProfileTrigger>}
                  />
                ) : (
                  <div>Todo implementation for {pickedTrigger}</div>
                )}
                <FormField
                  control={form.control}
                  name="active"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md">
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
                  <Button disabled={isLoading} className="mt-2" type="submit">
                    Create trigger
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </Form>
    </div>
  );
};
