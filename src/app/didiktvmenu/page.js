import menuicon from '/public/images/didiktv/menu.PNG'
import Image from 'next/image';
import { Button } from '@/components/shares/button'

export default function App() {
    return (
        <div className="flex min-h-screen flex-col justify-center items-center p-24">
            <div className="text-main-text text-center semibold-64 mb-8">Welcome to Didik TV!</div>
            <div className="flex flex-row items-center space-x-16">
                <div className="w-1/2 relative top-[-90px]">
                    <Image src={menuicon} className="rounded-lg h-full" alt="pic" width={450} height={300} />
                </div>
                <div className="w-1/2 flex justify-center flex-col">
                    <div className="text-sub-text regular-18 pt-4 text-justify" style={{ maxWidth: '464px' }}>
                    Discover the joy of learning Bahasa Indonesia with our video call conference feature! Connect with fellow language enthusiasts from around the world in real-time. Whether you're a beginner or looking to polish your skills, engage in lively conversations, practice pronunciation, and exchange cultural insights. Join us today and start your journey to mastering Bahasa Indonesia. Let's learn together!
                    </div>
                    <div className="flex justify-end pt-16 mr-12">
                        <Button linkPage="/videocall" title="Let's Go!" type="medium-secondary"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
