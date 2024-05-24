import word from '/public/images/read/phone.png'
import Image from 'next/image';
import { Button } from '@/components/shares/button'

export default function App() {
    return (
        <div className="flex min-h-screen flex-col justify-center items-center p-24">
            <div className="text-main-text text-center semibold-64 mb-8">Welcome to Beginner Mode!</div>
            <div className="flex flex-row items-center space-x-16">
                <div className="w-1/2">
                    <Image src={word} className="rounded-lg h-full" alt="pic" />
                </div>
                <div className="w-1/2 flex justify-center flex-col">
                    <div className="text-sub-text regular-18 pt-4 text-justify" style={{ maxWidth: '464px' }}>
                    This interactive activity challenges you to read through a series of words and identify which ones are genuine Indonesian terms. Perfect for learners aiming to deepen their understanding of the language, this exercise not only improves your vocabulary but also hones your ability to discern authentic words. Dive into the list, make your selections, and boost your language skills with Read and Select. Ready to test your knowledge? Let's begin and find the real Indonesian words!
                    </div>
                    <div className="flex justify-end pt-16 mr-12">
                        <Button linkPage="/read/0" title="Let's Go!" type="medium-secondary"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
