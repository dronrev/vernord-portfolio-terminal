"use client";

import { useState } from "react";
import Resume from "./components/resume";
import SocialMedia from "./components/social-media";
import Terminal from "./components/terminal";
import Welcome from "@/content/welcome.mdx";

export default function Home() {
  const [showResume, setShowResume] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showContent, setShowContent] = useState(true);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex gap-[32px] row-start-2 items-center sm:items-start w-full">
        <div className="border rounded w-full max-w-4xl">
          <div
            style={{ backgroundColor: "oklch(37.1% 0 0)" }}
            className="border-b border-gray-300 flex items-center justify-between px-3 py-2"
          >
            <h2 className="text-2xl font-semibold">vernord@dronrev</h2>

            <div className="flex space-x-2">
              <span className="w-3 h-3 rounded-full bg-green-500 border border-green-700"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500 border border-yellow-700"></span>
              <span className="w-3 h-3 rounded-full bg-red-500 border border-red-700"></span>
            </div>
          </div>

          <div
            style={{ backgroundColor: "oklch(29.3% 0.136 325.661)" }}
            className="flex flex-col sm:flex-row p-2 gap-2"
          >
            <div className="sm:w-2/3">
              <p>
                {"Welcome to My Portfolio! - Type 'yow' to check supported command"}
              </p>
              <Terminal onResumeUnlock={() => setShowResume(true)} />
            </div>
            <div className="sm:w-1/3">
              <div className="flex gap-2 mb-2">
                <svg style={{ verticalAlign: "bottom" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                </svg>
                <span>
                  Vernord Musran
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <SocialMedia onResumeUnlock={() => setShowResume(true)} />
              </div>
            </div>
          </div>
        </div>
        {showContent ?
          (
            <div className="border rounded w-full max-w-4xl p-2">
              <div className="flex flex-row">
                {showResume ? (<Resume />) : (<div><Welcome /></div>)}
                <div>
                  <button onClick={() => setShowContent(false)} aria-label="Close" className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ) : (<></>)}


      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
