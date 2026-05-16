import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'miamiredesign.ai',
  description: 'AI website design for Miami businesses',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
