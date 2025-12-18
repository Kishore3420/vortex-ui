import { FadeIn } from '@/components/animations/FadeIn';
import { ScaleIn } from '@/components/animations/ScaleIn';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { StaggerItem } from '@/components/animations/StaggerItem';

export default function TestAnimationsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto space-y-32">
        {/* Section 1: FadeIn Tests */}
        <section className="space-y-8">
          <h1 className="text-4xl font-bold mb-12">FadeIn Animations</h1>

          <FadeIn direction="up">
            <div className="bg-purple-600 p-8 rounded-lg">
              <h2 className="text-2xl font-bold">Fade In from Bottom</h2>
              <p className="mt-2">This box fades in from the bottom</p>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <div className="bg-blue-600 p-8 rounded-lg">
              <h2 className="text-2xl font-bold">Fade In from Right</h2>
              <p className="mt-2">
                This box fades in from the right with delay
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.4}>
            <div className="bg-cyan-600 p-8 rounded-lg">
              <h2 className="text-2xl font-bold">Fade In from Left</h2>
              <p className="mt-2">This box fades in from the left</p>
            </div>
          </FadeIn>
        </section>

        {/* Section 2: ScaleIn Tests */}
        <section className="space-y-8">
          <h1 className="text-4xl font-bold mb-12">ScaleIn Animations</h1>

          <div className="grid grid-cols-3 gap-8">
            <ScaleIn delay={0}>
              <div className="bg-pink-600 p-8 rounded-lg aspect-square flex items-center justify-center">
                <span className="text-xl font-bold">Scale 1</span>
              </div>
            </ScaleIn>

            <ScaleIn delay={0.15}>
              <div className="bg-rose-600 p-8 rounded-lg aspect-square flex items-center justify-center">
                <span className="text-xl font-bold">Scale 2</span>
              </div>
            </ScaleIn>

            <ScaleIn delay={0.3}>
              <div className="bg-red-600 p-8 rounded-lg aspect-square flex items-center justify-center">
                <span className="text-xl font-bold">Scale 3</span>
              </div>
            </ScaleIn>
          </div>
        </section>

        {/* Section 3: Stagger Animations */}
        <section className="space-y-8">
          <h1 className="text-4xl font-bold mb-12">Stagger Animations</h1>

          <StaggerContainer staggerDelay={0.15}>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <StaggerItem key={num}>
                <div className="bg-linear-to-r from-orange-600 to-yellow-600 p-6 rounded-lg mb-4">
                  <h3 className="text-xl font-bold">Stagger Item {num}</h3>
                  <p className="mt-2">These items appear one after another</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Section 4: Combined Animations */}
        <section className="space-y-8">
          <h1 className="text-4xl font-bold mb-12">Combined Animations</h1>

          <FadeIn direction="up">
            <StaggerContainer
              staggerDelay={0.1}
              className="grid grid-cols-2 gap-6"
            >
              {['Design', 'Development', 'Strategy', 'Marketing'].map(
                (service) => (
                  <StaggerItem key={service}>
                    <div className="bg-linear-to-br from-indigo-600 to-purple-600 p-8 rounded-xl">
                      <h3 className="text-2xl font-bold mb-2">{service}</h3>
                      <p className="text-gray-200">
                        Professional {service.toLowerCase()} services for modern
                        brands
                      </p>
                    </div>
                  </StaggerItem>
                )
              )}
            </StaggerContainer>
          </FadeIn>
        </section>

        {/* Extra spacing at bottom for scrolling */}
        <div className="h-32"></div>
      </div>
    </div>
  );
}
