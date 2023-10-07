import { Link } from "@tanstack/react-router";
import { PlusIcon } from "lucide-react";
import { Button, ButtonProps } from "@/components/ui/button";

export const CreateTriggerButton = (props: ButtonProps) => (
  <Button asChild {...props}>
    <Link to="/triggers/create">
      <PlusIcon className="mr-2 h-4 w-4" />
      Create trigger
    </Link>
  </Button>
);
