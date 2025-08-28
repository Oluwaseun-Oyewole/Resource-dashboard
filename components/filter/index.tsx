"use client";
import CSVImage from "@/assets/csv.svg";
import { routes } from "@/routes";
import { EmployeeInterface } from "@/services/types";
import { PARAMS_KEYS, PageTitle, filters } from "@/utils/constants";
import { DatePicker, DatePickerProps, Dropdown, Input } from "antd";
import classNames from "classnames";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { CSVLink } from "react-csv";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineRefresh } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";
import Button from "../button";
import Hr360Modal, { IHr360Modal } from "../modal";

const Filter = ({
  setParams,
  setParam,
  onRefresh,
  params,
  data,
}: {
  params: EmployeeInterface;
  setParams: Dispatch<SetStateAction<EmployeeInterface>>;
  setParam: (key: string, value: string) => void;
  onRefresh: () => void;
  data: [];
}) => {
  const pathname = usePathname();
  const getTitle = pathname.split("/");
  let getTitleEnum = getTitle[getTitle.length - 1];
  const [searchTerm, setSearchTerm] = useState(params?.query);
  const onChange: DatePickerProps["onChange"] = (_, dateString) => {
    setParams((prev: EmployeeInterface) => ({
      ...prev,
      date: dateString as string,
    }));
    setParam(PARAMS_KEYS.DATE, dateString.toString());
  };
  const dateFormat = "YYYY-MM-DD";
  const modalRef = useRef<IHr360Modal>(null);
  const handleDropdown = (role: string) => {
    setParams((prev: EmployeeInterface) => ({
      ...prev,
      role,
    }));
    setParam(PARAMS_KEYS.ROLE, role);
  };

  const onSearch = useDebouncedCallback((query: string) => {
    setSearchTerm(query);
    setParams((prev: EmployeeInterface) => ({
      ...prev,
      query,
    }));
    setParam(PARAMS_KEYS.SEARCH, query);
  }, 300);

  return (
    <>
      <div className="py-4 last:lg:py-6 flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between text-sm relative">
        <Hr360Modal ref={modalRef} />
        <div className="basis-full lg:basis-[40%] flex items-center gap-2">
          <div className="w-[70%]">
            <Input
              className={classNames(
                `!rounded-lg border-gray-300 border-[1.3px] focus:border-btn hover:border-btn px-3 placeholder:font-light placeholder:!text-gray-500 !h-[40px]`
              )}
              type="search"
              value={searchTerm}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Search by name, role"
            />
          </div>
          <Button
            className="border-[1px] border-gray-300 cursor-pointer !flex rounded-lg !h-[40px] !w-[25%] !text-black items-center justify-center"
            onClick={onRefresh}
          >
            <p>Refresh</p>
            <MdOutlineRefresh />
          </Button>
        </div>

        <div className="basis-full lg:basis-[50%] flex items-center lg:justify-end gap-2 w-full">
          <Dropdown
            className={`py-4 block px-[16px] w-full lg:w-auto cursor-pointer rounded-lg !text-sm border-[1px] border-gray-300`}
            openClassName="rounded-b-none"
            menu={{
              items: filters.map((filter, index) => {
                return {
                  key: filter.label,
                  label: (
                    <div
                      className={`px-[18px] py-[14px] w-[250px] flex justify-between items-center 
           ${index === filters.length - 1 ? "" : "border-b-[1px]"}
         `}
                    >
                      <span className="!text-sm font-light">
                        {filter.label}
                      </span>
                    </div>
                  ),
                  className: "!p-0",
                  onClick: (ev) => {
                    handleDropdown(ev.key);
                  },
                };
              }),
              onSelect: (ev) => {},
              rootClassName: "!h-[250px]",
            }}
            trigger={["click"]}
            // placement="bottom"
          >
            <button className="flex justify-between items-center text-[16px] !h-[40px] gap-2">
              {params?.role || <span className="">All Roles</span>}
              {<IoMdArrowDropdown className="" />}
            </button>
          </Dropdown>

          <div className="w-full lg:w-auto">
            <DatePicker
              value={params?.date ? dayjs(params?.date) : dayjs()}
              format={dateFormat}
              className="!w-full !h-[40px] !border-gray-300"
              placement="bottomRight"
              onChange={onChange}
              onPickerValueChange={() => {}}
            />
          </div>

          <div className="hidden md:block w-full lg:w-auto">
            <Button className="flex gap-2 border-[1px] border-gray-300 !h-[40px] !text-xs md:!text-sm justify-center items-center">
              <CSVLink
                data={data}
                className="text-black flex gap-2"
                filename={`${PageTitle[getTitleEnum]} csv-file`}
              >
                Export CSV <Image src={CSVImage} alt="" />
              </CSVLink>
            </Button>
          </div>
        </div>

        <div className="w-[150px] md:hidden">
          <Button className="flex gap-2 border-[1px] border-gray-300 !h-[40px] !text-xs md:!text-sm justify-center items-center">
            <CSVLink
              data={data}
              className="text-black flex gap-2"
              filename={`${PageTitle[getTitleEnum]} csv-file`}
            >
              Export CSV <Image src={CSVImage} alt="" />
            </CSVLink>
          </Button>
        </div>
      </div>
      <div className="pt-5 pb-1 font-medium">
        <Link href={routes.attendance} className="text-primary-100 !text-sm">
          Attendance Form
        </Link>
      </div>
    </>
  );
};

export default Filter;
