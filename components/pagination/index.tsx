"use client";
import { EmployeeInterface } from "@/services/types";
import { PARAMS_KEYS } from "@/utils/constants";
import { useUrlSearchParams } from "@/utils/hooks/useParamsQuery";
import type { PaginationProps } from "antd";
import { Pagination } from "antd";
import { Dispatch, SetStateAction } from "react";
import { HiOutlineBackward } from "react-icons/hi2";
import { IoPlayForwardOutline } from "react-icons/io5";

type IPagination = {
  total: number;
  title: string;
  totalResults: number;
  page: number;
  resultsPerPage: number;
  setParams: Dispatch<SetStateAction<EmployeeInterface>>;
  totalPages: number;
};
const HR360Pagination = ({
  total,
  title,
  resultsPerPage,
  totalResults,
  page,
  setParams,
}: IPagination) => {
  const [lowBound, upBound] = [
    totalResults === 0 ? 0 : (page - 1) * resultsPerPage + 1,
    totalResults > page * resultsPerPage ? page * resultsPerPage : totalResults,
  ];

  const { setParam } = useUrlSearchParams();

  const onChange: PaginationProps["onChange"] = (page) => {
    setParam(PARAMS_KEYS.PAGE, page);
    setParams((prev) => ({ ...prev, page }));
  };
  return (
    <div className="md:flex justify-between items-center py-5">
      <div className="flex gap-2 pb-4 md:pb-0 text-sm">
        <span className="text-gray-500">Showing</span>
        <span className="font-normal">
          {lowBound} to {upBound} of {total}
        </span>
        <span className="text-gray-500">{title}</span>
      </div>
      <Pagination
        current={page}
        onChange={onChange}
        total={total}
        simple={false}
        pageSize={resultsPerPage}
        showQuickJumper={false}
        showPrevNextJumpers={true}
        showLessItems
        className="flex items-center md:justify-center"
        prevIcon={
          <div className="bg-[#F5F5F5] p-2 rounded-lg">
            <HiOutlineBackward className="text-md" />
          </div>
        }
        nextIcon={
          <div className="bg-[#F5F5F5] p-2 rounded-lg">
            <IoPlayForwardOutline className="text-md" />
          </div>
        }
      />
    </div>
  );
};

export default HR360Pagination;
