"use client";
import { truncate } from "@/utils/helper";
import { Tooltip } from "antd";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MdArrowDropUp } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import Dropdown from "../dropdown";
import { IRoutesType } from "../sidebar/links";

type INavMenuTypes = {
  route: IRoutesType;
};

const NavMenuItems: React.FC<INavMenuTypes> = ({ route }) => {
  const { path, icon, title, subRoutes, ActiveIcon, disabled } = route;
  const [dropdown, setDropdown] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLLIElement | null>(null);

  const handleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDropdown((prev) => !prev);
  };

  const handleItemClick = () => {
    if (subRoutes) {
      setDropdown((prev) => !prev);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && e.target instanceof Node) {
        if (!menuRef.current.contains(e.target)) {
          setDropdown(false);
        }
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const isActive = subRoutes
    ? subRoutes.some((route) => pathname === route.url)
    : pathname === path;

  return (
    <li
      className={classNames("w-full", {
        "bg-primary-100 rounded-lg": isActive && !subRoutes,
      })}
      ref={menuRef}
    >
      {subRoutes ? (
        <>
          <div
            className={classNames(
              "flex px-3 justify-between items-center w-full cursor-pointer",
              {
                "bg-primary-100 py-4 rounded-lg": isActive,
              }
            )}
            onClick={handleItemClick}
          >
            <div className="flex gap-3 items-center">
              {isActive ? (
                <ActiveIcon className="text-xl text-white" />
              ) : (
                <Image src={icon} alt="icon" width={20} height={20} />
              )}

              <Tooltip title={title} color="#380ABB">
                <p
                  className={classNames("text-sm", {
                    "text-white": isActive,
                    "text-black hover:text-primary-100": !isActive,
                  })}
                >
                  {truncate(title, 15)}
                </p>
              </Tooltip>
            </div>

            <div onClick={handleDropdown}>
              {dropdown ? (
                <MdArrowDropUp
                  className={`text-xl cursor-pointer ${
                    isActive ? "text-white" : ""
                  }`}
                />
              ) : (
                <RiArrowDropDownLine
                  className={classNames("text-xl cursor-pointer", {
                    "text-white": isActive,
                  })}
                />
              )}
            </div>
          </div>

          <Dropdown subRoutes={subRoutes} dropdown={dropdown} />
        </>
      ) : (
        <Link
          href={path!}
          className={classNames("flex px-3 gap-3 items-center w-full", {
            "bg-primary-100 py-4 rounded-lg": isActive,
            "disabled:cursor-not-allowed": disabled,
          })}
          style={{
            pointerEvents: disabled ? "none" : "auto",
          }}
          aria-disabled={disabled}
        >
          {isActive ? (
            <ActiveIcon className="text-xl text-white" />
          ) : (
            <Image src={icon} alt="icon" width={20} height={20} />
          )}

          <Tooltip title={title} color="#380ABB">
            <p
              className={classNames("text-sm", {
                "text-white hover:text-white": isActive,
                "text-black hover:text-primary-100": !isActive,
              })}
            >
              {truncate(title, 15)}
            </p>
          </Tooltip>
        </Link>
      )}
    </li>
  );
};

export default NavMenuItems;
