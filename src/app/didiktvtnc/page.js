import { CardTnC }from "@/components/shares/card/CardTnC"
// import word from '/public/images/im.png'
// import speak from '/public/images/speak.png'

export default function app() {
    return (
        <div className="flex min-h-screen flex-col p-24">
            <div className="flex flex-col items-start">
                <div className="text-main-text text-left semibold-64">Terms and Conditions</div>
                <p className="text-sub-text regular-18 pt-4 text-justify">Before having some fun learning with new friends, do read the terms and conditions of DidikTV below. If you agree, we will then proceed to DidikTV!</p>
            </div>
            <div className="flex flex-row pt-16 justify-center">
                <CardTnC />
            </div>
        </div>
    )
}