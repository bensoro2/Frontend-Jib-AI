import { SidebarTrigger } from "@/components/ui/sidebar";
import { ShoppingCart, Sun, User } from "lucide-react";

export const HeaderDashboard = () => {
  return (
    <header className="sticky top-0 flex h-16 w-full shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 z-50">
      <div className="flex items-center justify-between gap-2 px-3 w-full md:px-4 ">
        <div className="flex items-center justify-start gap-2">
          <SidebarTrigger className="-ml-1 w-8 h-8 [&_svg]:size-6 md:[&_svg]:size-4 dark:text-darktext" />
        </div>
        <div className="flex items-center justify-end gap-2">
          <div className="w-[34px] h-[34px] flex items-center justify-center rounded-full border-[0.1px] border-white">
            <Sun className="w-[18px] h-[18px]" />
          </div>
          <div className="w-[34px] h-[34px] flex items-center justify-center rounded-full">
            <User className="w-[18px] h-[18px]" />
          </div>
          <div className="w-[34px] h-[34px] flex items-center justify-center rounded-full">
            <ShoppingCart className="w-[18px] h-[18px]" />
          </div>
        </div>
      </div>
    </header>
  );
};
