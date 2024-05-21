import word from '/public/images/fill/write.PNG'
import Image from 'next/image';
import { Button } from '@/components/shares/button'

export default function App() {
    return (
        <div className="flex min-h-screen flex-col justify-center items-center p-24">
            <div className="text-main-text text-center semibold-64 mb-8">Welcome to Fill in the Blanks!</div>
            <div className="flex flex-row items-center space-x-16">
                <div className="w-1/2">
                    <Image src={word} className="rounded-lg h-full" alt="pic" width={450} height={300} />
                </div>
                <div className="w-1/2 flex justify-center flex-col">
                    <div className="text-sub-text regular-18 pt-4 text-justify" style={{ maxWidth: '464px' }}>
                    This engaging exercise challenges you to think critically and expand your vocabulary by identifying and filling in missing words. Perfect for learners of all levels, this activity not only improves your language skills but also boosts your comprehension and spelling abilities. Dive into our interactive passages, complete the words, and watch your language proficiency soar. Ready to test your skills? Let’s get started and fill in the blanks!
                    </div>
                    <div className="flex justify-end pt-16 mr-12">
                        <Button linkPage="/fill" title="Let's Go!" type="medium-secondary"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
