import * as React from "react";
import { Check, ChevronsUpDown, Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useProfiles } from "./api/profiles.get.api";

export const ProfilePicker = React.forwardRef(() => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<number>();

  // console.log("props", props);

  const { data: profiles, isLoading } = useProfiles();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button disabled={isLoading} variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
          {value && profiles ? profiles.find((_) => _.id === value)?.name : "Select profile..."}
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] max-w-[100vw] p-0">
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
            {profiles?.map((profile) => (
              <CommandItem
                key={profile.id}
                onSelect={() => {
                  setValue(profile.id);
                  setOpen(false);
                }}
              >
                <Check className={cn("mr-2 h-4 w-4", value === profile.id ? "opacity-100" : "opacity-0")} />
                {profile.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
});
