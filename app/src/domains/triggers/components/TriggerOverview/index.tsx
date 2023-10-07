import { CreateTriggerButton } from "./CreateTriggerButton";
import { triggerColumns } from "./columns";
import { DataTable } from "./data-table";

export const TriggerOverview = () => {
  return (
    <div className="flex flex-col ">
      <p className="mb-12 text-sm leading-6 font-semibold text-primary">Triggers</p>
      <CreateTriggerButton className="self-start mb-4" />
      <DataTable columns={triggerColumns} data={[]} />
    </div>
  );
};
