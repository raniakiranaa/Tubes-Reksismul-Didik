import { CardVertical } from "@/components/shares/card"
import word from '/public/images/word/one.png'
import Image from 'next/image';
import { Button } from '@/components/shares/button'

export default function App() {
    return (
        <div className="flex min-h-screen flex-col justify-center items-center p-24">
            <div className="text-main-text text-center semibold-64">Welcome to Wordplay!</div>
            <div className="flex flex-row items-center space-x-16">
                <div className="w-1/2">
                    <Image src={word} className="rounded-lg h-full" alt="pic" />
                </div>
                <div className="w-1/2 flex justify-center flex-col">
                    <div className="text-sub-text regular-18 pt-4 text-justify" style={{ maxWidth: '464px' }}>
                    Master your pronunication with a little wordplay! Immerse yourself in a captivating journey where you'll hear various speakers express a myriad of synonyms for captivating images. Dive into the rich tapestry of language and let your pronunciation skills soar with Wordplay!"
                    </div>
                    <div className="flex justify-end pt-16 mr-12">
                        <Button title="Let's Go!" type="medium-secondary"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
