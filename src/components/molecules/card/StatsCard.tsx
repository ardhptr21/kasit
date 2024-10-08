import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface StatsCardProps {
  children?: React.ReactNode;
  title: string;
  value: string;
  subtext?: string;
  isLoading?: boolean;
  className?: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

export default function StatsCard({
  title,
  value,
  isLoading,
  icon: Icon,
  subtext,
  className,
  children,
}: StatsCardProps) {
  if (isLoading) {
    return <StatsCardSkeleton />;
  }
  return (
    <Card className={className}>
      <CardHeader>
        <div className="inline-flex justify-between items-center">
          <CardTitle>{title}</CardTitle>
          <Icon className="text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <h3 className="text-3xl font-extrabold">{value}</h3>
          {children}
          <p className="text-xs text-muted-foreground">{subtext}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export const StatsCardSkeleton = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center w-full">
          <Skeleton className="h-4 w-16 md:w-20 bg-muted" />
          <Skeleton className="h-6 w-6 bg-muted" />
        </div>
      </CardHeader>
      <CardContent>
        <Skeleton className="h-8 w-72 bg-muted" />
        <Skeleton className="h-3 w-32 bg-muted mt-3" />
      </CardContent>
    </Card>
  );
};
