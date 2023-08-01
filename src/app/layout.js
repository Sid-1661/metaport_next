import './globals.css'
import 'bootstrap/dist/css/bootstrap.css';

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: "Metaport || Home Page",
    description: "Metaport ",
    keywords: [
      "Next.js",
      "React",
      "TypeScript",
      "Server Components",
      "NextUI",
      "NextAuth",
      "Prisma",
      "PostgreSQL",
      "OpenAI",
      "GPT",
      "Stripe",
    ]
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous"/>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.9/css/intlTelInput.css" rel="stylesheet" media="screen"/>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.9/js/intlTelInput.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.9/js/intlTelInput.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.9/js/utils.js"></script>
                <link rel="stylesheet" type="text/css" href="/css/animate.css"/>
            </head>
            <body suppressHydrationWarning={true} className={inter.className}>{children}</body>
        </html>
    )
}
