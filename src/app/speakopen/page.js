import speak from '/public/images/speech/speakone.png'
import Image from 'next/image';
import { Button } from '@/components/shares/button'

export default function App() {
    return (
        <div className="flex min-h-screen flex-col justify-center items-center p-24">
            <div className="text-main-text text-center semibold-64">Welcome to Speak UP!</div>
            <div className="flex flex-row items-center space-x-16">
                <div className="w-1/2 flex justify-center">
                    <Image src={ speak } className="rounded-lg h-full" alt="pic" />
                </div>
                <div className="w-1/2 flex justify-center flex-col">
                    <div className="text-sub-text regular-18 pt-4 text-justify" style={{ maxWidth: '464px' }}>
                        Perfect your conversational abilities for any situation! Engage in interactive dialogues where you can practice speaking naturally, record your responses to analyze and improve, and listen to others' conversations to gain valuable insights and refine your skills further. This immersive approach allows you to hone your communication skills effectively and confidently tackle any conversation.
                    </div>
                    <div className="flex justify-end pt-16 mr-12">
                        <Button linkPage="/speakup" title="Let's Go!" type="medium-secondary"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
