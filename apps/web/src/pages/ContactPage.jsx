import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@asyasolutions.com',
      link: 'mailto:info@asyasolutions.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      link: null
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon-Fri: 9am-6pm PST',
      link: null
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact - ASYA Solutions</title>
        <meta name="description" content="Get in touch with ASYA Solutions for professional patent illustration services. Contact us for quotes, project inquiries, or questions about our services." />
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
                  Get in touch
                </h1>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Ready to start your patent illustration project? Contact us today for a consultation and quote.
                </p>
              </motion.div>

              <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-card rounded-2xl p-8 shadow-lg"
                >
                  <h2 className="text-2xl font-semibold mb-6" style={{ letterSpacing: '-0.01em' }}>
                    Send us a message
                  </h2>
                  <ContactForm />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-2xl font-semibold mb-6" style={{ letterSpacing: '-0.01em' }}>
                      Contact information
                    </h2>
                    <div className="space-y-6">
                      {contactInfo.map((info, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                          className="flex items-start gap-4"
                        >
                          <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10">
                            <info.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground mb-1">
                              {info.label}
                            </p>
                            {info.link ? (
                              <a
                                href={info.link}
                                className="text-base font-medium hover:text-primary transition-all duration-200"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-base font-medium">{info.value}</p>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-muted rounded-2xl p-8">
                    <h3 className="text-lg font-semibold mb-4">Quick response guarantee</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We typically respond to all inquiries within 24 hours during business days. For urgent projects, please mention this in your message and we'll prioritize your request.
                    </p>
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

export default ContactPage;