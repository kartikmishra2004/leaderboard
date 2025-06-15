'use client';

import Particles from "@/components/Particles";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LennisWrapper from "@/utils/LennisWrapper";
import Footer from "./_components/Footer";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const [bgColorClass, setBgColorClass] = useState("bg-background");
  const [gradient, setGradient] = useState("from-blue-800 via-blue-800");

  useEffect(() => {
    // Customize route-specific background logic here
    if (pathname === "/raingg") {
      setBgColorClass("bg-background");
      setGradient('from-blue-800 via-blue-800')
    } else if (pathname === "/clashgg" || pathname === "/clashgg-prev") {
      setBgColorClass("clashGG bg-background");
      setGradient('from-green-800 via-green-800')
    } else {
      setBgColorClass("bg-background");
    }
    // Add more colors
  }, [pathname]);

  return (
    <html lang="en">
      <body className="">
        <LennisWrapper>

          <div className={`w-full h-screen fixed ${bgColorClass} -z-10 transition-colors duration-500`}>
            <div className={`absolute top-0 left-1/2 max-w-[100vw] transform -translate-x-1/2 -translate-y-4/5 w-[2000px] h-[1500px] rounded-full blur-3xl bg-gradient-to-b ${gradient} to-transparent opacity-50`} />
            <Particles
              particleColors={['#ffffff', '#ffffff']}
              particleCount={400}
              particleSpread={30}
              speed={0.04}
              particleBaseSize={100}
              moveParticlesOnHover={false}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>
          <Navbar />
          {children}
          <Footer />
        </LennisWrapper>
      </body>
    </html>
  );
}
