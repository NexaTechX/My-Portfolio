import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";
import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  imageSrc: string;
  className?: string;
}

const TestimonialCard = ({
  quote,
  name,
  title,
  imageSrc,
  className,
}: TestimonialCardProps) => {
  return (
    <Card
      className={cn(
        "border rounded-2xl h-full flex flex-col bg-card p-6",
        className,
      )}
    >
      <CardContent className="pt-6 px-0 pb-0 flex-grow flex flex-col">
        <div className="mb-6">
          <Quote className="text-primary h-8 w-8 mb-4 opacity-70" />
          <p className="text-lg italic">{quote}</p>
        </div>
        <div className="mt-auto flex items-center gap-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden">
            <Image src={imageSrc} alt={name} fill className="object-cover" />
          </div>
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-muted-foreground">{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
