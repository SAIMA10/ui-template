import React, { ReactNode } from "react";
import "../breadcrumbs/styles.css";

interface BreadcrumbsItems {
  label: string;
  link?: string;
  icon?: ReactNode;
}

interface BreadcrumbsProps {
  items: BreadcrumbsItems[];
  className?: string;
}

const Breadcrumbs = ({ items, className }: BreadcrumbsProps) => {
  return (
    <ul className="breadcrumb-list">
      {items.map((item, index) => {
        const isActive = index === items.length - 1;
        return (
          <li
            key={item.link}
            className={`breadcrumb-item`}
          >
            {!isActive ? (
              <a href={item.link} className="breadcrumb-link">
                {item.label}
              </a>
            ) : (
              <span className="breadcrumb-label">{item.label}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Breadcrumbs;
