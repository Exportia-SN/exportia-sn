import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl p-6 md:p-8 ${
        hover ? "shadow-premium-sm hover:shadow-premium-md transition-all duration-300 hover:-translate-y-1" : "shadow-premium-sm"
      } ${className}`}
    >
      {children}
    </div>
  );
}

interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  className = "",
}: FeatureCardProps) {
  return (
    <Card className={`text-center ${className}`}>
      {icon && <div className="mb-4 flex justify-center">{icon}</div>}
      <h3 className="font-serif text-xl font-bold text-navy-900 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 text-sm md:text-base">{description}</p>
    </Card>
  );
}

interface ServiceCardProps {
  icon?: ReactNode;
  title: string;
  items: string[];
  description?: string;
  className?: string;
}

export function ServiceCard({
  icon,
  title,
  items,
  description,
  className = "",
}: ServiceCardProps) {
  return (
    <Card className={className}>
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="font-serif text-xl font-bold text-navy-900 mb-3">
        {title}
      </h3>
      {description && <p className="text-gray-600 mb-4 text-sm">{description}</p>}
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-700 text-sm">
            <span className="text-gold-900 font-bold mt-0.5">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

