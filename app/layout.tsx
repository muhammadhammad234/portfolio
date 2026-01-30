import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Your Name - Portfolio',
    description: 'Full-stack developer passionate about creating beautiful and functional web applications.',
    keywords: ['developer', 'portfolio', 'web development', 'react', 'next.js'],
    authors: [{ name: 'Your Name' }],
    creator: 'Your Name',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://your-portfolio.vercel.app',
        title: 'Your Name - Portfolio',
        description: 'Full-stack developer passionate about creating beautiful and functional web applications.',
        siteName: 'Your Name Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Your Name - Portfolio',
        description: 'Full-stack developer passionate about creating beautiful and functional web applications.',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
