import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CreateStatusChangeTrigger, visitorStatusMap } from "../../schemas";
import { MultipleAndAllPicker } from "./MultipleAndAllPicker";

export const StatusChangeTriggerForm = (props: {
  form: UseFormReturn<CreateStatusChangeTrigger>;
}) => {
  const { form } = props;

  return (
    <FormField
      control={form.control}
      name="status"
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>On status changes to</FormLabel>
            <FormControl>
              <MultipleAndAllPicker
                data={visitorStatusMap}
                getKey={(item) => item}
                getText={(item) => item}
                selected={field.value}
                onValueChange={(selected) => {
                  console.log("selected", selected);
                  form.setValue("status", selected as typeof field.value);
                }}
                selectionPredicate={(item, selected) =>
                  selected !== "all" && Boolean(selected?.includes(item))
                }
                allText="Every status change"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};
