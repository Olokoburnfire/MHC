import * as React from "react";
import { useLocation } from "react-router-dom";
import { Breadcrumbs as MUIBreadcrumbs, Link } from "@mui/material";

const Breadcrumbs = () => {
  const props = useLocation();
  console.log(props);
  const { pathname } = props;
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <div role="presentation">
      <MUIBreadcrumbs aria-label="breadcrumb">
        <Link underline="hover" onClick={() => pathname.push("/category")}>
          Categories
        </Link>
        {pathnames.map((name, index) => {
          const routeTo = `${pathnames.slice(0, index + 1).join("/category")}`;
          return (
            <Link underline="hover" onClick={() => pathname.push(routeTo)}>
              {name}
            </Link>
          );
        })}
      </MUIBreadcrumbs>
    </div>
  );
};

export default Breadcrumbs;
