import { produce } from "immer";
import { Check, ChevronsUpDown, Loader2Icon } from "lucide-react";
import React, { useLayoutEffect, useRef } from "react";
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
  onValueChange: (selected: NonNullable<Selected>) => void;
  selectionPredicate: (item: T, selected: Selected) => boolean;
  placeholder?: string;
  searchPlaceholder?: string;
  noValueFound?: string;
  allText?: string;
  itemCountText?: (count: number) => string;
  isLoading?: boolean;
  allDisabled?: boolean;
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
    isLoading,
    itemCountText,
    allDisabled,
  } = props;
  const [open, setOpen] = React.useState(false);

  const allSelected = selected === "all";
  const hasSelection = allSelected || (selected || []).length > 0;

  const [isOverflowing, setIsOverflowing] = React.useState(false);
  const textRef = useRef<HTMLSpanElement>(null);
  useLayoutEffect(() => {
    setIsOverflowing(
      Boolean(
        textRef.current &&
          textRef.current.scrollWidth > textRef.current.offsetWidth,
      ),
    );
  }, [selected]);

  console.log(
    "scroll",
    textRef.current,
    textRef.current?.scrollWidth,
    textRef.current?.clientWidth,
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant="outline"
            disabled={isLoading}
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            <div className="w-full flex text-left  truncate">
              <span
                className={cn(
                  "truncate absolute",
                  isOverflowing ? "visible" : "invisible",
                )}
              >
                {selected !== "all"
                  ? itemCountText
                    ? itemCountText(selected?.length ?? 0)
                    : selected?.length + " selected"
                  : ""}
              </span>
              <span
                ref={textRef}
                className={cn(
                  "truncate",
                  isOverflowing ? "invisible" : "visible",
                )}
              >
                {allSelected
                  ? allText ?? "All"
                  : hasSelection
                  ? data
                      .filter((_) => selectionPredicate(_, selected))
                      .map(getText)
                      .join(", ")
                  : placeholder ?? "Select..."}
              </span>
            </div>
            {isLoading ? (
              <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            )}
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
        <Command className="max-h-[calc(var(--radix-popover-content-available-height)-20px)]">
          <CommandInput placeholder={searchPlaceholder ?? "Search..."} />
          <CommandEmpty>{noValueFound ?? `No results found.`}</CommandEmpty>
          {allDisabled ? null : (
            <>
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
            </>
          )}
          <CommandGroup className="overflow-y-auto shrink">
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
                    }) as NonNullable<Selected>;

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
