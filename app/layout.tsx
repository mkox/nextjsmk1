import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

//import aaa from '@/app/ui/fonts';
//console.log(aaa);
//import { Inter } from 'next/font/google';
//const inter = Inter({ subsets: ['latin'] });

console.log('inter b: ');
console.log(inter);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
