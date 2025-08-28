import Aisa from "@/assets/aisa.svg";
import Alarm from "@/assets/alarm-clock.svg";
import Alert from "@/assets/alert-diamond.svg";
import Space from "@/assets/beach.svg";
import Briefcase from "@/assets/briefcase-06.svg";
import Emeka from "@/assets/emeka.svg";
import Grid from "@/assets/grid.svg";
import Edward from "@/assets/image (2).svg";
import Money from "@/assets/money-02.svg";
import Office from "@/assets/office-chair.svg";
import Paid from "@/assets/paid.svg";
import Pending from "@/assets/pay.svg";
import Check from "@/assets/read.svg";
import { IMetricsTypes } from "@/services/types";

type PageTitle = {
  [key: string]: string;
};

export const PageTitle: PageTitle = {
  dashboard: "Dashboard",
  directory: "Employee Directory",
  attendance: "Employee Attendance",
  leave: "Employee Leave Request",
  "stage-one": "Recruitment stage One",
  "stage-two": "Recruitment stage Two",
  "stage-three": "Recruitment Stage three",
  information: "Payroll Information",
  benefits: "Payroll Benefits Overall",
  compensation: "Payroll Compensation and Analysis",
  absence: "Employee Absence Trends",
  recruitment: "Recruitment",
  performance: "Performance Metrics",
  training: "Training and Development",
  schedule: "Schedule",
  reports: "Report and Analysis",
  help: "Help",
  settings: "Settings",
  messages: "Messages",
};

export const EmployeeCards: IMetricsTypes[] = [
  {
    id: 1,
    title: "Total Workforce",
    key: "total_workforce",
    total: "150",
    percentage: "10%",
    date: "last month",
    image: Briefcase,
  },
  {
    id: 2,
    title: "Present Workforce",
    key: "present_workforce",
    total: "125",
    percentage: "10%",
    date: "last month",
    image: Office,
  },
  {
    id: 3,
    title: "Absent Workforce",
    key: "absent_workforce",
    percentage: "10%",
    date: "last month",
    total: "15",
    image: Alert,
  },
  {
    id: 4,
    title: "Late Arrivals",
    key: "late_arrivals",
    total: "5",
    percentage: "10%",
    date: "last month",
    image: Alarm,
  },

  {
    id: 5,
    title: "On Leave",
    key: "on_leave",
    total: "5",
    percentage: "10%",
    date: "last month",
    image: Space,
  },
];

export const LeaveCards: IMetricsTypes[] = [
  {
    id: 1,
    title: "Total Leave Granted",
    key: "total_leave_granted",
    total: "15",
    percentage: "10%",
    date: "last month",
    image: Briefcase,
  },
  {
    id: 2,
    title: "Pending Leave",
    key: "pending_leave",
    total: "10",
    percentage: "10%",
    date: "last month",
    image: Office,
  },
  {
    id: 3,
    title: "Required Leave",
    key: "required_leave",
    percentage: "30%",
    date: "last month",
    total: "3",
    image: Alert,
  },
];

export const AbsentCards: IMetricsTypes[] = [
  {
    id: 1,
    title: "Total Absent",
    key: "total_absent",
    total: "8",
    percentage: "10%",
    date: "last month",
    image: Briefcase,
  },
  {
    id: 2,
    title: "Total Monthly Absent",
    key: "total_monthly_absent",
    total: "8",
    percentage: "10%",
    date: "last month",
    image: Office,
  },
  {
    id: 3,
    title: "Total Weekly Absent",
    key: "total_weekly_absent",
    percentage: "30%",
    date: "last month",
    total: "3",
    image: Alert,
  },
];

export const PayrollCards: IMetricsTypes[] = [
  {
    id: 1,
    title: "Total Payroll",
    key: "total_payroll",
    total: 8000000,
    employee_total: 150,
    image: Money,
    schedule: true,
    payroll: true,
    payroll_text: "Pay Payroll",
    isEmployee: true,
  },
  {
    id: 2,
    title: "Pending Payroll",
    key: "pending_roll",
    total: 3000000,
    image: Pending,
    employee_total: 40,
    view: true,
    view_text: "View",
    isEmployee: true,
  },
  {
    id: 3,
    title: "Paid Payroll",
    key: "total_payroll",
    total: 5000000,
    image: Paid,
    employee_total: 110,
    isEmployee: true,
  },
];

export const PayrollCompensationCards: IMetricsTypes[] = [
  {
    id: 1,
    title: "Swot Analysis Cost",
    key: "Swot analysis_cost",
    total: 500000,
    employee_total: 150,
    image: Money,
    schedule: true,
    payroll: true,
    // schedule_text: "View Analysis",
    payroll_text: "Pay Analysis",
  },
  {
    id: 2,
    title: "Financial Cost",
    key: "financial_cost",
    total: 2000000,
    image: Pending,
    employee_total: 40,
    view: true,
    view_text: "Analysis",
  },
];

