"use client";
import MetricsCard from "@/components/MetricsCard";
import Hr360Modal, { IHr360Modal } from "@/components/modal";
import { IMetricsTypes } from "@/services/types";
import { useRef } from "react";
import TableFilters from "../tableFilter";

export default function TrainingComponent({
  analytics,
  isLoading,
}: {
  analytics: IMetricsTypes[];
  isLoading?: boolean;
}) {
  const modalRef = useRef<IHr360Modal>(null);

  return (
    <>
      <Hr360Modal ref={modalRef} />
      <MetricsCard metrics={analytics} isLoading={isLoading} />
      <TableFilters />
    </>
  );
}
