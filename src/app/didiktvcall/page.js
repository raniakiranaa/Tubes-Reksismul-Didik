import call1 from '/public/images/didiktv/call1.PNG'
import call2 from '/public/images/didiktv/call2.PNG'
import Image from 'next/image';
import Link from 'next/link'; // Import Link from Next.js

export default function app() {
    return (
        <div className="flex min-h-screen flex-col p-24">
            <div className="flex flex-col items-start">
                <div className="text-main-text text-left semibold-64">Video Conference</div>
            </div>
            
            <div className="flex flex-col pt-8 items-center w-full margin:0; padding:0;">
             {/* Video Section */}
                <div className="flex flex-row justify-center w-full max-w-5xl mb-8 space-x-4 margin:0; padding:0;">
                    <Image src={call1} className="rounded-lg h-full self-center object-fit: cover" alt="pic"/>
                    <Image src={call2} className="rounded-lg h-full self-center object-fit: cover" alt="pic"/>
                </div>
            </div>

            <div className="flex justify-center w-full">
                <div className="flex justify-between w-full max-w-7xl p-5 bg-gray-100 rounded-md shadow-md" style={{ maxWidth: '130rem' }}>
                    {/* Use Link component to navigate to "/home" */}
                    <Link href="/home">
                        <button className="bg-red-500 text-white px-12 py-10 rounded-md text-4xl mr-3 w-64">Exit</button>
                    </Link>
                    <div className="flex items-center text-2xl text-gray-600 ml-3">
                      <p>Note: Remember to always be respectful and avoid controversial or inappropriate topics during your conversation. Let's keep our discussions friendly and focused on learning Bahasa Indonesia. Enjoy your fun time learning Bahasa Indonesia through DidikTV! </p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}