import { CardStack } from "@/components/shares/card"
import talk from '/public/images/talk.png'
import test from '/public/images/test.png'

export default function app() {
    return (
        <div className="flex min-h-screen flex-col p-24">
            <div className="flex flex-col items-start">
                <div className="text-main-text text-left semibold-64">Speaking Module</div>
                <p className="text-sub-text regular-18 pt-4 text-justify">The cutting-edge language learning module that revolutionizes the way you practice speaking. With our innovative speech recognition technology, you can speak into your device's microphone and receive instant feedback on your pronunciation. Whether you're a beginner or advanced learner, our module provides personalized guidance to help you improve your speaking skills quickly and effectively. Say hello to immersive language learning and start speaking confidently today!</p>
            </div>
            <div className="flex flex-row pt-16 justify-center space-x-32">
                    <CardStack linkPage="/talkmenu" image={talk} title="Talk It Out!" description="Experience interactive learning: Listen, record, repeat"/>
                    <CardStack linkPage="/speechmenu" image={test} title="Speech Master Quest" description="Embark on a quest to master your speaking skills! Test your voice and conquer your speech goals..."/>
            </div>
        </div>
    )
}