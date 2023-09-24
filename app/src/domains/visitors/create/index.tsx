import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreateVisitorForm } from "./form";

export function CreateVisitorPage() {
  return (
    <Tabs defaultValue="account" className="max-w-4xl w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">something</TabsTrigger>
        <TabsTrigger value="password">Something else here</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <CreateVisitorForm />
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Something else here</CardTitle>
            <CardDescription>Change your password here. After saving, you'll be logged out.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">bla bla</CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
