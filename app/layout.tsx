import type { Metadata, Viewport } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import AuroraBackground from '@/components/aurora-background'
import Loader from '@/components/loader'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const sora = Sora({ subsets: ['latin'], variable: '--font-sora', display: 'swap', weight: ['400', '500', '600', '700', '800'] })

const siteUrl = 'https://portfolio-b9jn-8938jeeut-muhammadhammad234s-projects.vercel.app'

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: 'Muhammad Hammad — Senior Flutter Developer',
    description:
        'Senior Flutter Developer with 3+ years building beautiful, high-performance cross-platform mobile apps for iOS and Android. Currently with Value Growth Advisory.',
    keywords: ['Flutter developer', 'mobile app developer', 'Dart', 'iOS', 'Android', 'cross-platform', 'UI/UX', 'portfolio'],
    authors: [{ name: 'Muhammad Hammad' }],
    creator: 'Muhammad Hammad',
    alternates: { canonical: siteUrl },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteUrl,
        title: 'Muhammad Hammad — Senior Flutter Developer',
        description: 'Crafting beautiful, performant cross-platform mobile apps with Flutter for iOS and Android.',
        siteName: 'Muhammad Hammad Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Muhammad Hammad — Senior Flutter Developer',
        description: 'Crafting beautiful, performant cross-platform mobile apps with Flutter for iOS and Android.',
    },
}

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
        { media: '(prefers-color-scheme: dark)', color: '#06070f' },
    ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning className={`${inter.variable} ${sora.variable}`}>
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
                    <Loader />
                    <AuroraBackground />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
