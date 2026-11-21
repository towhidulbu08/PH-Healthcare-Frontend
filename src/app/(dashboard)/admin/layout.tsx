import RoleGuard from "@/components/auth/role-guard";

const AdminLayout = ({ children }: LayoutProps<"/admin">) => {
  return (
    <RoleGuard roles={["ADMIN"]}>
      <div>
        Admin Layout
        {children}
      </div>
    </RoleGuard>
  );
};

export default AdminLayout;
