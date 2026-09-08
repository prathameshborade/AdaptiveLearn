import type { Metadata } from "next"; import "./globals.css";
export const metadata:Metadata={title:"AdaptiveLearn AI",description:"Adaptive learning engine prototype"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
