/* FILE 10: components/GlassyCard.tsx */
'use client';

import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export default function GlassyCard({ children, className = '' }: Props) {
  return (
    <div className={`glass ${className}`}>
      {children}
    </div>
  );
}
