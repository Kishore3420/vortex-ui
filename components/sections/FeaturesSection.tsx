import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';

const features = [
  {
    title: 'Design',
    icon: '🎨',
    desc: 'Beautiful, intuitive interfaces',
  },
  {
    title: 'Development',
    icon: '⚡',
    desc: 'Fast, scalable applications',
  },
  {
    title: 'Strategy',
    icon: '🎯',
    desc: 'Data-driven solutions',
  },
  {
    title: 'Animation',
    icon: '✨',
    desc: 'Engaging user experiences',
  },
  {
    title: 'AI Integration',
    icon: '🤖',
    desc: 'Intelligent automation',
  },
  {
    title: 'Optimization',
    icon: '🚀',
    desc: 'Peak performance',
  },
];

export function FeaturesSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl w-full">
        <FadeIn direction="up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 sm:mb-16 text-center">
            What We Do
          </h2>
        </FadeIn>

        <StaggerContainer
          staggerDelay={0.15}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="bg-card border border-border p-6 sm:p-8 rounded-xl hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group">
                <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
