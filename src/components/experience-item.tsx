import { cn } from "@/lib/utils";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  isLast?: boolean;
}

const ExperienceItem = ({
  title,
  company,
  period,
  description,
  isLast = false,
}: ExperienceItemProps) => {
  return (
    <div className="relative pl-8 pb-8">
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background dark:border-gray-900 z-10" />

      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[7px] top-6 bottom-0 w-[2px] bg-border" />
      )}

      {/* Content */}
      <div className="mb-1">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-muted-foreground">
          <span className="font-medium">{company}</span>
          <span className="hidden sm:inline">•</span>
          <span>{period}</span>
        </div>
      </div>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default ExperienceItem;
