import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google"
import LocalFont from "next/font/local"
// import { Gideon_Roman as FontMono, Inter as FontSans } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const localFont = LocalFont({
  src: '../assets/TimesNewRoman.ttf',
  display: 'swap',
})


