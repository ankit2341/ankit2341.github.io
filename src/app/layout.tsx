import { Provider } from '@/components/ui/provider';
import '@/app/globals.css';
import '@/lib/fontawesome'; 

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <div className="site-background"></div>
          <div className="site-content">{children} </div>
        </Provider>
      </body>
    </html>
  );
}
