import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const WebsiteLogo = () => {
        return (
            <div className="flex flex-row">
                <div className="text-bold mx-2 mt-2 font-gilroy text-2xl">
                    Mediwell AI
                </div>
            </div>
        );
    };

    return (
        <div className="min-w-screen sticky top-0 z-20 flex h-[64px] flex-row items-center bg-slate-100 justify-between">
            <div className="m-4 p-2">
                <WebsiteLogo />
            </div>
            <div className="m-4 flex flex-row gap-8 p-2">
                <Link
                    href="/"
                    className={`text-md mx-1 flex gap-1 rounded-full border-b-[1px] border-b-white/10 px-6 py-3 hover:bg-blue-600 hover:text-white [&>*]:my-auto`}
                >
                    <div className="font-gilroy">Home</div>
                </Link>
                <Link
                    href="#demo"
                    className={`text-md mx-1 flex gap-1 rounded-full border-b-[1px] border-b-white/10 px-6 py-3 hover:bg-blue-600 hover:text-white [&>*]:my-auto`}
                >
                    <div className="font-gilroy">Demo</div>
                </Link>
                <Link
                    href="#faqs"
                    className={`text-md mx-1 flex gap-1 rounded-full border-b-[1px] border-b-white/10 px-6 py-3 hover:bg-blue-600 hover:text-white [&>*]:my-auto`}
                >
                    <div className="font-gilroy">FAQs</div>
                </Link>
                <Link
                    href="#contact"
                    className={`text-md mx-1 flex gap-1 rounded-full border-b-[1px] border-b-white/10 px-6 py-3 hover:bg-blue-600 hover:text-white [&>*]:my-auto`}
                >
                    <div className="font-gilroy">Contact Us</div>
                </Link>
            </div>
        </div>
    );
}
