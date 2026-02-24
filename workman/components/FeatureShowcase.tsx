'use client';

interface FeatureShowcaseProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  delay?: number;
}

export default function FeatureShowcase({
  title,
  description,
  icon,
  gradient,
  delay = 0,
}: FeatureShowcaseProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl p-8 border border-purple-900/20 bg-gradient-to-br from-gray-900/50 to-black hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1"
      style={{
        animation: `scaleIn 0.6s ease-out forwards`,
        animationDelay: `${delay * 100}ms`,
      }}
    >
      {/* Animated gradient background */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${gradient}`} />

      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-300 animate-pulse">
        <div className={`h-full w-full ${gradient}`} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-4 inline-block p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-900/20 group-hover:scale-110 group-hover:rotate-5 transition-transform duration-300">
          <div className="text-3xl">{icon}</div>
        </div>

        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-purple-500 to-purple-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
    </div>
  );
}