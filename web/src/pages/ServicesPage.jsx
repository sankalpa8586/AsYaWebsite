import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText, Palette } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';

function ServicesPage() {
  const services = [
    {
      icon: FileText,
      title: 'Utility patent drawings',
      description: 'Precise, USPTO-compliant technical drawings that clearly illustrate the functional aspects and structure of inventions. Accurate, detailed, and delivered fast.',
      benefits: [
        'Multiple view angles and cross-sections',
        'Detailed component labeling and numbering',
        'Exploded views for complex assemblies',
        'Full USPTO compliance verification',
        'Rapid turnaround without quality compromise'
      ]
    },
    {
      icon: Palette,
      title: 'Design patent drawings',
      description: 'Elegant and professional illustrations that protect the unique ornamental design and appearance of products with visually striking, submission-ready drawings.',
      benefits: [
        'Multiple perspective views',
        'Shading and surface detail rendering',
        'Clean line work and professional finish',
        'Design patent office requirements met',
        'High-resolution delivery formats'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - ASYA Solutions</title>
        <meta name="description" content="Professional patent illustration services including utility patent drawings and design patent drawings with USPTO compliance and rapid turnaround." />
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
                  Our services
                </h1>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Comprehensive patent illustration services tailored to protect your intellectual property with technical precision and visual clarity.
                </p>
              </motion.div>

              <div className="max-w-6xl mx-auto space-y-24">
                {services.map((service, index) => (
                  <ServiceCard
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    benefits={service.benefits}
                    reverse={index % 2 !== 0}
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

export default ServicesPage;