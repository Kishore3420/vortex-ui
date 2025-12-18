import { FadeIn } from '@/components/animations/FadeIn';
import { ScaleIn } from '@/components/animations/ScaleIn';

const stats = [
  { number: '150+', label: 'Projects Completed' },
  { number: '50+', label: 'Happy Clients' },
  { number: '99%', label: 'Satisfaction Rate' },
  { number: '24/7', label: 'Support Available' },
];

export function StatsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 bg-linear-to-b from-background via-primary/5 to-background">
      <div className="max-w-6xl w-full">
        <FadeIn direction="up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 sm:mb-16 text-center">
            By The Numbers
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <ScaleIn key={stat.label} delay={i * 0.15}>
              <div className="text-center p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                <div className="text-5xl sm:text-6xl font-bold mb-2 bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-base sm:text-lg">
                  {stat.label}
                </div>
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
}
