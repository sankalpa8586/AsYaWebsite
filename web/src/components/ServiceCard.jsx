import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

function ServiceCard({ icon: Icon, title, description, benefits, reverse = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
        reverse ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className={`${reverse ? 'md:order-2' : ''}`}>
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-xl bg-primary/10">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold" style={{ letterSpacing: '-0.01em' }}>
            {title}
          </h3>
        </div>
        
        <p className="text-base leading-relaxed text-muted-foreground mb-6 max-w-prose">
          {description}
        </p>

        {benefits && benefits.length > 0 && (
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={`${reverse ? 'md:order-1' : ''}`}>
        <div className="aspect-square rounded-2xl bg-muted flex items-center justify-center">
          <Icon className="h-32 w-32 text-primary/20" />
        </div>
      </div>
    </motion.div>
  );
}

export default ServiceCard;