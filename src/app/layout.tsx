import { Provider } from '@/components/ui/provider';
import '@/app/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ankit Patil — Full Stack Developer & Artist',
  description:
    'Portfolio of Ankit Patil, a full-stack developer, design-driven engineer and pencil-sketch artist based in Navi Mumbai, India.',
  openGraph: {
    title: 'Ankit Patil — Full Stack Developer & Artist',
    description:
      'Full-stack developer and pencil-sketch artist. React, Next.js, TypeScript, React Native.',
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
          <div className="site-content">{children}</div>
        </Provider>
      </body>
    </html>
  );
}
