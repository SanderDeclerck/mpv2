import { Link } from "@tanstack/react-router";
import {
  Breadcrumb,
  BreadcrumbCurrentPage,
  BreadcrumbLinkWithIcon,
  breadcrumbIconStyle,
  breadcrumbLinkWithIconStyle,
} from "@/components/Breadcrumb";
import { cn } from "@/lib/utils";
import { TriggerIcon } from "../TriggerIcon";

export const TriggerCreate = () => {
  return (
    <div className="">
      <Breadcrumb>
        <BreadcrumbLinkWithIcon>
          <Link to="/triggers" className={cn(breadcrumbLinkWithIconStyle())}>
            <TriggerIcon className={cn(breadcrumbIconStyle())} />
            Triggers
          </Link>
        </BreadcrumbLinkWithIcon>
        <BreadcrumbCurrentPage>Create a trigger</BreadcrumbCurrentPage>
      </Breadcrumb>
      <h1>Create a trigger</h1>
    </div>
  );
};
