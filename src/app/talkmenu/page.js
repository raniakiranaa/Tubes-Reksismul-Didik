import { CardVertical } from "@/components/shares/card"
import word from '/public/images/im.png'
import speak from '/public/images/speak.png'

export default function app() {
    return (
        <div className="flex min-h-screen flex-col p-24">
            <div className="flex flex-col items-start">
                <div className="text-main-text text-left semibold-64">Talk It Out!</div>
                <p className="text-sub-text regular-18 pt-4 text-justify">Experience interactive learning: Listen, record, repeat with Talk It Out! Immerse yourself in a unique language learning experience where you can actively engage with the material. Listen to native speakers, record your own voice, and repeat until you perfect your pronunciation. It's an innovative way to enhance your speaking skills and build confidence in your language abilities.</p>
            </div>
            <div className="flex flex-row pt-16 justify-center">
                <CardVertical linkPage="/wordopen" image={ word } title="Wordplay 1.0" description="Master your pronunciation with a little wordplay..."/>
                <CardVertical linkPage="/wordopen" image={ word } title="Wordplay 2.0" description="Master your pronunciation with a little wordplay, BUT HARDER!!!"/>
            </div>
            <div className="flex flex-row pt-16 justify-center">
                <CardVertical linkPage="/speakopen" image={ speak } title="Speak UP 1.0" description="Perfect your conversational abilities for any situation..."/>
                <CardVertical linkPage="/speakopen" image={ speak } title="Speak UP 2.0" description="Perfect your conversational abilities for any situation, BUT HARDER!!!"/>
            </div>
        </div>
    )
}