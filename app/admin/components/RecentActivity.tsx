import { Clock, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function RecentActivity() {
  return (
    <Card className="h-full border-[#dddddd] shadow-none rounded-[10px]">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Clock className="w-[18px] h-[18px] text-[#41454d]" />
            <span className="text-[12px] font-medium text-[#41454d] tracking-wider uppercase">Recent Activity</span>
          </div>
          <button className="w-8 h-8 flex items-center justify-center border border-[#dddddd] rounded-[6px] text-[#41454d] hover:bg-[#f8fafc]">
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <div>
            <span className="text-[14px] text-[#41454d] mb-4 block font-medium">Outgoing Products</span>
            <div className="flex items-center justify-between p-4 border border-[#dddddd] rounded-[10px] bg-white">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-[6px] bg-[#f8fafc] flex items-center justify-center p-2">
                  <img src="/top/top1.webp" alt="Jacket" className="w-full h-full object-contain mix-blend-multiply" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[14px] font-medium text-[#181d26]">Red Jacket</span>
                  <div className="flex items-center gap-2 text-[14px] text-[#41454d]">
                    <span>Qty: 2</span>
                    <span className="text-[#c5221f]">5 minutes ago</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-[14px] font-medium text-[#181d26]">$1,500</span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-[14px] text-[#41454d] mb-4 block font-medium">Incoming Products</span>
            <div className="flex items-center justify-between p-4 border border-[#dddddd] rounded-[10px] bg-white">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-[6px] bg-[#f8fafc] flex items-center justify-center p-2">
                  <img src="/top/top2.webp" alt="Jacket" className="w-full h-full object-contain mix-blend-multiply" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[14px] font-medium text-[#181d26]">Black Jacket</span>
                  <div className="flex items-center gap-2 text-[14px] text-[#41454d]">
                    <span>Qty: 5</span>
                    <span>1 hour ago</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-[14px] font-medium text-[#181d26]">$2,800</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
