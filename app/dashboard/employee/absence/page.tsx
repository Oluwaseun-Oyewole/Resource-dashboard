"use client";
import TrainingComponent from "@/components/training";
import { useGetMetrics } from "@/services/queries";
import { AbsentCards } from "@/utils/constants";

export default function Absence() {
  const { metrics, isLoading } = useGetMetrics();
  const analytics = [...AbsentCards].map((card) => ({
    ...card,
    total: metrics?.analytics?.leave[card?.key] ?? 0,
  }));
  return <TrainingComponent analytics={analytics} isLoading={isLoading} />;
}
