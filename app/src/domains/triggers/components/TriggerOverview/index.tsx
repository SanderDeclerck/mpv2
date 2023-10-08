import {
  Breadcrumb,
  BreadcrumbCurrentPageWithIcon,
  breadcrumbIconStyle,
} from "@/components/Breadcrumb";
import { cn } from "@/lib/utils";
import { useTriggers } from "../../api/triggers.get";
import { TriggerIcon } from "../TriggerIcon";
import { CreateTriggerButton } from "./CreateTriggerButton";
import { triggerColumns } from "./columns";
import { DataTable } from "./data-table";

export const TriggerOverview = () => {
  const { data } = useTriggers();

  console.log(data);
  return (
    <div className="flex flex-col mb-12">
      <Breadcrumb>
        <BreadcrumbCurrentPageWithIcon>
          <TriggerIcon className={cn(breadcrumbIconStyle())} />
          Triggers
        </BreadcrumbCurrentPageWithIcon>
      </Breadcrumb>

      <CreateTriggerButton className="self-start mb-8" />
      <DataTable columns={triggerColumns} data={data ?? []} />
    </div>
  );
};
