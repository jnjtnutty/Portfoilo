import Image from 'next/image';

export default function Home() {
  return (<YourComponent/>)
}
const YourComponent = () => (
    <Image
        src="/test.png" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
    />
);