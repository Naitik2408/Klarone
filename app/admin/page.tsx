import { Tag, ShoppingCart, Users, HeadphonesIcon } from "lucide-react";
import StatCard from "./components/StatCard";
import { ChannelPerformance, AverageSales, TopProducts, TotalVisitor } from "./components/DashboardCharts";
import RecentActivity from "./components/RecentActivity";

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-4 max-w-[1600px] mx-auto">
      
      {/* Top Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Products (Models)"
          icon={Tag}
          value="142"
          trend={2.4}
          trendLabel="New models added"
        />
        <StatCard
          title="Total Inventory Units"
          icon={ShoppingCart}
          value="1,248"
          trend={12.5}
          trendLabel="Units in stock"
        />
        <StatCard
          title="Rented Units"
          icon={Users}
          value="482"
          trend={4.2}
          trendLabel="Active rentals"
        />
        <StatCard
          title="Inventory Value"
          icon={HeadphonesIcon}
          value="₹84.5M"
          trend={8.4}
          trendLabel="Current valuation"
        />
      </div>

      {/* Main Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 min-h-[400px]">
        <div className="lg:col-span-1">
          <ChannelPerformance />
        </div>
        <div className="lg:col-span-2">
          <AverageSales />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 min-h-[400px]">
        <div className="lg:col-span-1">
          <RecentActivity />
        </div>
        <div className="lg:col-span-1">
          <TopProducts />
        </div>
        <div className="lg:col-span-1">
          <TotalVisitor />
        </div>
      </div>

    </div>
  );
}
