"use client";
import DashboardComponent from "@/components/dashboard";
import { useGetMetrics } from "@/services/queries";
import { EmployeeCards } from "@/utils/constants";

export default function PayrollBenefit() {
  const { metrics, isLoading } = useGetMetrics();
  const analytics = [...EmployeeCards].map((card) => ({
    ...card,
    total: metrics?.analytics?.leave[card?.key] ?? 0,
  }));
  return <DashboardComponent analytics={analytics} isLoading={isLoading} />;
}
