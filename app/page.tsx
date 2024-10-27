import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { Poppins } from "next/font/google";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-gradient-to-b from-sky-400 to-blue-500">
      <div className="space-y-6 text-center">
        <h1 className={cn("text-6xl fontsimibold text-white drop-shadow-md mr-[15px]", font.className)}>🔒Auth</h1>
        <p>A Simple Authentication Service</p>
        <LoginButton>
          <Button variant={"secondary"} size="lg">Sign In</Button>
        </LoginButton>
      </div>
    </main>
  );
}