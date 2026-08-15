"use client";

import { useEffect, useRef, useState } from "react";

const PROMPT_USER = "vernord@dronrev";
const PROMPT_PATH = "~";

type HistoryEntry = {
    command: string;
    output: React.ReactNode;
    isError?: boolean;
};

function runCommand(command: string): { output: React.ReactNode; isError?: boolean } {
    switch (command.trim().toLowerCase()) {
        case "":
            return { output: "" };
        case "about":
            return { output: "Please don't ask me to fix your printer. I'm a software engineer, not a doctor. I can save you as a pdf." };
        case "projects":
            return {
                output:
                    "Here are some of my projects:\n1. Tombonuo Dictionary - project A\n2. Liga - project B",
            };
        case "contact":
            return { output: "Email: vernordmusran27@gmail.com" };
        case "resume":
            return { output: "Unlocked resume panel ->" };
        case "admin":
            return {
                output: (
                    <>
                        {"Congrats, you found a secret command!\n"}
                        <a
                            href="https://youtu.be/dQw4w9WgXcQ?si=I4sAbdAM-qXuKElo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            Click here!
                        </a>
                    </>
                ),
            };
        case "yow":
            return { output: "Supported commands: about, projects, contact, resume, clear, yow" };
        default:
            return {
                output: `Error: Command '${command}' not found. Type 'yow' to see the list of supported commands.`,
                isError: true,
            };
    }
}

type TerminalProps = {
    onResumeUnlock?: () => void;
};

export default function Terminal({ onResumeUnlock }: TerminalProps) {
    const [history, setHistory] = useState<HistoryEntry[]>([]);
    const [input, setInput] = useState("");
    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
    }, [history]);

    function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
        if (e.key !== "Enter") return;
        e.preventDefault();

        const command = input;
        setInput("");

        if (command.trim().toLowerCase() === "clear") {
            setHistory([]);
            return;
        }

        if (command.trim().toLowerCase() === "resume") {
            onResumeUnlock?.();
        }

        const { output, isError } = runCommand(command);
        setHistory((prev) => [...prev, { command, output, isError }]);
    }

    return (
        <div onClick={() => inputRef.current?.focus()}>
            <div ref={scrollRef} className="max-h-64 overflow-y-auto">
                {history.map((entry, i) => (
                    <div key={i}>
                        <div className="flex flex-wrap gap-1">
                            <span>{PROMPT_USER}</span>
                            <span>{PROMPT_PATH}</span>
                            <span>$</span>
                            <span>{entry.command}</span>
                        </div>
                        {entry.output && (
                            <div
                                className={`whitespace-pre-wrap ${entry.isError ? "text-red-500" : ""
                                    }`}
                            >
                                {entry.output}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="flex items-center gap-1">
                <span>{PROMPT_USER}</span>
                <span>{PROMPT_PATH}</span>
                <span>$</span>
                <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    rows={1}
                    autoFocus
                    aria-label="Terminal command input"
                    className="flex-1 bg-transparent focus:outline-none resize-none"
                />
            </div>
        </div>
    );
}
