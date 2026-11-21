import { BrandCredit } from "@/components/layout/footer";
import { Outlet } from "react-router-dom";

export default function AuthLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="flex flex-1 items-center justify-center p-4">
        {children || <Outlet />}
      </div>
      <footer className="flex justify-center px-4 pb-4">
        <BrandCredit />
      </footer>
    </div>
  );
}
