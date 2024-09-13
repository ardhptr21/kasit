import { Input } from "@/components/ui/input";
import { useGetUserByNRP } from "@/queries/users/get-user-nrp";
import { User } from "@prisma/client";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface SearchNRPInputProps {
  onFindNRP?: (user: Omit<User, "password">) => void;
}

export default function SearchNRPInput({ onFindNRP }: SearchNRPInputProps) {
  const [nrp, setNrp] = useState<number | null>(null);
  const { isSuccess, isError, isFetching, data, error } = useGetUserByNRP(
    { nrp },
    { enabled: !!nrp, refetchOnWindowFocus: false, retry: false }
  );

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setNrp(Number(e.currentTarget.value));
    }
  };

  useEffect(() => {
    if (isSuccess) onFindNRP?.(data.data);
  }, [isSuccess, data, onFindNRP]);

  useEffect(() => {
    if (isError) {
      toast.error(error?.response?.data.meta.message, {
        position: "top-center",
      });
      setNrp(null);
    }
  }, [isError, error]);

  useEffect(() => {
    let id;
    if (isFetching) {
      id = toast.loading("Loading user data...", {
        position: "top-center",
      });
    } else {
      toast.dismiss(id);
    }
  }, [isFetching]);

  return (
    <section className="container">
      <div className="mt-5 flex items-center flex-col gap-2">
        <Input className="max-w-96" placeholder="NRP" onKeyDown={handleEnter} />
        <small className="text-muted-foreground">
          *Please insert the full NRP
        </small>
      </div>
    </section>
  );
}
