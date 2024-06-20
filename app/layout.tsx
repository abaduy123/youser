import "@/app/globals.css"
import { plus_jakata_font } from "./components/fonts"

export default function RootLayout ({children}:{children:React.ReactNode}) {
    return (
        <html lang="ar" dir="rtl" className="w-full">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <title>قمة</title>
            </head>
            <body className={`bg-primary-color ${ plus_jakata_font.className } box-border w-full`} >
        
                {children}
            </body>

        </html>
    )
}