"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import PlantInfoCard from "@/components/PlantInfoCard";
import "./swiper-custom.css"; 
import { useSession } from "next-auth/react";

export default function Dashboard() {
    const { data: session } = useSession();
    const [plantData, setPlantData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPlants() {
            try {
                
                const username = session.user.username;

                if (!username) {
                    console.error("No username found in localStorage");
                    setError("No username found.");
                    setLoading(false);
                    return;
                }

                const response = await fetch("/api/plants", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ username }), 
                });

                const data = await response.json();
                console.log("API Response:", data);

                if (response.ok) {
                    setPlantData(data.plants);
                } else {
                    console.error("Error fetching plant data:", data.error);
                    setError(data.error);
                }
            } catch (error) {
                console.error("Error fetching plant data:", error);
                setError("Failed to fetch data.");
            } finally {
                setLoading(false);
            }
        }

        fetchPlants();
    }, []);

    if (loading) return <div className="w-full min-h-[55rem] max-w-[100vw] p-[5rem] box-border bg-[url('/images/dashboardBackground.jpg')] text-black">Loading plant data...</div>;
    if (error) return <div className="text-red-500">Error: {error}</div>;

    return (
        <div className="w-full min-h-[55rem] max-w-[100vw] p-[5rem] box-border bg-[url('/images/dashboardBackground.jpg')] text-black">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={Math.min(plantData.length, 3)} 
                navigation
                pagination={{ clickable: true }}
                loop={true}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: Math.min(plantData.length, 3) },
                }}
                className="w-full h-[45rem] px-[5rem] py-[10rem] flex justify-center items-center"
            >
                {plantData.map((plant, index) => (
                    <SwiperSlide key={index} className="flex justify-center items-center h-full"> 
                        <div className="flex justify-center items-center h-full">
                            <PlantInfoCard 
                                plantName={plant.plantName}
                                pH={plant.pH}
                                tds={plant.tds}
                                temperature={plant.temperature}
                                water={plant.water}
                                humidity={plant.humidity}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
