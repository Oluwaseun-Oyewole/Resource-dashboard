"use client";
import DashboardComponent from "@/components/dashboard";
import { useGetMetrics } from "@/services/queries";
import { PayrollCards } from "@/utils/constants";

export default function PayrollInformation() {
  const { metrics, isLoading } = useGetMetrics();
  const analytics = [...PayrollCards].map((card) => ({
    ...card,
    total: metrics?.analytics?.leave[card?.key] ?? 0,
  }));
  return <DashboardComponent analytics={analytics} isLoading={isLoading} />;
}
