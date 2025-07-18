'use client';

import { ReactNode } from 'react';
import NeuralNetworkBackground from './NeuralNetworkBackground';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({ children, className = '' }: SectionWrapperProps) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      <NeuralNetworkBackground />
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
