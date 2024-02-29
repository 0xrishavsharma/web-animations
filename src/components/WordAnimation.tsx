"use client";
import { Paragraph } from "@/types/types";
import { useScroll, motion } from "framer-motion";
import React, { useRef } from "react";

type WordAnimationProps = {
    paragraph: string;
};
const WordAnimation: React.FC<WordAnimationProps> = ({ paragraph }) => {
    const elementRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: elementRef,
        offset: ["start 0.9", "start 0.3"],
    });
    return (
        <motion.div
            className='flex items-center justify-center text-4xl  max-w-[1284px]'
            style={{ opacity: scrollYProgress }}
            ref={elementRef}
        >
            {paragraph}
        </motion.div>
    );
};

export default WordAnimation;
