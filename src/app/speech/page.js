import { CardStack } from "@/components/shares/card"
import talk from '/public/images/speech/word.png'
import test from '/public/images/speech/speak.png'

export default function app() {
    return (
        <div className="flex min-h-screen flex-col p-24">
            <div className="flex flex-col items-start">
                <div className="text-main-text text-left semibold-64">Speaking Module</div>
                <p className="text-sub-text regular-18 pt-4 text-justify">The cutting-edge language learning module that revolutionizes the way you practice speaking. With our innovative speech recognition technology, you can speak into your device's microphone and receive instant feedback on your pronunciation. Whether you're a beginner or advanced learner, our module provides personalized guidance to help you improve your speaking skills quickly and effectively. Say hello to immersive language learning and start speaking confidently today!</p>
            </div>
            <div className="flex flex-row pt-16 justify-center space-x-32">
                    <CardStack linkPage="/wordopen" image={talk} title="Wordplay" description="Master your pronunciation with a little wordplay! Immerse yourself in a captivating journey where you'll hear various speakers express a myriad..."/>
                    <CardStack linkPage="/speakopen" image={test} title="Speak UP" description="Perfect your conversational abilities for any situation! Engage in interactive dialogues where you can practice speaking naturally, record your responses..."/>
            </div>
        </div>
    )
}
