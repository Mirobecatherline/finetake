
"use client"

import Image from "next/image";
import Login from "./login/page";
import { useAuth } from "./context/AuthContext";


export default function Home() {
  const { user, logOut } = useAuth();

  if (!user) {
    return <Login />;
  }

  return (
    <div classNameName="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <button onClick={logOut}>Sign out</button>
      <main classNameName="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       
        <ol classNameName="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li classNameName="mb-2">
           Finetake : Get started by {" "}
            <code classNameName="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              creating a folder under application folder and have a page.jsx file where you will write your code
              . To access your page you will navigate application/your-folder-name
            </code>
            .
          </li>
          <li>Save and see your changes instantly. run application by running *npm run dev*</li>
        </ol>

       
      </main>
      
    </div>
  );
}
