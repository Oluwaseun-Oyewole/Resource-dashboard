"use client";
import DashboardComponent from "@/components/dashboard";
import { useGetMetrics } from "@/services/queries";
import { BenefitPayrollCards } from "@/utils/constants";

export default function Dashboard() {
  const { metrics, isLoading } = useGetMetrics();
  const analytics = [...BenefitPayrollCards].map((card) => ({
    ...card,
    total: metrics?.analytics?.leave[card?.key] ?? 0,
  }));
  return <DashboardComponent analytics={analytics} isLoading={isLoading} />;
}
