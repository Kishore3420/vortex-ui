import { FadeIn } from '@/components/animations/FadeIn';
import { ScaleIn } from '@/components/animations/ScaleIn';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { StaggerItem } from '@/components/animations/StaggerItem';

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-4xl text-center">
          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-7xl font-bold mb-6 bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              AI Studio Portfolio
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <p className="text-xl text-gray-400 mb-8">
              Experience the future of web design with cutting-edge animations
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.6}>
            <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-colors">
              Explore Work
            </button>
          </FadeIn>
        </div>
      </section>

      {/* Features Section */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32">
        <div className="max-w-6xl w-full">
          <FadeIn direction="up">
            <h2 className="text-5xl font-bold mb-16 text-center">What We Do</h2>
          </FadeIn>

          <StaggerContainer
            staggerDelay={0.15}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
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
              { title: 'Strategy', icon: '🎯', desc: 'Data-driven solutions' },
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
              { title: 'Optimization', icon: '🚀', desc: 'Peak performance' },
            ].map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="bg-linear-to-br from-purple-900/50 to-pink-900/50 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-colors">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats Section */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32 bg-linear-to-b from-black via-purple-950/20 to-black">
        <div className="max-w-6xl w-full">
          <FadeIn direction="up">
            <h2 className="text-5xl font-bold mb-16 text-center">
              By The Numbers
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Projects Completed' },
              { number: '50+', label: 'Happy Clients' },
              { number: '99%', label: 'Satisfaction Rate' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, i) => (
              <ScaleIn key={stat.label} delay={i * 0.15}>
                <div className="text-center p-8 rounded-2xl bg-purple-900/30 border border-purple-500/30">
                  <div className="text-6xl font-bold mb-2 bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-lg">{stat.label}</div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-4xl text-center">
          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-6xl font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <p className="text-xl text-gray-400 mb-8">
              Let&apos;s create experiences that captivate and convert
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.6}>
            <button className="bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-12 py-5 rounded-full text-xl font-semibold transition-all transform hover:scale-105">
              Start Your Project
            </button>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
