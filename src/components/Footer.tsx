import Link from 'next/link';

import { BsTwitterX } from 'react-icons/bs';
import { IoLogoLinkedin } from 'react-icons/io';
import { FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="min-w-screen sticky top-0 z-20 flex h-[64px] flex-row items-center justify-between bg-black">
            <div className="m-4 flex flex-row items-center gap-2 p-2">
                {}
            </div>
            <div className="flex flex-row items-center gap-1">
                <Link
                    href="/privacy"
                    rel="noopener noreferrer"
                    target="_blank"
                    className={`text-md mx-1 flex gap-1 rounded-full border-b-[1px] border-b-white/10 px-6 py-3 [&>*]:my-auto`}
                >
                    <div className="font-gilroy text-white">Privacy</div>
                </Link>
                <span className="mx-4 text-white">
                    © 2024 Spyn, Inc. All rights reserved.
                </span>
            </div>
        </div>
    );
}