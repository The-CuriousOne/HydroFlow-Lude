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
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
                Log Out
            </button>
        </div>
    )
}