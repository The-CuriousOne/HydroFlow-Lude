"use client";

import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useSession } from "next-auth/react";

export default function Page() {
    const { data: session } = useSession();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchUserData() {
            try {
                if (!session?.user?.username) {
                    setError("User not logged in");
                    setLoading(false);
                    return;
                }

                const response = await fetch("/api/user", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ username: session.user.username }),
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch user data");
                }

                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error("Error fetching user:", error);
                setError("Failed to load user data");
            } finally {
                setLoading(false);
            }
        }

        fetchUserData();
    }, [session]);

    const handleLogout = async () => {
        await signOut({ redirect: true, callbackUrl: "/" });
    };

    if (loading) return <div className="text-center text-gray-600">Loading...</div>;
    if (error) return <div className="text-center text-red-500">{error}</div>;

    return (
        <div className="w-full min-h-[55rem] max-w-[100vw] box-border bg-[url('/images/dashboardBackground.jpg')] text-black flex flex-col justify-center items-center">
            <div className="m-[10em] flex flex-col justify-center items-center">
                <div className="w-[10rem] h-[10rem]">
                    <Image
                        src={user.profileImage} 
                        alt="Profile Image"
                        width={500} 
                        height={300} 
                        className="rounded-full"
                    />
                </div>
                <div className="pt-[3rem] pb-[3rem] w-[300px]">
                    <div className="text-lg font-bold mb-2 flex flex-col justify-center items-center">User Name: {user.username}</div>
                    <div className="text-lg font-semibold mb-4 flex flex-col justify-center items-center">Name: {user.fullName}</div>
                    <div className="text-lg font-semibold flex flex-col justify-center items-center">Email Id: {user.email}</div>
                </div>
                <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Log Out
                </button>
            </div>
        </div>
    );
}
