"use client";
import { renderEmployment, renderStatus } from "@/app/style";
import Button from "@/components/button";
import Filter from "@/components/filter";
import Hr360Modal, { IHr360Modal } from "@/components/modal";
import HR360Table from "@/components/table";
import { useGetEmployees } from "@/services/queries";
import { DataType, EmployeeInterface } from "@/services/types";
import { PARAMS_KEYS } from "@/utils/constants";
import { truncate } from "@/utils/helper";
import { useUrlSearchParams } from "@/utils/hooks/useParamsQuery";
import { Popover, TableProps, Tag } from "antd";
import dayjs from "dayjs";
import { useRef, useState } from "react";

export default function TableFilters() {
  const { getParam, setParam, clearParams } = useUrlSearchParams();
  const [currentPage, setCurrentPage] = useState(+getParam(PARAMS_KEYS.PAGE)!);
  const role = getParam(PARAMS_KEYS.ROLE)!;
  const query = getParam(PARAMS_KEYS.SEARCH)!;
  const date = getParam(PARAMS_KEYS.DATE)!;

  const [params, setParams] = useState<EmployeeInterface>({
    page: currentPage <= 0 ? 1 : currentPage,
    resultsPerPage: 10,
    role,
    query,
    date,
  });
  const { employees, employeesIsLoading, refetch } = useGetEmployees({
    ...params,
  });

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Employee name",
      dataIndex: "employeeName",
      key: "employeeName",
      render: (el) => {
        return <div>{el}</div>;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (el) => {
        return (
          <Tag key={el}>
            <Popover content={el}>{truncate(el, 15)}</Popover>
          </Tag>
        );
      },
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (el) => {
        return (
          <Tag key={el}>
            <Popover content={el}>{truncate(el, 10)}</Popover>
          </Tag>
        );
      },
    },

    {
      title: "Type",
      dataIndex: "employmentType",
      key: "employeeType",
      render: (el) => (
        <div
          className={`lg:w-1/2 capitalize text-center  border-[1px] rounded-md ${renderEmployment(
            el
          )}`}
        >
          {el}
        </div>
      ),
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (el) => (
        <div
          className={`capitalize text-center  border-[1px] rounded-md ${renderStatus(
            el
          )}`}
        >
          {el}
        </div>
      ),
    },

    {
      title: "Check-in",
      dataIndex: "checkIn",
      key: "checkIn",
      render: (el) => {
        return <div>{dayjs(el).format("YYYY-MM-DD h:mm")}</div>;
      },
    },

    {
      title: "check-out",
      dataIndex: "checkOut",
      key: "checkOut",
      render: (el) => <div>{dayjs(el).format("YYYY-MM-DD h:mm")}</div>,
    },

    {
      title: "Overtime",
      dataIndex: "overTime",
      key: "overTime",
      render: (el) => {
        return el ? <div>{`${el} h`}</div> : "-";
      },
    },

    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <Button
          className="!text-primary-100 !text-sm !px-0"
          onClick={seeMoreModal}
        >
          See More
        </Button>
      ),
    },
  ];

  const modalRef = useRef<IHr360Modal>(null);

  const seeMoreModal = () => {
    modalRef.current?.open({
      title: "See More",
      content: <div>More contents...</div>,
    });
  };

  const onRefresh = () => {
    setParams({
      page: 1,
      resultsPerPage: 10,
      query: undefined,
      role: undefined,
      date: undefined,
    });
    refetch();
    clearParams();
  };

  return (
    <main>
      <Hr360Modal ref={modalRef} />

      <Filter
        setParams={setParams}
        setParam={setParam}
        onRefresh={onRefresh}
        params={params}
        data={employees?.data?.employees ?? []}
      />

      <HR360Table
        columns={columns}
        dataSource={employees?.data?.employees ?? []}
        loading={employeesIsLoading}
        pagination={false}
        title="employees"
        total={employees?.data?.totalResults ?? 0}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        resultsPerPage={employees?.data?.resultsPerPage ?? 10}
        totalResults={employees?.data?.totalResults ?? 0}
        page={employees?.data?.page ?? currentPage}
        width={1300}
      />
    </main>
  );
}
