"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

interface TransactionAddFormProps {
  onAddCancel?: () => void;
}

export default function TransactionAddForm({
  onAddCancel,
}: TransactionAddFormProps) {
  const form = useForm();

  return (
    <section className="container max-w-xl mt-10">
      <Card>
        <CardHeader>
          <CardTitle>Paundra Pujo Darmawan</CardTitle>
          <CardDescription>5027241008</CardDescription>
        </CardHeader>
      </Card>
      <Form {...form}>
        <form className="mt-5 space-y-5">
          <FormItem>
            <FormLabel>Amount</FormLabel>
            <Input placeholder="15000" defaultValue="15000" />
          </FormItem>
          <FormItem>
            <FormLabel>Date</FormLabel>
            <Input type="datetime-local" />
          </FormItem>
          <div className="flex justify-end gap-3">
            <Button
              variant="outline"
              onClick={() => {
                form.reset();
                onAddCancel?.();
              }}
            >
              Cancel
            </Button>
            <Button>Submit</Button>
          </div>
        </form>
      </Form>
    </section>
  );
}
