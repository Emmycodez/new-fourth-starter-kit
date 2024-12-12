import React from "react";
import leads from "@/seed/leads";
import { Ghost } from "lucide-react";

const RecentSales = ({ limit, salesData }) => {
  console.log("This is the recent sales data", salesData);
  if (salesData.length === 0)
    return (
      <div className="flex flex-col items-center justify-center py-4 text-muted-foreground space-y-4s">
        <div>No recent sales found</div>
        <div className="mt-4">
          <Ghost className="h-10 w-10" />
        </div>
      </div>
    );
  return (
    <div>
      {salesData.slice(0, limit).map((sale, index) => (
        <div key={index} className="flex items-center py-2">
          <div className="rounded-full h-9 w-9 ring-1 flex items-center justify-center bg-primary-foreground text-primary-background">
            💸
          </div>
          <div className="ml-4 space-y-1">
            <p className="font-semibold">{sale.customerName || "Unknown"}</p>
            <p className="text-sm text-muted-foreground">
              {sale.whatsapp} || &quot;N/A&quot;
            </p>
          </div>
          <div className="text-lg ml-auto font-medium">
            <span className="p-[1px]"> ₦</span> {sale.amount || "0.00"}
          </div>
        </div>
      ))}
    </div>
  );
};

{
  /* <div className="flex items-center">
<Avatar className="h-9 w-9">
  <AvatarImage src="/avatars/01.png" alt="Avatar" />
  <AvatarFallback>OM</AvatarFallback>
</Avatar>
<div className="ml-4 space-y-1">
  <p className="text-sm font-medium leading-none">Olivia Martin</p>
  <p className="text-sm text-muted-foreground">
    olivia.martin@email.com
  </p>
</div>
<div className="ml-auto font-medium">+$1,999.00</div>
</div> */
}

export default RecentSales;