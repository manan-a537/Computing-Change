import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface ThemeCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: "primary" | "accent" | "secondary";
}

export const ThemeCard = ({ icon: Icon, title, description, color = "primary" }: ThemeCardProps) => {
  const colorClasses = {
    primary: "bg-primary/10 text-primary",
    accent: "bg-accent/10 text-accent",
    secondary: "bg-secondary text-secondary-foreground",
  };

  return (
    <div className="card-base group hover:-translate-y-1">
      <div className={`w-12 h-12 rounded-lg ${colorClasses[color]} flex items-center justify-center mb-4`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
};
