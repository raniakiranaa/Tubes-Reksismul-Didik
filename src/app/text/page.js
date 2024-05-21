import { CardStack } from "@/components/shares/card"
import talk from '/public/images/fill.jpeg'
import test from '/public/images/read.jpeg'

export default function app() {
    return (
        <div className="flex min-h-screen flex-col p-24">
            <div className="flex flex-col items-start">
                <div className="text-main-text text-left semibold-64">Comprehension Module</div>
                <p className="text-sub-text regular-18 pt-4 text-justify">Dive into our comprehensive comprehension module designed to sharpen your reading and understanding skills. This module includes engaging fill-in-the-blank tasks and interactive read-and-select exercises, tailored to help you in learning Bahasa Indonesia. Whether you're preparing for an exam or simply aiming to enhance your language proficiency, our comprehension module offers the tools you need to succeed. Start your journey to better comprehension today and unlock a deeper understanding of the language!</p>
            </div>
            <div className="flex flex-row pt-16 justify-center space-x-32">
                    <CardStack linkPage="/fillmenu" image={talk} title="Fill in the Blanks" description="Type the missing letters to complete the given text."/>
                    <CardStack linkPage="/readmenu" image={test} title="Read and Select" description="Select the real English words in the list."/>
            </div>
        </div>
    )
}