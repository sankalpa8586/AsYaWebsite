import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Users, Award, Lightbulb } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Every line, dimension, and detail is crafted with meticulous accuracy to ensure your patent applications meet the highest standards.'
    },
    {
      icon: Users,
      title: 'Client-focused',
      description: 'We work closely with inventors, attorneys, and businesses to understand unique requirements and deliver tailored solutions.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Our commitment to quality means every drawing undergoes rigorous review to guarantee USPTO compliance and technical accuracy.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay current with patent office requirements and industry best practices to provide cutting-edge illustration services.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About - ASYA Solutions</title>
        <meta name="description" content="Learn about ASYA Solutions' mission to deliver professional patent illustrations with technical accuracy, USPTO compliance, and exceptional client service." />
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
                  About ASYA Solutions
                </h1>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Dedicated to protecting innovations through precise, professional patent illustrations.
                </p>
              </motion.div>

              <div className="max-w-4xl mx-auto space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="prose prose-lg max-w-none"
                >
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ letterSpacing: '-0.01em' }}>
                    Our story
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">
                    ASYA Solutions was founded with a clear mission: to provide inventors and businesses with the highest quality patent illustrations that meet USPTO standards while maintaining rapid turnaround times. We understand that protecting intellectual property is critical, and our team brings years of technical expertise to every project.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">
                    Our approach combines traditional drafting precision with modern digital tools, ensuring that every drawing captures the essential details of your invention. Whether you need utility patent drawings that showcase functional mechanisms or design patent illustrations that highlight ornamental features, we deliver results that exceed expectations.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    We work with patent attorneys, independent inventors, startups, and established corporations across diverse industries. Our client-centric approach means we take the time to understand your specific needs and deliver customized solutions that support your patent application success.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center" style={{ letterSpacing: '-0.01em' }}>
                    Our values
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {values.map((value, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex gap-4"
                      >
                        <div className="flex-shrink-0">
                          <div className="p-3 rounded-xl bg-primary/10">
                            <value.icon className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default AboutPage;