"use client";
import TrainingComponent from "@/components/training";
import { useGetMetrics } from "@/services/queries";
import { LeaveCards } from "@/utils/constants";

export default function Home() {
  const { metrics, isLoading } = useGetMetrics();
  const analytics = [...LeaveCards].map((card) => ({
    ...card,
    total: metrics?.analytics?.leave[card?.key] ?? 0,
  }));
  return <TrainingComponent analytics={analytics} isLoading={isLoading} />;
}
