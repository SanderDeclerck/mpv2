import { AnimatePresence, motion } from "framer-motion";
import {
  Breadcrumb,
  BreadcrumbCurrentPageWithIcon,
  breadcrumbIconStyle,
} from "@/components/Breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useTriggers } from "../../api/triggers.get";
import {
  AssignedProfileTrigger,
  StatusChangeTrigger,
  triggerTypeMap,
} from "../../schemas";
import { TriggerIcon } from "../TriggerIcon";
import { CreateTriggerButton } from "./CreateTriggerButton";

export const TriggerOverview = () => {
  const { data, isLoading } = useTriggers();

  console.log(data);
  return (
    <div className="flex flex-col mb-12">
      <Breadcrumb>
        <BreadcrumbCurrentPageWithIcon>
          <TriggerIcon className={cn(breadcrumbIconStyle())} />
          Triggers
        </BreadcrumbCurrentPageWithIcon>
      </Breadcrumb>

      <Card className="mt-8 max-w-3xl">
        <CardHeader>
          <CardTitle className="flex justify-between">
            Overview
            <CreateTriggerButton />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <AnimatePresence initial={true}>
            {isLoading && !data ? (
              <motion.div
                key="trigger-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-48 text-center"
              >
                <div className="italic text-muted-foreground/70 text-base mt-20">
                  Loading...
                </div>
              </motion.div>
            ) : data?.length ? (
              <motion.ul
                key="trigger-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="divide-y divide-gray-200 "
              >
                {data.map((trigger, i) => {
                  return (
                    <li
                      key={i}
                      className={cn("py-4", trigger.active ? "" : "opacity-50")}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-gray-900 truncate ">
                            {triggerTypeMap[trigger.type].long}
                          </p>
                          <div className="text-sm text-gray-500  ">
                            {trigger.type === "AssignedProfile" ? (
                              (trigger as AssignedProfileTrigger).profiles ===
                              "all" ? (
                                "All profiles"
                              ) : (
                                <ul>
                                  {(
                                    (trigger as AssignedProfileTrigger)
                                      .profiles as {
                                      id: number;
                                      name: string;
                                    }[]
                                  ).map((profile, i) => (
                                    <li key={i}>{profile.name}</li>
                                  ))}
                                </ul>
                              )
                            ) : trigger.type === "StatusChange" ? (
                              (trigger as StatusChangeTrigger).status ===
                              "all" ? (
                                "All status changes"
                              ) : (
                                <ul>
                                  {(
                                    (trigger as StatusChangeTrigger)
                                      .status as string[]
                                  ).map((status, i) => (
                                    <li key={i}>{status}</li>
                                  ))}
                                </ul>
                              )
                            ) : (
                              <div>todo</div>
                            )}
                          </div>
                        </div>
                        <div className="inline-flex items-center text-sm font-semibold text-gray-500">
                          {trigger.active ? "Active" : "Inactive"}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </motion.ul>
            ) : (
              <motion.div
                key="trigger-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-48 text-center"
              >
                <div className="italic text-muted-foreground/70 text-base mt-20">
                  No triggers yet
                </div>
                <CreateTriggerButton variant="outline" className="mt-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  );
};
