"use client";
import { useState, useEffect } from "react";

export const FirstLanding: React.FC = () => {
    const [x, setX] = useState<number>();
    const [y, setY] = useState<number>();

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            setX(e.clientX);
            setY(e.clientY);
        };

        window.addEventListener("mousemove", onMouseMove);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    return (
        <section className="flex justify-center items-center w-full h-screen cursor-pointer relative">
            <h1 className="text-7xl">Jigme Tenzin Chogyel</h1>
            {x && y && (
                <div
                    style={{
                        position: "absolute",
                        top: y-50,
                        left: x-50,
                        pointerEvents: "none",
                        width: "6rem",
                        height: "6rem",
                        borderRadius: "100%",
                        backgroundColor: "white",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <span className="text-black">Enter</span>
                </div>
            )}
        </section>
    );
};

FirstLanding.displayName = "FirstLanding";
