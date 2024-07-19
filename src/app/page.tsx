import Image from "next/image";
import Head from 'next/head';
import Link from 'next/link';

import { GoArrowUpRight } from 'react-icons/go';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { FaBookOpenReader } from 'react-icons/fa6';
import { HiOutlinePaintBrush } from 'react-icons/hi2';

import { Suspense } from 'react';
import Content from "@/components/FAQ";
import ContactUs from "@/components/Contact";

export default function Home() {
    const DemoVideo = () => {
        return (
            <iframe
                width="768"
                height="432"
                src="https://www.loom.com/embed/60713ae899934c6aa32e658ae4170e4f?sid=7fade96c-5a32-4c6a-bb8a-a445a96fe7c6" 
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded"
            ></iframe>
        );
    };

    const FeatureFragment = ({
        icon,
        title,
        content
    }: {
        icon: JSX.Element;
        title: string;
        content: string;
    }) => {
        return (
            <div className="flex h-[250px] w-[30%] flex-col items-center gap-6 rounded-md border-2 bg-white border-stone-300 p-6">
                <div className="flex w-[30px] text-xl [&>*]:mx-auto">
                    {icon}
                </div>
                <div className="font-gilroy text-2xl">{title}</div>
                <div className="font-gilroy text-stone-600">{content}</div>
            </div>
        );
    };

  return (
      <div className="flex min-h-screen w-screen flex-col items-center justify-center gap-4 bg-slate-100 p-12">
            <Head>
                <title>Mediwell Landing Page</title>
            </Head>
            <>
                <h1 className="m-4 font-gilroy text-center text-5xl font-bold">
                    AI-powered SaaS for Advanced CRM in Healthcare and Wellness
                </h1>
                <h3 className="m-4 w-2/3 text-center font-montserrat text-3xl font-thin">
                    We consult with healthcare and wellness practices to build custom AI SaaS solutions that transform customer relationship management
                </h3>
                <Link
                    href="https://share-medical-live-fithub-crm.netlify.app/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className={`text-md mx-1 flex flex-row gap-1 rounded-full border-b-[1px] border-b-white/10 bg-gray-950 px-6 py-3 hover:bg-gray-600 [&>*]:my-auto`}
                >
                    <div className="font-gilroy text-white">
                        Try the Demo
                    </div>
                    <GoArrowUpRight className="text-md text-white" />
                </Link>
                <div className="m-4">
                    <Suspense fallback={<p>Loading demo...</p>}>
                        <DemoVideo />
                    </Suspense>
                </div>
            </>
            <>
                <div className="m-8 flex flex-row items-center justify-center gap-10">
                    <FeatureFragment
                        title="Realtime Transcriptions"
                        content="Seamlessly transcribe multilingual patient consultations into text in real time, ensuring every word is captured accurately and efficiently"
                        icon={<FaBookOpenReader />}
                    />
                    <FeatureFragment
                        title="Generate Insights"
                        content="Use AI to instantly generate clinical insights with realtime probing questions for improved patient outsomes"
                        icon={<HiOutlinePaintBrush />}
                    />
                    <FeatureFragment
                        title="Analyze Unstructured Data"
                        content="Transform unstructured health data into meaningful information saving hours in personalized care delivery"
                        icon={<BsGrid3X3GapFill />}
                    />
                </div>
            </>
            <>
                <h1 className="mt-4 font-gilroy text-4xl font-bold">
                    Frequently asked questions
                </h1>
                <h3 className="mb-4 w-2/3 text-center font-montserrat text-2xl font-thin">
                    Everything you need to know about the product and billing
                </h3>
                <Content></Content>
            </>
            <>
                <h1 className="mt-4 font-gilroy text-4xl font-bold">
                    Contact Us
                </h1>
                <h3 className="mb-4 w-2/3 text-center font-montserrat text-2xl font-thin">
                    Use this form to send us a message and we will get back to you within 24 hours
                </h3>
                <ContactUs />
            </>
        </div>
  );
}
