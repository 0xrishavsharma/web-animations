"use client";
import CharacterAnimation from "@/components/CharacterAnimation";
import ParagraphAnimation from "@/components/ParagraphAnimation";
import WordAnimation from "@/components/WordAnimation";
import { useScroll, motion } from "framer-motion";

const paragraph: string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

export default function Home() {
    const { scrollYProgress } = useScroll();
    return (
        <main className='relative'>
            <div>
                <motion.div
                    className='sticky top-0 left-0 bg-red-500 h-3'
                    style={{ scaleX: scrollYProgress }}
                />
                <div className='min-h-screen' />
                <ParagraphAnimation paragraph={paragraph} />
                <div className='min-h-screen' />
                <WordAnimation paragraph={paragraph} />
                <div className='min-h-screen' />
                <CharacterAnimation paragraph={paragraph} />
                <div className='min-h-screen' />
            </div>
        </main>
    );
}
