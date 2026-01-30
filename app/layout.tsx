import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Muhammad Hammad - Mobile Application Developer',
    description: 'Senior Flutter Developer with more than 3 years of experience in the field of development',
    keywords: ['developer', 'portfolio', 'web development', 'react', 'next.js'],
    authors: [{ name: 'Muhammad Hammad' }],
    creator: 'Muhammad Hammad',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'portfolio-b9jn-8938jeeut-muhammadhammad234s-projects.vercel.app',
        title: 'Muhammad Hammad - Mobile Application Developer',
        description: 'Full-stack developer passionate about creating beautiful and functional web applications.',
        siteName: 'Muhammad Hammad Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Muhammad Hammad - Mobile Application Developer',
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
