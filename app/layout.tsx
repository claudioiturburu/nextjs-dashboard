
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Curso de NextJS</title>
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <footer className="text-center text-sm text-gray-500">Curso de NextJs</footer>
      </body>
    </html>
  );
}
