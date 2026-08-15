import Link from "next/link";

type SocialMediaProps = {
    onResumeUnlock?: () => void;
}

export default function SocialMedia({ onResumeUnlock } : SocialMediaProps) {
    return (
        <>
            <div className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                </svg>
                <span>-&gt; <Link href="/" className="text-blue-500 hover:underline" onClick={() =>{
                    onResumeUnlock?.();
                }}>Resume</Link></span>
            </div>

            <div className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M12 .297a12 12 0 0 0-3.794 23.398c.6.111.82-.261.82-.58v-2.257c-3.338.726-4.042-1.61-4.042-1.61-.546-1.388-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.494.998.107-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.304-.536-1.523.118-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 6 0c2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.872.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.805 5.624-5.478 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.577A12 12 0 0 0 12 .297Z" clipRule="evenodd" />
                </svg>
                <span>-&gt; <Link href="https://github.com/dronrev" className="text-blue-500 hover:underline">GitHub</Link></span>
            </div>


            <div className="flex gap-2 items-center">
                <span>-&gt; <Link href="#" className="text-blue-500 hover:underline">Blog Post</Link></span>
            </div>
        </>
    )
}