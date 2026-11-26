/** biome-ignore-all lint/a11y/useValidAriaRole: <explanation> */
import RoleGuard from "@/components/auth/role-guard";
import DashBoardShell from "@/components/dashboard/dashboard-shell";

const DoctorLayout = ({ children }: LayoutProps<"/admin">) => {
  return (
    <RoleGuard roles={["DOCTOR"]}>
      <DashBoardShell role="DOCTOR">{children}</DashBoardShell>
    </RoleGuard>
  );
};

export default DoctorLayout;
