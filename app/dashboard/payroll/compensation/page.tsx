"use client";
import DashboardComponent from "@/components/dashboard";
import { useGetMetrics } from "@/services/queries";
import { PayrollCompensationCards } from "@/utils/constants";

export default function PayrollCompensation() {
  const { metrics, isLoading } = useGetMetrics();
  const analytics = [...PayrollCompensationCards].map((card) => ({
    ...card,
    total: metrics?.analytics?.leave[card?.key] ?? 0,
  }));
  return <DashboardComponent analytics={analytics} isLoading={isLoading} />;
}
