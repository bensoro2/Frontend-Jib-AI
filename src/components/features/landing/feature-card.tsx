import { ChevronRight } from "lucide-react";
import { JSX } from "react";

export default function FeatureCard({
  icon,
  title,
  description,
  isPrimary = false,
}: {
  icon: JSX.Element;
  title: string;
  description: string;
  isPrimary?: boolean;
}) {
  return (
    <div
      className={`flex items-start gap-4 rounded-xl border p-4 transition-all duration-300 ${
        isPrimary
          ? "border-neutral-600 backdrop-blur-[15px] bg-[radial-gradient(87.85%_133.63%_at_50.06%_0%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] [filter:drop-shadow(0px_0px_70px_rgba(130,136,190,0.25))]"
          : "border-neutral-800 bg-[radial-gradient(87.85%_133.63%_at_50.06%_0%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] [filter:drop-shadow(0px_0px_56px_rgba(130,136,190,0.25))]"
      }`}
    >
      <div
        className={`mt-1 ${isPrimary ? "text-blue-400" : "text-neutral-400"}`}
      >
        {icon}
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-neutral-400">{description}</p>
      </div>
      <ChevronRight
        size={20}
        className="ml-auto flex-shrink-0 text-neutral-600"
      />
    </div>
  );
}