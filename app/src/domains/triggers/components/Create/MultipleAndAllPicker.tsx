import { produce } from "immer";
import { Check, ChevronsUpDown } from "lucide-react";
import React from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command";
import { FormControl } from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/~button";
import { cn } from "@/lib/utils";

type Selected = string[] | "all" | undefined;

interface MultipleAndAllPickerProps<T> {
  data: T[];
  getText: (item: T) => string;
  getKey: (item: T) => string;
  selected: Selected;
  onValueChange: (selected: Selected) => void;
  selectionPredicate: (item: T, selected: Selected) => boolean;
  placeholder?: string;
  searchPlaceholder?: string;
  noValueFound?: string;
  allText?: string;
}

export const MultipleAndAllPicker = <T,>(
  props: MultipleAndAllPickerProps<T>,
) => {
  const {
    data,
    selected,
    onValueChange,
    getText,
    selectionPredicate,
    placeholder,
    searchPlaceholder,
    noValueFound,
    allText,
    getKey,
  } = props;
  const [open, setOpen] = React.useState(false);

  const allSelected = selected === "all";
  const hasSelection = allSelected || (selected || []).length > 0;

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
            {allSelected
              ? allText ?? "All"
              : hasSelection
              ? data
                  .filter((_) => selectionPredicate(_, selected))
                  .map(getText)
                  .join(", ")
              : placeholder ?? "Select..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width]  p-0">
        <Command>
          <CommandInput placeholder={searchPlaceholder} />
          <CommandEmpty>
            {noValueFound ?? `Nothing found for 'TODO'`}
          </CommandEmpty>
          <CommandGroup>
            <CommandItem
              onSelect={() => {
                onValueChange("all");
                setOpen(false);
              }}
            >
              <Check
                className={cn(
                  "mr-2 h-4 w-4",
                  selected === "all" ? "opacity-100" : "opacity-0",
                )}
              />
              {allText ?? "All"}
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup>
            {data.map((item) => {
              const key = getKey(item);
              return (
                <CommandItem
                  key={key}
                  onSelect={() => {
                    const newSelected = produce(selected, (draft) => {
                      if (draft === "all" || !draft) {
                        return [key];
                      }

                      const wasSelected = selectionPredicate(item, selected);
                      if (wasSelected) {
                        return draft.filter((_) => _ !== key);
                      } else {
                        draft.push(key);
                      }
                    });

                    onValueChange(newSelected);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectionPredicate(item, selected)
                        ? "opacity-100"
                        : "opacity-0",
                    )}
                  />
                  {getText(item)}
                </CommandItem>
              );
            })}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
