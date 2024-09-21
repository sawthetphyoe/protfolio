import { cn } from "@/lib/utils";

function SectionTitle({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-2xl md:text-4xl font-bold mb-4 relative w-fit",
        className
      )}
    >
      {title}
      <span className="absolute -bottom-2 left-0 h-[3px] bg-primary/80 w-3/4 rounded-r-full"></span>
    </h2>
  );
}

export default SectionTitle;
