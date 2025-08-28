"use client";
import PayrollCard from "@/app/dashboard/payroll/payroll-card";
import Hr360Modal, { IHr360Modal } from "@/components/modal";
import { IMetricsTypes } from "@/services/types";
import { useRef } from "react";
import TableFilters from "../tableFilter";

export default function DashboardComponent({
  analytics,
  isLoading,
}: {
  analytics: IMetricsTypes[];
  isLoading?: boolean;
}) {
  const modalRef = useRef<IHr360Modal>(null);
  const handleViewListModal = () => {
    modalRef.current?.open({
      title: <p>View Breakdown</p>,
      content: <p>Get your view list breakdown...</p>,
    });
  };

  const handlePayListModal = () => {
    modalRef.current?.open({
      title: "Pay List",
      content: <p>Get Payroll list Analysis...</p>,
    });
  };

  const handleViewModal = () => {
    modalRef.current?.open({
      title: "View",
      content: <p>Get your view analysis....</p>,
    });
  };

  return (
    <>
      <Hr360Modal ref={modalRef} />
      <PayrollCard
        metrics={analytics}
        handlePayoutModal={handleViewListModal}
        handleViewModal={handlePayListModal}
        handleScheduleModal={handleViewModal}
        isLoading={isLoading}
      />
      <TableFilters />
    </>
  );
}
