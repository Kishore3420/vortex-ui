import {
  FadeIn,
  RotateIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
} from '@/components/animations';

export default function TestAnimationsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-32">
        <FadeIn direction="up">
          <header className="space-y-4">
            <h1 className="text-4xl font-bold">Animation Test Suite</h1>
            <p className="text-muted-foreground text-lg">
              Comprehensive testing environment for all animation components.
              Scroll down to explore different easing functions, animation
              types, and combinations.
            </p>
          </header>
        </FadeIn>

        <section className="space-y-8">
          <FadeIn direction="up" delay={0.1}>
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Easing Functions Comparison
              </h2>
              <p className="text-muted-foreground mb-8">
                Scroll down to see how different easing functions create
                different motion feels. Each box uses the same animation but
                with a different easing curve.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-6">
            <FadeIn direction="up" easing="easeIn">
              <div className="bg-card border border-border p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2">Ease In</h3>
                <p className="text-sm opacity-90">
                  Starts slow, ends fast. Like a car accelerating. Good for
                  elements entering the scene.
                </p>
                <code className="text-xs mt-2 block opacity-75">
                  [0.42, 0, 1, 1]
                </code>
              </div>
            </FadeIn>

            <FadeIn direction="up" easing="easeOut">
              <div className="bg-card border border-border p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2">Ease Out</h3>
                <p className="text-sm opacity-90">
                  Starts fast, ends slow. Like a car braking. Most natural for
                  UI elements.
                </p>
                <code className="text-xs mt-2 block opacity-75">
                  [0, 0, 0.58, 1]
                </code>
              </div>
            </FadeIn>

            <FadeIn direction="up" easing="easeInOut">
              <div className="bg-card border border-border p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2">Ease In Out</h3>
                <p className="text-sm opacity-90">
                  Slow start, fast middle, slow end. Most balanced and natural
                  feel.
                </p>
                <code className="text-xs mt-2 block opacity-75">
                  [0.42, 0, 0.58, 1]
                </code>
              </div>
            </FadeIn>

            <FadeIn direction="up" easing="linear">
              <div className="bg-card border border-border p-6 rounded-lg border-l-4 border-muted">
                <h3 className="text-xl font-bold mb-2">Linear</h3>
                <p className="text-sm opacity-90">
                  Constant speed. No acceleration or deceleration. Mechanical
                  feel.
                </p>
                <code className="text-xs mt-2 block opacity-75">linear</code>
              </div>
            </FadeIn>

            <FadeIn direction="up" easing="bounce">
              <div className="bg-card border border-border p-6 rounded-lg border-l-4 border-accent">
                <h3 className="text-xl font-bold mb-2">Bounce</h3>
                <p className="text-sm opacity-90">
                  Playful bounce effect. Overshoots and bounces back. Great for
                  attention-grabbing.
                </p>
                <code className="text-xs mt-2 block opacity-75">
                  [0.68, -0.55, 0.265, 1.55]
                </code>
              </div>
            </FadeIn>

            <FadeIn direction="up" easing="spring">
              <div className="bg-card border border-border p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2">Spring</h3>
                <p className="text-sm opacity-90">
                  Natural spring-like motion. Elastic and bouncy but controlled.
                </p>
                <code className="text-xs mt-2 block opacity-75">
                  [0.34, 1.56, 0.64, 1]
                </code>
              </div>
            </FadeIn>

            <FadeIn direction="up" easing="smooth">
              <div className="bg-card border border-border p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2">Smooth (Default)</h3>
                <p className="text-sm opacity-90">
                  Very smooth, gentle motion. Premium feel. Current default.
                </p>
                <code className="text-xs mt-2 block opacity-75">
                  [0.25, 0.4, 0.25, 1]
                </code>
              </div>
            </FadeIn>

            <FadeIn direction="up" easing="sharp">
              <div className="bg-card border border-border p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2">Sharp</h3>
                <p className="text-sm opacity-90">
                  Quick, snappy motion. Fast and precise. Good for quick
                  interactions.
                </p>
                <code className="text-xs mt-2 block opacity-75">
                  [0.4, 0, 0.2, 1]
                </code>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="space-y-8">
          <FadeIn direction="up" delay={0.1}>
            <div>
              <h2 className="text-3xl font-bold mb-4">FadeIn Animations</h2>
              <p className="text-muted-foreground mb-8">
                Elements fade into view with optional slide. Customizable
                offset, fade-only mode, and viewport control.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <FadeIn direction="up">
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Fade Up (Default)</h3>
                <p className="text-sm opacity-90">
                  Slides up 40px while fading in. Most common direction.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="down">
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Fade Down</h3>
                <p className="text-sm opacity-90">
                  Slides down while fading. Good for top-to-bottom flow.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Fade Left</h3>
                <p className="text-sm opacity-90">
                  Slides from right to left. Creates reading flow.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Fade Right</h3>
                <p className="text-sm opacity-90">
                  Slides from left to right. Alternative reading flow.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="space-y-6">
            <FadeIn direction="none" withSlide={false}>
              <div className="bg-card border border-border p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2">Fade Only (No Slide)</h3>
                <p className="text-sm opacity-90">
                  Pure fade effect without any sliding motion. Subtle and
                  elegant.
                </p>
                <code className="text-xs mt-2 block opacity-75">
                  direction=&quot;none&quot; withSlide=false
                </code>
              </div>
            </FadeIn>

            <FadeIn direction="up" offset={20}>
              <div className="bg-card border border-border p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2">Small Offset (20px)</h3>
                <p className="text-sm opacity-90">
                  Subtle slide with smaller distance. More refined feel.
                </p>
                <code className="text-xs mt-2 block opacity-75">
                  offset={20}
                </code>
              </div>
            </FadeIn>

            <FadeIn direction="up" offset={80}>
              <div className="bg-card border border-border p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2">Large Offset (80px)</h3>
                <p className="text-sm opacity-90">
                  Dramatic slide with larger distance. More noticeable effect.
                </p>
                <code className="text-xs mt-2 block opacity-75">
                  offset={80}
                </code>
              </div>
            </FadeIn>

            <FadeIn direction="up" viewportMargin="0px">
              <div className="bg-card border border-border p-6 rounded-lg border-l-4 border-accent">
                <h3 className="text-xl font-bold mb-2">
                  Immediate Trigger (0px margin)
                </h3>
                <p className="text-sm opacity-90">
                  Animation starts as soon as element enters viewport. No delay.
                </p>
                <code className="text-xs mt-2 block opacity-75">
                  viewportMargin=&quot;0px&quot;
                </code>
              </div>
            </FadeIn>

            <FadeIn direction="up" viewportMargin="-200px" easing="spring">
              <div className="bg-card border border-border p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2">
                  Early Trigger (-200px margin)
                </h3>
                <p className="text-sm opacity-90">
                  Animation starts 200px before element enters viewport. Good
                  for long sections.
                </p>
                <code className="text-xs mt-2 block opacity-75">
                  viewportMargin=&quot;-200px&quot; easing=&quot;spring&quot;
                </code>
              </div>
            </FadeIn>

            <FadeIn direction="up" once={false} easing="easeOut">
              <div className="bg-card border border-border p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2">Repeatable Animation</h3>
                <p className="text-sm opacity-90">
                  Animates every time it enters viewport. Good for
                  scroll-triggered effects.
                </p>
                <code className="text-xs mt-2 block opacity-75">
                  once=false
                </code>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="space-y-8">
          <FadeIn direction="up" delay={0.1}>
            <div>
              <h2 className="text-3xl font-bold mb-4">ScaleIn Animations</h2>
              <p className="text-muted-foreground mb-8">
                Elements scale from small to full size. Customizable easing,
                transform origin, and fade control.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <ScaleIn delay={0} scale={0.5}>
              <div className="bg-card border border-border p-8 rounded-lg aspect-square flex items-center justify-center">
                <span className="text-xl font-bold">Small Start (0.5)</span>
              </div>
            </ScaleIn>

            <ScaleIn delay={0.15} scale={0.8}>
              <div className="bg-card border border-border p-8 rounded-lg aspect-square flex items-center justify-center">
                <span className="text-xl font-bold">Medium Start (0.8)</span>
              </div>
            </ScaleIn>

            <ScaleIn delay={0.3} scale={0.9}>
              <div className="bg-card border border-border p-8 rounded-lg aspect-square flex items-center justify-center">
                <span className="text-xl font-bold">Large Start (0.9)</span>
              </div>
            </ScaleIn>
          </div>

          <div className="space-y-6">
            <ScaleIn easing="bounce" scale={0.3}>
              <div className="bg-card border border-border p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2">
                  Bounce Easing (Default)
                </h3>
                <p className="text-sm opacity-90">
                  Playful bounce effect. Great for attention-grabbing elements.
                </p>
                <code className="text-xs mt-2 block opacity-75">
                  easing=&quot;bounce&quot; scale={0.3}
                </code>
              </div>
            </ScaleIn>

            <ScaleIn easing="spring" scale={0.5}>
              <div className="bg-card border border-border p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2">Spring Easing</h3>
                <p className="text-sm opacity-90">
                  Natural spring-like motion. Elastic and bouncy but controlled.
                </p>
                <code className="text-xs mt-2 block opacity-75">
                  easing=&quot;spring&quot; scale={0.5}
                </code>
              </div>
            </ScaleIn>

            <ScaleIn easing="smooth" scale={0.7}>
              <div className="bg-card border border-border p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2">Smooth Easing</h3>
                <p className="text-sm opacity-90">
                  Very smooth, gentle motion. Premium feel for elegant
                  animations.
                </p>
                <code className="text-xs mt-2 block opacity-75">
                  easing=&quot;smooth&quot; scale={0.7}
                </code>
              </div>
            </ScaleIn>

            <ScaleIn easing="sharp" scale={0.6} withFade={false}>
              <div className="bg-card border border-border p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2">Scale Only (No Fade)</h3>
                <p className="text-sm opacity-90">
                  Quick, snappy scaling without fading. Good for instant
                  feedback.
                </p>
                <code className="text-xs mt-2 block opacity-75">
                  easing=&quot;sharp&quot; withFade=false
                </code>
              </div>
            </ScaleIn>

            <ScaleIn easing="easeOut" scale={0.4} transformOrigin="top left">
              <div className="bg-card border border-border p-6 rounded-lg border-l-4 border-accent">
                <h3 className="text-xl font-bold mb-2">
                  Transform Origin: Top Left
                </h3>
                <p className="text-sm opacity-90">
                  Scales from top-left corner instead of center. Creates
                  different visual effect.
                </p>
                <code className="text-xs mt-2 block opacity-75">
                  transformOrigin=&quot;top left&quot;
                </code>
              </div>
            </ScaleIn>

            <ScaleIn
              easing="easeOut"
              scale={0.4}
              transformOrigin="bottom right"
            >
              <div className="bg-card border border-border p-6 rounded-lg border-l-4 border-accent">
                <h3 className="text-xl font-bold mb-2">
                  Transform Origin: Bottom Right
                </h3>
                <p className="text-sm opacity-90">
                  Scales from bottom-right corner. Useful for dropdowns and
                  popovers.
                </p>
                <code className="text-xs mt-2 block opacity-75">
                  transformOrigin=&quot;bottom right&quot;
                </code>
              </div>
            </ScaleIn>
          </div>
        </section>

        <section className="space-y-8">
          <FadeIn direction="up" delay={0.1}>
            <div>
              <h2 className="text-3xl font-bold mb-4">RotateIn Animations</h2>
              <p className="text-muted-foreground mb-8">
                Elements rotate into view from different angles and directions.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-6">
            <RotateIn direction="clockwise" angle={180}>
              <div className="bg-card border border-border p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2">Clockwise Rotation</h3>
                <p className="text-sm opacity-90">
                  Rotates 180° clockwise into view. Default with fade effect.
                </p>
                <code className="text-xs mt-2 block opacity-75">
                  direction=&quot;clockwise&quot; angle={180}
                </code>
              </div>
            </RotateIn>

            <RotateIn direction="counterclockwise" angle={180}>
              <div className="bg-card border border-border p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2">
                  Counter-Clockwise Rotation
                </h3>
                <p className="text-sm opacity-90">
                  Rotates 180° counter-clockwise. Creates a different visual
                  flow.
                </p>
                <code className="text-xs mt-2 block opacity-75">
                  direction=&quot;counterclockwise&quot; angle={180}
                </code>
              </div>
            </RotateIn>

            <RotateIn direction="clockwise" angle={360} easing="bounce">
              <div className="bg-card border border-border p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2">Full Spin (360°)</h3>
                <p className="text-sm opacity-90">
                  Complete rotation with bounce easing. Playful and
                  attention-grabbing.
                </p>
                <code className="text-xs mt-2 block opacity-75">
                  angle={360} easing=&quot;bounce&quot;
                </code>
              </div>
            </RotateIn>

            <RotateIn
              direction="clockwise"
              angle={90}
              withScale={true}
              scale={0.5}
              easing="spring"
            >
              <div className="bg-card border border-border p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2">Rotate + Scale</h3>
                <p className="text-sm opacity-90">
                  Combines rotation with scaling. Starts small and rotated, ends
                  normal.
                </p>
                <code className="text-xs mt-2 block opacity-75">
                  withScale angle={90} easing=&quot;spring&quot;
                </code>
              </div>
            </RotateIn>

            <RotateIn
              direction="clockwise"
              angle={45}
              withFade={false}
              easing="sharp"
            >
              <div className="bg-card border border-border p-6 rounded-lg border-l-4 border-accent">
                <h3 className="text-xl font-bold mb-2">
                  Rotation Only (No Fade)
                </h3>
                <p className="text-sm opacity-90">
                  Subtle 45° rotation without fading. Quick and snappy.
                </p>
                <code className="text-xs mt-2 block opacity-75">
                  withFade=false angle={45} easing=&quot;sharp&quot;
                </code>
              </div>
            </RotateIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <RotateIn direction="clockwise" angle={90} delay={0}>
              <div className="bg-card border border-border p-6 rounded-xl aspect-square flex items-center justify-center">
                <span className="text-2xl font-bold">Card 1</span>
              </div>
            </RotateIn>

            <RotateIn direction="counterclockwise" angle={90} delay={0.1}>
              <div className="bg-card border border-border p-6 rounded-xl aspect-square flex items-center justify-center">
                <span className="text-2xl font-bold">Card 2</span>
              </div>
            </RotateIn>

            <RotateIn
              direction="clockwise"
              angle={90}
              delay={0.2}
              easing="bounce"
            >
              <div className="bg-card border border-border p-6 rounded-xl aspect-square flex items-center justify-center">
                <span className="text-2xl font-bold">Card 3</span>
              </div>
            </RotateIn>
          </div>
        </section>

        <section className="space-y-8">
          <FadeIn direction="up" delay={0.1}>
            <div>
              <h2 className="text-3xl font-bold mb-4">Stagger Animations</h2>
              <p className="text-muted-foreground mb-8">
                Sequential animations where items appear one after another.
                Customizable animation types, directions, and effects.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Basic Stagger (Default Spring)
              </h3>
              <StaggerContainer staggerDelay={0.15}>
                {[1, 2, 3, 4].map((num) => (
                  <StaggerItem key={num}>
                    <div className="bg-card border border-border p-6 rounded-lg mb-4">
                      <h4 className="text-xl font-bold">Item {num}</h4>
                      <p className="mt-2">
                        Spring animation with fade and slide up
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">
                Tween Animation (Smooth)
              </h3>
              <StaggerContainer staggerDelay={0.1} initialDelay={0.2}>
                {[1, 2, 3, 4].map((num) => (
                  <StaggerItem
                    key={num}
                    animationType="tween"
                    easing="smooth"
                    direction="left"
                  >
                    <div className="bg-linear-to-r from-purple-600 to-pink-600 p-6 rounded-lg mb-4">
                      <h4 className="text-xl font-bold">Item {num}</h4>
                      <p className="mt-2">Tween animation sliding from right</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Stagger with Scale</h3>
              <StaggerContainer staggerDelay={0.12}>
                {[1, 2, 3, 4].map((num) => (
                  <StaggerItem
                    key={num}
                    withScale={true}
                    scale={0.5}
                    easing="bounce"
                    animationType="tween"
                  >
                    <div className="bg-linear-to-r from-blue-600 to-cyan-600 p-6 rounded-lg mb-4">
                      <h4 className="text-xl font-bold">Item {num}</h4>
                      <p className="mt-2">Scales from 50% with bounce easing</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">
              Grid Layout with Stagger
            </h3>
            <StaggerContainer
              staggerDelay={0.1}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <StaggerItem
                  key={num}
                  withScale={true}
                  scale={0.7}
                  easing="spring"
                  animationType="tween"
                >
                  <div className="bg-card border border-border p-8 rounded-xl aspect-square flex items-center justify-center">
                    <span className="text-2xl font-bold">Card {num}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="space-y-8">
          <FadeIn direction="up" delay={0.1}>
            <h2 className="text-3xl font-bold mb-8">Combined Animations</h2>
          </FadeIn>

          <FadeIn direction="up">
            <StaggerContainer
              staggerDelay={0.1}
              className="grid grid-cols-2 gap-6"
            >
              {['Design', 'Development', 'Strategy', 'Marketing'].map(
                (service) => (
                  <StaggerItem key={service}>
                    <div className="bg-card border border-border p-8 rounded-xl">
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

        <div className="h-32"></div>
      </div>
    </div>
  );
}
