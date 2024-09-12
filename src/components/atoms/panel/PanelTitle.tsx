interface PanelTitleProps {
  title: string;
  description?: string;
}

export default function PanelTitle({ title, description }: PanelTitleProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold">{title}</h1>
      {description && <p className="text-muted-foreground">{description}</p>}
    </div>
  );
}
