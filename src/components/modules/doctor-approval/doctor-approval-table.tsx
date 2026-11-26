import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DoctorPreviewSheet from "./doctor-preview-sheet";

const DoctorApprovalTable = () => {
  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Tamim</TableCell>

            <TableCell className="text-right">
              <DoctorPreviewSheet />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default DoctorApprovalTable;
