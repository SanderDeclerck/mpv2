import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useProfiles } from "@/domains/profiles/api/profiles.get";
import { CreateAssignedProfileTrigger } from "../../schemas";
import { MultipleAndAllPicker } from "./MultipleAndAllPicker";

export const ProfileAssignedTriggerForm = (props: {
  form: UseFormReturn<CreateAssignedProfileTrigger>;
}) => {
  const { form } = props;

  const { data: profiles, isLoading } = useProfiles();

  return (
    <FormField
      control={form.control}
      name="profiles"
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>On profile changes to</FormLabel>
            <FormControl>
              <MultipleAndAllPicker
                data={profiles ?? []}
                isLoading={isLoading}
                getKey={(item) => item.id.toString()}
                getText={(item) => item.name}
                selected={
                  field.value === "all"
                    ? field.value
                    : field.value?.map((_) => _.toString())
                }
                noValueFound="No profiles found"
                onValueChange={(selected) => {
                  form.setValue(
                    "profiles",
                    selected === "all" ? selected : selected.map((_) => +_),
                  );
                }}
                selectionPredicate={(item, selected) =>
                  selected !== "all" &&
                  Boolean(selected?.includes(item.id.toString()))
                }
                allText="Every profile change"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};
