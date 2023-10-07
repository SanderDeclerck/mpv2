import { Link } from "@tanstack/react-router";
import { cva } from "class-variance-authority";
import { HomeIcon } from "lucide-react";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export const BreadcrumbLinkWithIcon = (props: PropsWithChildren) => {
  return (
    <li className="inline-flex items-center">
      <BreadcrumbSeparator />
      {props.children}
    </li>
  );
};

export const BreadcrumbLink = ({ children }: PropsWithChildren) => {
  return (
    <li>
      <div className="flex items-center">
        <BreadcrumbSeparator />
        {children}
      </div>
    </li>
  );
};

export const breadcrumbLinkWithIconStyle = cva(
  "inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 ml-2 ",
);
export const breadcrumbIconStyle = cva("w-4 h-4 mr-2.5 stroke-[1.5px]");
export const breadcrumbLinkStyle = cva(
  "text-sm font-medium text-gray-700 hover:text-blue-600 ml-2",
);

export const BreadcrumbCurrentPage = ({ children }: PropsWithChildren) => {
  return (
    <li aria-current="page">
      <div className="flex items-center">
        <BreadcrumbSeparator />
        <span className="ml-2 text-sm font-medium text-gray-500">
          {children}
        </span>
      </div>
    </li>
  );
};

export const BreadcrumbCurrentPageWithIcon = ({
  children,
}: PropsWithChildren) => {
  return (
    <li className="inline-flex items-center" aria-current="page">
      <BreadcrumbSeparator />
      <span className="ml-2 text-sm font-medium text-gray-500 inline-flex items-center">
        {children}
      </span>
    </li>
  );
};

const BreadcrumbSeparator = () => {
  return (
    <svg
      className="w-3 h-3 text-gray-400 mx-1"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 6 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 9 4-4-4-4"
      />
    </svg>
  );
};

export const Breadcrumb = ({ children }: PropsWithChildren) => {
  return (
    <nav className="flex mb-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-3.5">
        <li className="inline-flex items-center">
          <Link to="/" className={cn(breadcrumbLinkWithIconStyle())}>
            <HomeIcon className={cn(breadcrumbIconStyle())} />
            Home
          </Link>
        </li>
        {children}
      </ol>
    </nav>
  );
};
