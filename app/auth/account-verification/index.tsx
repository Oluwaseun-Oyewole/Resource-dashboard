"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import InvalidRoute from "./error";
import FormContent from "./formLayout";

const FormLayout = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const totalStepNumber = 2;
  const step = searchParams.get("step") ?? 1;
  const stepNumber = Number(step);

  const updateUrlStringOnPageLoad = (step: number) => {
    const sp = new URLSearchParams(searchParams);
    sp.set("step", step.toString());
    router.push(`?${sp.toString()}`);
  };
  useEffect(() => {
    updateUrlStringOnPageLoad(Number(stepNumber));
  }, [searchParams]);

  const title = () => {
    if (stepNumber === 1) {
      return "OTP Resend";
    } else if (stepNumber === 2) {
      return "OTP Verification";
    } else return;
  };

  const description = () => {
    if (stepNumber === 1) {
      return "Generate a new otp ";
    } else if (stepNumber === 2) {
      return "Enter the otp sent to your mail";
    } else return;
  };

  return (
    <>
      {stepNumber > 0 && stepNumber <= totalStepNumber ? (
        <div className="w-full">
          <div className="flex items-center justify-center">
            <div className="w-[90%] md:w-[50%] flex justify-between">
              {stepNumber > 1 && (
                <p
                  onClick={() => {
                    router.push(`${pathname}?step=1`);
                  }}
                  className="cursor-pointer text-primary-100"
                >
                  Prev
                </p>
              )}
              {stepNumber < 2 && (
                <p
                  onClick={() => {
                    router.push(`${pathname}?step=2`);
                  }}
                  className="cursor-pointer text-primary-100"
                >
                  Next
                </p>
              )}
              <p className="self-end flex items-end justify-end">
                Step 0{stepNumber}/0{totalStepNumber}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center pt-10 pb-5">
            <p className="text-primary text-xl">{title()}</p>
            <p className="text-gray-500 text-sm pt-1">{description()}</p>
          </div>
          <FormContent />
        </div>
      ) : (
        <div>
          <InvalidRoute />
        </div>
      )}
    </>
  );
};

export default FormLayout;
