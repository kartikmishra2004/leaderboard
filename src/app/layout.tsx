import Particles from "@/components/Particles";
import "./globals.css";
import Navbar from "./_components/Navbar";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="">
        <div className="w-full h-screen fixed bg-background -z-10">
          <div className="absolute top-0 left-1/2 max-w-[100vw] transform -translate-x-1/2 -translate-y-4/5 w-[2000px] h-[1500px] rounded-full blur-3xl bg-gradient-to-b from-blue-800 via-blue-800 to-transparent opacity-50" />
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
      </body>
    </html>
  );
}
