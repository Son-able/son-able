import Link from "next/link";
import { api } from "~/utils/api";
import { useEffect, useReducer, useState } from "react";
import React from "react";
import { useAuth, useUser  } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

const feedTab = () => {
    const hello = api.post.hello.useQuery({ text: "from tRPC" });

    const [tab, setActiveTab] = useState("feed");

    const { isLoaded, userId, sessionId, getToken } = useAuth();

    //real bad test code lol
    const { user } = useUser();
    return (
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        Create <span className="text-primary">T3</span> App
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
        <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://create.t3.gg/en/usage/first-steps"
            target="_blank"
        >
            <h3 className="text-2xl font-bold">First Steps →</h3>
            <div className="text-lg">
            Just the basics - Everything you need to know to set up your
            database and authentication.
            </div>
            <div>
                {JSON.stringify([user?.fullName, user?.username])}
            </div>
        </Link>
        <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://create.t3.gg/en/introduction"
            target="_blank"
        >
            <h3 className="text-2xl font-bold">Documentation →</h3>
            <div className="text-lg">
            Learn more about Create T3 App, the libraries it uses, and how
            to deploy it.
            </div>
            <p>cleark data in this componet</p>
            <div>
            Hello, {userId} your current active session is {sessionId}
            </div>
        </Link>
        </div>
        </div>
    )
}

export default feedTab;