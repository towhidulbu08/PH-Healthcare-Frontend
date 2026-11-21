import RoleGuard from "@/components/auth/role-guard";
import DashBoardShell from "@/components/dashboard/dashboard-shell";

const AdminLayout = ({ children }: LayoutProps<"/admin">) => {
  return (
    <RoleGuard roles={["ADMIN", "SUPER_ADMIN"]}>
      <DashBoardShell>{children}</DashBoardShell>
    </RoleGuard>
  );
};

export default AdminLayout;
