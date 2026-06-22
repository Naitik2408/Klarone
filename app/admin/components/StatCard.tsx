import { ArrowUpRight, ArrowDownRight, LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  icon: LucideIcon;
  value: string;
  trend: number;
  trendLabel: string;
  subtitle?: string;
  subValue?: string;
}

export default function StatCard({ title, icon: Icon, value, trend, trendLabel, subtitle, subValue }: StatCardProps) {
  const isPositive = trend >= 0;

  return (
    <Card className="h-full flex flex-col border-[#dddddd] shadow-none rounded-[10px]">
      <CardContent className="p-6 flex flex-col justify-between flex-1">
        <div className="flex items-center gap-2 mb-2">
          <Icon className="w-[18px] h-[18px] text-[#41454d]" />
          <span className="text-[12px] font-medium text-[#41454d] tracking-wider uppercase">{title}</span>
        </div>
        
        <div className="flex items-end justify-between mb-2">
          <div className="text-[32px] font-medium text-[#181d26] leading-none">{value}</div>
          <ArrowUpRight className="w-5 h-5 text-[#9297a0] mb-1" />
        </div>

        <div className="flex items-center gap-3 text-[14px]">
          <div className={`flex items-center gap-1 px-1.5 py-0.5 rounded-[6px] ${isPositive ? 'bg-[#e6f4ea] text-[#137333]' : 'bg-[#fce8e6] text-[#c5221f]'} font-medium`}>
            {isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
            {Math.abs(trend)}%
          </div>
          <span className="text-[#41454d]">{trendLabel}</span>
        </div>

        {subtitle && subValue && (
          <div className="mt-4 pt-4 border-t border-[#dddddd] flex items-center justify-between text-[14px]">
            <span className="text-[#41454d]">{subtitle}</span>
            <span className="font-medium text-[#181d26]">{subValue}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
