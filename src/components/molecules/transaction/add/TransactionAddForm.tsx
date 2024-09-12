"use client";

import { createTransactionAction } from "@/actions/transaction";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  createTransactionSceme,
  CreateTransactionScheme,
} from "@/schemes/transaction/create-transaction-scheme";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@prisma/client";
import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface TransactionAddFormProps {
  onAddCancel?: () => void;
  user: Omit<User, "password">;
}

export default function TransactionAddForm({
  onAddCancel,
  user,
}: TransactionAddFormProps) {
  const form = useForm<CreateTransactionScheme>({
    resolver: zodResolver(createTransactionSceme),
    mode: "onChange",
    defaultValues: {
      amount: 15000,
      createdAt: new Date().toISOString().split("T")[0],
    },
  });
  const action = createTransactionAction.bind(null, user.id);

  const { execute } = useAction(action, {
    onExecute: () => {
      toast.loading("Adding transaction...");
    },
    onSuccess: () => {
      toast.success("Transaction added successfully");
      form.reset();
      onAddCancel?.();
    },
    onError: (error) => {
      toast.error(error.error.serverError?.message);
    },
  });

  return (
    <section className="container max-w-xl mt-10">
      <Card>
        <CardHeader>
          <CardTitle>{user.name}</CardTitle>
          <CardDescription>{user.nrp}</CardDescription>
        </CardHeader>
      </Card>
      <Form {...form}>
        <form className="mt-5 space-y-5" onSubmit={form.handleSubmit(execute)}>
          <FormField
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <Input placeholder="15000" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="createdAt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date</FormLabel>
                <Input type="date" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end gap-3">
            <Button
              variant="outline"
              type="button"
              onClick={() => {
                form.reset();
                onAddCancel?.();
              }}
            >
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </section>
  );
}
