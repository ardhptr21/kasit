import { Input } from "@/components/ui/input";

interface SearchNRPInputProps {
  onFindNRP?: (nrp: string) => void;
}

export default function SearchNRPInput({ onFindNRP }: SearchNRPInputProps) {
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onFindNRP?.(e.currentTarget.value);
    }
  };
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
