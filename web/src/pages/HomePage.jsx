import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import HeroCarousel from '@/components/HeroCarousel.jsx';

function HomePage() {
  const strengths = [
    {
      icon: Zap,
      number: '01',
      title: 'Technical precision',
      description: 'Every drawing meets USPTO standards with meticulous attention to detail and accuracy'
    },
    {
      icon: Shield,
      number: '02',
      title: 'USPTO compliance',
      description: 'Fully compliant illustrations that meet all patent office requirements and specifications'
    },
    {
      icon: Clock,
      number: '03',
      title: 'Rapid turnaround',
      description: 'Fast delivery without compromising quality, keeping your patent applications on schedule'
    }
  ];

  const carouselImages = [
    {
      src: '/images/designs/AsYa_design1.png',
      alt: 'Power drill design patent illustration showing internal mechanical components'
    },
    {
      src: '/images/designs/AsYa_design2.png',
      alt: 'Agricultural and backhoe equipment technical drawing highlighting hydraulic systems'
    },
    {
      src: '/images/designs/AsYa_design3.png',
      alt: 'Precision illustration of complex industrial machinery with detailed component views'
    }
  ];

  return (
    <>
      <Helmet>
        <title>ASYA Solutions - Professional patent illustration services</title>
        <meta name="description" content="Expert patent illustration services delivering precise, USPTO-compliant technical drawings with rapid turnaround for utility and design patents." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="relative min-h-[90dvh] flex items-center justify-center bg-gradient-to-br from-background via-background to-muted overflow-hidden pt-20 pb-12">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--secondary)/0.08),transparent_50%)]" />
            
            {/* Logo Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-10">
              <img 
                src="/images/logo/AsYa_logo3.png" 
                alt="" 
                className="w-[80%] max-w-4xl object-contain"
              />
            </div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto text-center"
              >

                <h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Professional patent illustrations that protect your innovations
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                  Technical accuracy meets rapid turnaround. We deliver USPTO-compliant patent drawings that bring your inventions to life with precision and clarity.
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Button asChild size="lg" className="text-base transition-all duration-200 active:scale-[0.98]">
                    <Link to="/portfolio">
                      View our portfolio
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Featured Carousel Section */}
          <section className="py-12 md:py-16 bg-background relative z-20 -mt-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <HeroCarousel images={carouselImages} />
              </motion.div>
            </div>
          </section>

          <section className="py-20 md:py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ letterSpacing: '-0.01em' }}>
                  Why choose ASYA Solutions
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We combine technical expertise with efficient processes to deliver patent illustrations that exceed expectations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {strengths.map((strength, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-4 top-0 text-6xl font-bold text-primary/10">
                      {strength.number}
                    </div>
                    <div className="relative pl-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <strength.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold">{strength.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {strength.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;