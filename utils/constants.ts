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

export type ICardTypes = {
  id: number;
  title: string;
  total: string;
  percentage: string;
  date: string;
  image: string;
};
export const EmployeeCards: ICardTypes[] = [
  {
    id: 1,
    title: "Total Workforce",
    total: "150",
    percentage: "10%",
    date: "last month",
    image: Briefcase,
  },
  {
    id: 2,
    title: "Present Workforce",
    total: "125",
    percentage: "10%",
    date: "last month",
    image: Office,
  },
  {
    id: 3,
    title: "Absent Workforce",
    percentage: "10%",
    date: "last month",

    total: "15",
    image: Alert,
  },
  {
    id: 4,
    title: "Late Arrivals",
    total: "5",
    percentage: "10%",
    date: "last month",
    image: Alarm,
  },

  {
    id: 5,
    title: "On Leave",
    total: "5",
    percentage: "10%",
    date: "last month",
    image: Space,
  },
];

export const LeaveCards: ICardTypes[] = [
  {
    id: 1,
    title: "Total Leave Granted",
    total: "15",
    percentage: "10%",
    date: "last month",
    image: Briefcase,
  },
  {
    id: 2,
    title: "Pending Leave",
    total: "10",
    percentage: "10%",
    date: "last month",
    image: Office,
  },
  {
    id: 3,
    title: "Required Leave",
    percentage: "30%",
    date: "last month",
    total: "3",
    image: Alert,
  },
];

export const AbsentCards: ICardTypes[] = [
  {
    id: 1,
    title: "Total Absent",
    total: "8",
    percentage: "10%",
    date: "last month",
    image: Briefcase,
  },
  {
    id: 2,
    title: "Total Monthly Absent",
    total: "8",
    percentage: "10%",
    date: "last month",
    image: Office,
  },
  {
    id: 3,
    title: "Total Weekly Absent",
    percentage: "30%",
    date: "last month",
    total: "3",
    image: Alert,
  },
];

export type IPayrollCardTypes = {
  id: number;
  title: string;
  total: number;
  image: string;
  employee_total?: number;
  schedule?: boolean;
  payroll?: boolean;
  view?: boolean;
  isEmployee?: boolean;
  schedule_text?: string;
  payroll_text?: string;
  view_text?: string;
};

export const PayrollCards: IPayrollCardTypes[] = [
  {
    id: 1,
    title: "Total Payroll",
    total: 8000000,
    employee_total: 150,
    image: Money,
    schedule: true,
    payroll: true,
    schedule_text: "View Schedule",
    payroll_text: "Pay Payroll",
    isEmployee: true,
  },
  {
    id: 2,
    title: "Pending Payroll",
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
    total: 5000000,
    image: Paid,
    employee_total: 110,
    isEmployee: true,
  },
];

export const PayrollCompensationCards: IPayrollCardTypes[] = [
  {
    id: 1,
    title: "Swot Analysis Cost",
    total: 500000,
    employee_total: 150,
    image: Money,
    schedule: true,
    payroll: true,
    schedule_text: "View Analysis",
    payroll_text: "Pay Analysis",
  },
  {
    id: 2,
    title: "Financial Cost",
    total: 2000000,
    image: Pending,
    employee_total: 40,
    view: true,
    view_text: "Analysis",
  },
];

export const BenefitPayrollCards: IPayrollCardTypes[] = [
  {
    id: 1,
    title: "Weekly Benefit Budget",
    total: 50000,
    image: Money,
    schedule: true,
    payroll: true,
    schedule_text: "View List",
    payroll_text: "Payroll List",
  },
  {
    id: 2,
    title: "Monthly Benefit Budget",
    total: 100000,
    image: Pending,
    view: true,
    view_text: "View",
  },
  {
    id: 3,
    title: "Yearly Benefit Budget",
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
