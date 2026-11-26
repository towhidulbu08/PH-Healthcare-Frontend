/** biome-ignore-all lint/a11y/useValidAriaRole: <explanation> */
import RoleGuard from "@/components/auth/role-guard";
import DashBoardShell from "@/components/dashboard/dashboard-shell";

const PatientLayout = ({ children }: LayoutProps<"/admin">) => {
  return (
    <RoleGuard roles={["PATIENT"]}>
      <DashBoardShell role="PATIENT">{children}</DashBoardShell>
    </RoleGuard>
  );
};

export default PatientLayout;
