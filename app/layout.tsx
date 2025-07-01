import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dr. Serena Blake, PsyD - Therapy in Los Angeles & Online',
  description: 'Licensed clinical psychologist providing personalized therapy for anxiety, relationships, and trauma recovery. Serving Los Angeles and online clients.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-poppins">{children}</body>
    </html>
  );
}