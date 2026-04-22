import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PortfolioCard from '@/components/PortfolioCard.jsx';

function PortfolioPage() {
  const designs = [
    {
      id: 1,
      image: '/public/images/designs/AsYa_design1.png',
      title: 'Power drill mechanism',
      description: 'Detailed utility patent illustration showcasing internal mechanical components and assembly structure',
      featured: true
    },
    {
      id: 2,
      image: '/public/images/designs/AsYa_design2.png',
      title: 'Backhoe excavator',
      description: 'Technical drawing highlighting hydraulic systems and operational mechanisms'
    },
    {
      id: 3,
      image: '/public/images/designs/AsYa_design3.png',
      title: 'Industrial machinery',
      description: 'Precision illustration of complex industrial equipment with detailed component views'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Portfolio - ASYA Solutions</title>
        <meta name="description" content="Explore our portfolio of professional patent illustrations including utility and design patent drawings for various industries and applications." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-20 md:py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto text-center mb-16"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ letterSpacing: '-0.02em' }}>
                  Our portfolio
                </h1>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  A showcase of our technical expertise in creating precise, USPTO-compliant patent illustrations across diverse industries and applications.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto auto-rows-[400px]">
                {designs.map((design) => (
                  <PortfolioCard
                    key={design.id}
                    image={design.image}
                    title={design.title}
                    description={design.description}
                    featured={design.featured}
                  />
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

export default PortfolioPage;