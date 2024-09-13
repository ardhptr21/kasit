"use client";

import { createExpenseAction } from "@/actions/expense";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  createExpenseScheme,
  CreateExpenseScheme,
} from "@/schemes/expense/create-expense-scheme";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { TicketPlus } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function NewExpenseModal() {
  const [open, setOpen] = useState(false);
  const form = useForm<CreateExpenseScheme>({
    defaultValues: {
      amount: 0,
      purpose: "",
    },
    resolver: zodResolver(createExpenseScheme),
    mode: "onChange",
  });
  const queryClient = useQueryClient();

  let toastId: string | number;
  const { execute } = useAction(createExpenseAction, {
    onExecute: () => {
      setOpen(false);
      toastId = toast.loading("Adding expense...");
    },
    onSuccess: () => {
      toast.success("Expense added successfully", { id: toastId });
      form.reset();
      queryClient.invalidateQueries({
        queryKey: ["list-expenses-strict"],
      });
    },
    onError: (error) => {
      toast.error(error.error.serverError?.message, { id: toastId });
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2 items-center">
          <TicketPlus size={18} /> New Expense
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>New Expense</DialogTitle>
          <DialogDescription>
            Create a new expense to track the outcome of money
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-5" onSubmit={form.handleSubmit(execute)}>
            <FormField
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <Input placeholder="10000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="purpose"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Purpose</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe the purpose of this expense"
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end gap-3">
              <DialogClose asChild>
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

/**
 <Button asChild className="gap-2 items-center">
            <Link href="/panel/transactions/add">
              <TicketPlus size={18} /> New Expense
            </Link>
          </Button>
 */
