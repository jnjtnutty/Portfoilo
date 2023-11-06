import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <div className="w-full">
            <NavigateBar/>
            <Banner/>
        </div>
    )
}

const NavigateBar = () => (
    <div className="flex w-full h-8 bg-blue-300">
        <div className="flex w-full flex-row justify-evenly items-center">
            <Link href="#about" className="text-gray-50">About</Link>
            <Link href="#resume" className="text-gray-50">Resume</Link>
            <Link href="#contact" className="text-gray-50">Contact</Link>
        </div>
    </div>
)

const Banner = () => (
    <div className="flex w-full h-24 bg-blue-300 relative">
        <Image src="/nutty.gif" width={128} height={128} alt="profile pic"
               className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full border"/>
    </div>
)