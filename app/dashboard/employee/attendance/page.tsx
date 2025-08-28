"use client";
import TrainingComponent from "@/components/training";
import { useGetMetrics } from "@/services/queries";
import { EmployeeCards } from "@/utils/constants";

export default function Attendance() {
  const { metrics, isLoading } = useGetMetrics();
  const analytics = [...EmployeeCards].map((card) => ({
    ...card,
    total: metrics?.analytics?.attendance[card?.key] ?? 0,
  }));
  return <TrainingComponent analytics={analytics} isLoading={isLoading} />;
}
