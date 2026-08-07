import { Provider } from '@/components/ui/provider';
import '@/app/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ankit Patil · Full Stack Engineer',
  description:
    'Portfolio of Ankit Patil, a frontend engineer with 3+ years shipping production React, Next.js and TypeScript at Cloudgov.',
  openGraph: {
    title: 'Ankit Patil · Full Stack Engineer',
    description:
      'Frontend engineer with 3+ years shipping production React, Next.js and TypeScript at Cloudgov.',
    type: 'website',
  },
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <div className="site-background" aria-hidden="true"></div>
          <div className="site-noise" aria-hidden="true"></div>
          <div className="site-content">{children}</div>
        </Provider>
      </body>
    </html>
  );
}
