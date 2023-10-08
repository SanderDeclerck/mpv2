import { ColumnDef } from "@tanstack/react-table";
import { AssignedProfileTrigger, Trigger, triggerTypeMap } from "../../schemas";

export const triggerColumns: ColumnDef<Trigger>[] = [
  {
    header: "Type",
    accessorFn: (trigger) => triggerTypeMap[trigger.type].short,
  },
  {
    header: "Profiles",
    cell: ({ row }) => {
      const profiles = (row.original as AssignedProfileTrigger).profiles;
      const getProfileString = () => {
        if (!profiles) return "";
        if (profiles === "all") return "All profiles";
        return profiles.length > 1
          ? `${profiles.length} profiles`
          : `${profiles[0]!.name}`;
      };
      return <span className=" ">{getProfileString()}</span>;
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
  },
];
