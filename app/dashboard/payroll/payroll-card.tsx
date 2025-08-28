"use client";
import Button from "@/components/button";
import { IMetrics } from "@/services/types";
import { formatCurrency } from "@/utils/helper";
import classNames from "classnames";
import Image from "next/image";

const colors = ["#069855", "#069855", "#D62525", "#069855", "#069855"];
const PayrollCard = ({
  metrics,
  handleScheduleModal,
  handlePayoutModal,
  handleViewModal,
  isLoading,
}: IMetrics) => {
  return (
    <>
      <div className="py-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        {metrics?.map((el, i) => (
          <div
            className={classNames(
              `flex flex-col px-4 py-4 bg-white w-full cursor-pointer`,
              `rounded-xl border border-gray-200 space-y-3 shadow-sm hover:scale-103 transition-all ease-in-out duration-500`
            )}
            key={`dashboardCard${i}`}
          >
            <div className="md:flex justify-between items-center">
              <div className="border-[1px] border-gray-300 p-3 rounded-lg w-[50px] md:w-auto">
                <Image src={el.image} alt={el.title} />
              </div>

              {el?.percentage && (
                <div className="pt-2 md:pt-0 flex gap-1 items-center text-xs">
                  <p
                    style={{
                      color: colors[i],
                    }}
                  >
                    {el.percentage}
                  </p>
                  <p>vs</p>
                  <p className={`${"text-[#606060]"}`}>{el?.date}</p>
                </div>
              )}
            </div>

            <div className="flex justify-between items-center">
              {el?.isEmployee && (
                <div className="text-xs flex gap-1">
                  <p>No Of Employee</p>
                  <span>:</span>
                  <p
                    style={{
                      color: colors[i],
                    }}
                  >
                    {el?.employee_total}
                  </p>
                </div>
              )}
            </div>

            <div className="pt-2 grid grid-flow-col grid-cols-[max-content_auto] gap-8">
              <div className="self-end">
                <p className="text-sm font-[300] pb-1 text-gray-600">
                  {el?.title}
                </p>
                <div className=" md:pb-2 text-xl font-medium">
                  {isLoading ? (
                    <div className="animate-pulse">
                      <div className="h-6 bg-gray-300 rounded w-[80%]"></div>
                    </div>
                  ) : (
                    <>{`${formatCurrency(Number(el?.total) ?? 0, `\u20A6`)}`}</>
                  )}
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-2">
                {el?.schedule_text && (
                  <Button
                    className="!text-black !border-[1px] !border-gray-300 !text-sm !rounded-lg"
                    onClick={handleScheduleModal}
                  >
                    {el.schedule_text}
                  </Button>
                )}
                {el?.payroll_text && (
                  <Button
                    className="!bg-primary-100 !text-sm !rounded-lg !w-fit"
                    onClick={handlePayoutModal}
                  >
                    {el.payroll_text}
                  </Button>
                )}
              </div>

              {el.view && (
                <div>
                  <Button
                    className="!text-black !border-[1px] !border-gray-300 !text-sm !rounded-lg"
                    onClick={handleViewModal}
                  >
                    {el.view_text}
                  </Button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PayrollCard;
