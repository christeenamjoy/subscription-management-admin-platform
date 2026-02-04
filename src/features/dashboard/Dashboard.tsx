import  { useMemo } from 'react'
import RevenueChart from '../../shared/components/charts/RevenueCharts';
import useRevenueTrendQuery from './hooks/useRevenueTrendQuery';
import useMetricsQuery from './hooks/useMetricsQuery';

const Dashboard = () => {

    const { data: metrics } = useMetricsQuery();
    const { data: revenueTrend } = useRevenueTrendQuery();
  
    //I isolate charts into dedicated components and memoize data transformations 
    // so rendering remains predictable as data grows.

    const kpis = useMemo(() => {
      if (!metrics) return [];
      return [
        { label: "Revenue", value: `$${metrics.revenue}` },
        { label: "Active", value: metrics.activeSubscriptions },
        { label: "Churn", value: `${metrics.churnRate}%` },
      ];
    }, [metrics]);
  
  return (
    <div className="space-y-6">
        
    <div className="grid grid-cols-3 gap-4">
      {kpis.map((kpi) => (
        <div key={kpi.label} className="border p-4 rounded">
          <div className="text-sm text-gray-500">{kpi.label}</div>
          <div className="text-xl font-semibold">{kpi.value}</div>
        </div>
      ))}
    </div>

    <div className="border p-4 rounded">
      {revenueTrend && <RevenueChart data={revenueTrend} />}
    </div>
  </div>
  )
}

export default Dashboard