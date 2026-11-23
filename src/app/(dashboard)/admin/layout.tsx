/** biome-ignore-all lint/a11y/useValidAriaRole: <explanation> */
import RoleGuard from "@/components/auth/role-guard";
import DashBoardShell from "@/components/dashboard/dashboard-shell";

const AdminLayout = ({ children }: LayoutProps<"/admin">) => {
  return (
    <RoleGuard roles={["ADMIN", "SUPER_ADMIN"]}>
      <DashBoardShell role="ADMIN">{children}</DashBoardShell>
    </RoleGuard>
  );
};

export default AdminLayout;
