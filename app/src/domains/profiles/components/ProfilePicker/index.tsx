import * as React from "react";
import { Check, ChevronsUpDown, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useProfiles } from "./api/profiles.get.api";
import { FormControl } from "@/components/ui/form";

interface ProfilePickerProps {
  profileId: number | undefined;
  onValueChange: (profileId: number) => void;
}

export const ProfilePicker = React.forwardRef(({ profileId, onValueChange }: ProfilePickerProps, _ref) => {
  const [open, setOpen] = React.useState(false);

  const hasSelection = profileId !== undefined;

  const { data: profiles, isLoading } = useProfiles();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            disabled={isLoading}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {hasSelection && profiles ? profiles.find((_) => _.id === profileId)?.name : "Select profile..."}
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            )}
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width]  p-0">
        <Command>
          <CommandInput placeholder="Search profile..." />
          <CommandEmpty>
            No profile found.
            <br />
            <Button className="mt-2 " variant="ghost">
              Create new profile
            </Button>
          </CommandEmpty>
          <CommandGroup>
            {profiles?.map(({ id, name }) => (
              <CommandItem
                key={id}
                onSelect={() => {
                  onValueChange(id);
                  setOpen(false);
                }}
              >
                <Check className={cn("mr-2 h-4 w-4", profileId === id ? "opacity-100" : "opacity-0")} />
                {name}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
});
