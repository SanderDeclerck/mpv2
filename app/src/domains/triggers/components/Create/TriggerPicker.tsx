import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { FormControl } from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/~button";
import { cn } from "@/lib/utils";
import { TriggerType, triggerTypeMap } from "../../schemas";

interface TriggerPickerProps {
  key: TriggerType;
  onValueChange: (triggerType: TriggerType) => void;
}

const triggerTypes = Object.keys(triggerTypeMap) as TriggerType[];

export const TriggerPicker = React.forwardRef(
  ({ key, onValueChange }: TriggerPickerProps, _ref) => {
    const [open, setOpen] = React.useState(false);

    const hasSelection = key !== undefined;

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between"
            >
              {hasSelection ? triggerTypeMap[key] : "Choose a trigger ..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-[--radix-popover-trigger-width]  p-0">
          <Command>
            <CommandInput placeholder="Search trigger..." />
            <CommandEmpty>No trigger found.</CommandEmpty>
            <CommandGroup>
              {triggerTypes?.map((trigger) => (
                <CommandItem
                  key={trigger}
                  onSelect={() => {
                    onValueChange(trigger);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      key === trigger ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {triggerTypeMap[trigger]}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    );
  },
);
