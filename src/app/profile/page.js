"use client";

import { signOut } from "next-auth/react";

export default function Page() {
    const handleLogout = async () => {
        await signOut({ redirect: true, callbackUrl: "/" });
    };

    return(
        <div>
            <button
                onClick={handleLogout}
                className="w-full min-h-[55rem] max-w-[100vw] p-[5rem] box-border bg-[url('/images/dashboardBackground.jpg')] text-black"
            >
                Log Out
            </button>
        </div>
    )
}