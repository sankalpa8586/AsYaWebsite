import React from 'react';
import { motion } from 'framer-motion';

function PortfolioCard({ image, title, description, featured = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`group relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-xl transition-all duration-300 ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-xl font-semibold mb-2" style={{ letterSpacing: '-0.01em' }}>
          {title}
        </h3>
        {description && (
          <p className="text-sm text-white/90 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default PortfolioCard;