"use client";
import PayrollCard from "@/app/dashboard/payroll/payroll-card";
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
      <PayrollCard metrics={analytics} isLoading={isLoading} />
      <TableFilters />
    </>
  );
}
