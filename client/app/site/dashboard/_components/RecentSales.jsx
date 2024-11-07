import React from "react";
import leads from "@/seed/leads";

const RecentSales = ({limit}) => {
  return (
    <div>
      {leads.slice(0, limit).map((lead, index) => (
        <div key={index} className="flex items-center py-2">
          <div className="rounded-full h-9 w-9 ring-1 flex items-center justify-center bg-primary-foreground text-primary-background">💸</div>
          <div className="ml-4 space-y-1">
            <p className="font-semibold">{lead.name}</p>
            <p className="text-sm text-muted-foreground">{lead.whatsapp}</p>
          </div>
          <div className="text-lg ml-auto font-medium">
            <span className="p-[1px]"> ₦</span> {lead.payment}
          </div>
        </div>
      ))}
    </div>
  );
};

{/* <div className="flex items-center">
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
</div> */}

export default RecentSales;