export const BenefitPayrollCards: IMetricsTypes[] = [
  {
    id: 1,
    title: "Weekly Benefit Budget",
    key: "weekly_budget",
    total: 50000,
    image: Money,
    schedule: true,
    payroll: true,
    // schedule_text: "View List",
    payroll_text: "Payroll List",
  },
  {
    id: 2,
    title: "Monthly Benefit Budget",
    key: "monthly_budget",
    total: 100000,
    image: Pending,
    view: true,
    view_text: "View",
  },
  {
    id: 3,
    title: "Yearly Benefit Budget",
    key: "yearly_budget",
    total: 1000000,
    image: Paid,
    view: true,
    view_text: "View",
  },
];

type MessageType = {
  imageSrc: string;
  title: string;
  description: string;
  time: string;
  readSrc: string;
}[];

export const messages: MessageType = [
  {
    imageSrc: Grid,
    title: "HR Announcement",
    description: "Attention Team!, Employment App..",
    time: "10:07 AM",
    readSrc: Check,
  },
  {
    imageSrc: Grid,
    title: "Design Team",
    description: "Good morning team, Let's have a...",
    time: "10:07 AM",
    readSrc: Check,
  },

  {
    imageSrc: Grid,
    title: "Dev Team",
    description: "Alex can you provide a..",
    time: "10:07 AM",
    readSrc: Check,
  },
];

export const pinMessages: MessageType = [
  {
    imageSrc: Aisa,
    title: "Aisa Doe",
    description: "Sure, I will get them to you on time",
    time: "10:07 AM",
    readSrc: Check,
  },
  {
    imageSrc: Emeka,
    title: "Chukwuemeka",
    description: "Can we schedule a meeting for..",
    time: "10:07 AM",
    readSrc: Check,
  },

  {
    imageSrc: Edward,
    title: "Edward",
    description: "Hi, how are you today",
    time: "10:07 AM",
    readSrc: Check,
  },
];

export const allMessages: MessageType = [
  {
    imageSrc: Aisa,
    title: "Olamide",
    description: "Sure, I will get them to you on time",
    time: "10:07 AM",
    readSrc: Check,
  },
  {
    imageSrc: Emeka,
    title: "John",
    description: "Can we schedule a meeting for..",
    time: "10:07 AM",
    readSrc: Check,
  },

  {
    imageSrc: Edward,
    title: "Samuel",
    description: "Hi, how are you today",
    time: "10:07 AM",
    readSrc: Check,
  },
  {
    imageSrc: Aisa,
    title: "Seun",
    description: "Sure, I will get them to you on time",
    time: "10:07 AM",
    readSrc: Check,
  },
  {
    imageSrc: Emeka,
    title: "Mark",
    description: "Can we schedule a meeting for..",
    time: "10:07 AM",
    readSrc: Check,
  },
];

export const filters = [
  {
    label: "HRManager",
  },
  {
    label: "Software",
  },
  {
    label: "Marketing",
  },

  {
    label: "Designer",
  },
  {
    label: "FinancialAnalyst",
  },
  {
    label: "ProjectManager",
  },
  {
    label: "SocialMedia",
  },
  {
    label: "Accountant",
  },
  {
    label: "SalesRep",
  },
  {
    label: "CustomerService",
  },
  {
    label: "AdministrativeAssistant",
  },
];

export const COOKIES_KEYS = {
  TOKEN: "token",
};
export const PARAMS_KEYS = {
  ROLE: "role",
  SEARCH: "searchQuery",
  PAGE: "page",
  RESULT_PER_PAGE: "resultPerPage",
  DATE: "date",
};
export const ROLES = [
  { label: "HR Manager", value: "HRManager" },
  {
    label: "Software Engineer",
    value: "SoftwareEngineer",
  },
  { label: "Marketing Ex", value: "MarketingEx" },
  {
    label: "Financial Analyst",
    value: "FinancialAnalyst",
  },
  {
    label: "Project Manager",
    value: "ProjectManager",
  },
  { label: "Designer", value: "Designer" },
  {
    label: "Social Media Manager",
    value: "SocialMediaManager",
  },
  { label: "Accountant", value: "Accountant" },
  {
    label: "Business Analyst",
    value: "BusinessAnalyst",
  },
  {
    label: "Sales Representative",
    value: "SalesRep",
  },
  {
    label: "Customer service",
    value: "CustomerService",
  },
  {
    label: "Administrative assistant",
    value: "AdministrativeAssistant",
  },
];

export const EMPLOYMENT_TYPE = [
  { label: "Full-Time", value: "Full-Time" },
  {
    label: "Part-Time",
    value: "Part-Time",
  },
  {
    label: "Contract",
    value: "Contract",
  },
];
