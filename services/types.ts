import { ReactNode } from "react";

export interface LoginRequestBody {
  email: string;
  password: string;
}

export interface EmployeeInterface {
  resultsPerPage?: number;
  page?: number;
  query?: string | undefined;
  role?: string;
  date?: string;
}

type EmployeeType = { name: string; img: string };
export type RowType = {
  [key: string]: any;
};

export interface DataType {
  key: string;
  date: string;
  status: string;
  invoice: string;
  employee: EmployeeType;
  checkIn: string;
  checkOut: string;
  overtime: string;
  employmentType: string;
  role: string;
}

export type IMetricsTypes = {
  id: number;
  title: string;
  total: number | string;
  image: string;
  employee_total?: number;
  schedule?: boolean;
  payroll?: boolean;
  view?: boolean;
  isEmployee?: boolean;
  schedule_text?: string;
  payroll_text?: string;
  view_text?: string;
  key: string;
  date?: string;
  percentage?: string;
  isCurrency: boolean;
};

export type IMetrics = {
  metrics: IMetricsTypes[];
  title?: string;
  content?: ReactNode;
  handleScheduleModal?: () => void;
  handlePayoutModal?: () => void;
  handleViewModal?: () => void;
  isLoading?: boolean;
};
