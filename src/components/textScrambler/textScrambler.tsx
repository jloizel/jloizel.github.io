import React, { useEffect, useRef, useState } from 'react';

interface TextScramblerProps {
    phrases: string[];
}

const TextScrambler: React.FC<TextScramblerProps> = ({ phrases }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const frameRef = useRef<number>();
    const chars = '!<>-_\\/[]{}—=+*^?#________';

    useEffect(() => {
        const setText = (newText: string) => {
            const oldText = currentText;
            const length = newText.length; // Use the length of the new text
            const promise = new Promise<void>((resolve) => (resolve));
            const queue: Array<{ from: string; to: string; start: number; end: number; char?: string }> = [];

            for (let i = 0; i < length; i++) {
                const from = oldText[i] || '';
                const to = newText[i] || '';
                const start = Math.floor(Math.random() * 40);
                const end = start + Math.floor(Math.random() * 40);
                queue.push({ from, to, start, end });
            }

            const update = (frame: number) => {
                let output = '';
                let complete = 0;

                for (let i = 0, n = queue.length; i < n; i++) {
                    let { from, to, start, end, char } = queue[i];

                    if (frame >= end) {
                        complete++;
                        output += to;
                    } else if (frame >= start) {
                        if (!char || Math.random() < 0.28) {
                            char = chars[Math.floor(Math.random() * chars.length)];
                            queue[i].char = char;
                        }
                        output += `<span class="dud">${char}</span>`;
                    } else {
                        output += from;
                    }
                }

                setCurrentText(output);

                if (complete === queue.length) {
                    cancelAnimationFrame(frameRef.current!);
                } else {
                    frameRef.current = requestAnimationFrame(() => update(frame + 1));
                }
            };

            cancelAnimationFrame(frameRef.current!);
            frameRef.current = requestAnimationFrame(() => update(0));
            return promise;
        };

        const next = () => {
            setText(phrases[currentIndex]).then(() => {
                setTimeout(() => {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
                }, 3000); // Change every 3 seconds
            });
        };

        const intervalId = setInterval(next, 3000);
        next();

        return () => clearInterval(intervalId);
    }, [currentText, currentIndex, phrases]);

    return <div className="text-container" dangerouslySetInnerHTML={{ __html: currentText }} />;
};

export default TextScrambler;
