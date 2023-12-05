import React, { useEffect } from "react";
import AdminHeader from "./header/AdminHeader";
import { useNavigate } from "react-router-dom";
import { checkAdminSession } from "../../../utils/session/checkAdminSession";

const AdminLayout = ({ children, withHeader= true }) => {
  const navigate = useNavigate();
  useEffect(() => {
    checkAdminSession()
      .then(res => res ? navigate("/admin-panel") : navigate("/admin-login"))
  }, []);

  return (
    <>
      <AdminHeader className={!withHeader && "hidden"}/>
      {children}
    </>
  );
};

export default AdminLayout;
