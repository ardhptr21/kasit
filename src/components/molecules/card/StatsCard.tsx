import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface StatsCardProps {
  title: string;
  value: string;
  subtext?: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

export default function StatsCard({
  title,
  value,
  icon: Icon,
  subtext,
}: StatsCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="inline-flex justify-between items-center">
          <CardTitle>{title}</CardTitle>
          <Icon className="text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <h3 className="text-4xl font-extrabold">{value}</h3>
          <p className="text-xs text-muted-foreground">{subtext}</p>
        </div>
      </CardContent>
    </Card>
  );
}
