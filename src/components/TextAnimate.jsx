import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const texts = [
    "Innovate.",
    "Create.",
    "Transform.",
    "Build.",
    "Inspire."
];

export default function AnimatedText() {
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState(texts[0]);
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            let charIndex = texts[index].length;
            const oldText = texts[index];
            const newIndex = (index + 1) % texts.length;
            const newText = texts[newIndex];

            const vanishInterval = setInterval(() => {
                setDisplayText(oldText.slice(0, charIndex));
                charIndex--;
                if (charIndex < 0) {
                    clearInterval(vanishInterval);
                    let revealIndex = 0;
                    const revealInterval = setInterval(() => {
                        setDisplayText(newText.slice(0, revealIndex + 1));
                        revealIndex++;
                        if (revealIndex === newText.length) {
                            clearInterval(revealInterval);
                            setIndex(newIndex);
                            setAnimationKey((prev) => prev + 1);
                        }
                    }, 100);
                }
            }, 100);
        }, 2500);
        return () => clearInterval(interval);
    }, [index]);

    return (
        <div className="relative h-16 flex items-center justify-center overflow-hidden text-3xl font-bold text-white">
            <motion.span
                key={animationKey}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute"
            >
                {displayText}
            </motion.span>
        </div>
    );
}
