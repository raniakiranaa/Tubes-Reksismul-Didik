import { CardStack } from "@/components/shares/card"
import tv from '/public/images/home/tv.png'
import modul from '/public/images/home/modul.png'

export default function app() {
    return (
        <div className="flex min-h-screen flex-col p-24">
            <div className="flex flex-col items-start">
                <div className="text-main-text text-left semibold-64">🙌🏻 Welcome Back!</div>
                <p className="text-sub-text regular-18 pt-4 text-justify">Ready to dive into today's session? Let’s explore Bahasa Indonesia together and unlock new possibilities! ⭐️</p>
            </div>
            <div className="flex flex-row pt-16 justify-center space-x-32">
                    <CardStack linkPage="/didiktvtnc" image={tv} title="Didik TV" description="Interactive learning with speech recognition & peer exchange."/>
                    <CardStack linkPage="/speechmenu" image={modul} title="Modul Didik" description="Real-time practice with other user speakers via video conferencing."/>
            </div>
        </div>
    )
}