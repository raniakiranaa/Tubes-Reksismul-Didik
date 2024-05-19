import { CardVertical } from "@/components/shares/card"
import word from '/public/images/im.png'
import speak from '/public/images/speak.png'

export default function app() {
    return (
        <div className="flex min-h-screen flex-col p-24">
            <div className="flex flex-col items-start">
                <div className="text-main-text text-left semibold-64">Speech Master Quest</div>
                <p className="text-sub-text regular-18 pt-4 text-justify">Embark on a quest to master your speaking skills! Test your voice and conquer your speech goals with Speech Master Quest. Dive into immersive language learning where challenges await at every turn. From pronunciation perfection to mastering conversational fluency, this interactive journey equips you with the tools and feedback needed to level up your speaking abilities. Join fellow adventurers, track your progress, and unlock achievements as you journey towards linguistic mastery. Are you ready to embark on the ultimate quest to become a confident communicator?</p>
            </div>
            <div className="flex flex-row pt-16 justify-center">
                <CardVertical image={ word } title="Level 1.0" description="Put your speaking skills to the test!"/>
                <CardVertical image={ word } title="Level 2.0" description="Put your speaking skills to the test!"/>
            </div>
            <div className="flex flex-row pt-16 justify-center">
                <CardVertical image={ speak } title="Level 3.0" description="Put your speaking skills to the test!"/>
                <CardVertical image={ speak } title="Level 4.0" description="Put your speaking skills to the test!"/>
            </div>
        </div>
    )
}