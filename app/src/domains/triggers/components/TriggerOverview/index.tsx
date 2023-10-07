import { Breadcrumb, BreadcrumbCurrentPageWithIcon, breadcrumbIconStyle } from "@/components/Breadcrumb";
import { cn } from "@/lib/utils";
import { TriggerIcon } from "../TriggerIcon";
import { CreateTriggerButton } from "./CreateTriggerButton";
import { triggerColumns } from "./columns";
import { DataTable } from "./data-table";

export const TriggerOverview = () => {
  return (
    <div className="flex flex-col ">
      <Breadcrumb>
        <BreadcrumbCurrentPageWithIcon>
          <TriggerIcon className={cn(breadcrumbIconStyle())} />
          <span>Triggers</span>
        </BreadcrumbCurrentPageWithIcon>
      </Breadcrumb>
      <CreateTriggerButton className="self-start mb-8" />
      <DataTable columns={triggerColumns} data={[]} />
    </div>
  );
};
