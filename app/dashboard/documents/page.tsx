import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, Download, Eye, FileText } from "lucide-react"
import { formatCurrency } from "@/lib/utils"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const allDocuments = [
  { id: "INV-001", type: "Invoice", client: "ABC Company Inc.", amount: 15000, date: "2024-01-15", status: "paid" },
  { id: "INV-002", type: "Invoice", client: "XYZ Distributors", amount: 8500, date: "2024-01-14", status: "pending" },
  { id: "INV-003", type: "Credit Note", client: "DEF Commercial", amount: 3200, date: "2024-01-13", status: "paid" },
  { id: "INV-004", type: "Invoice", client: "GHI Services", amount: 12000, date: "2024-01-12", status: "overdue" },
  { id: "INV-005", type: "Invoice", client: "JKL Industries", amount: 22000, date: "2024-01-11", status: "paid" },
  { id: "INV-006", type: "Invoice", client: "MNO Construction", amount: 18500, date: "2024-01-10", status: "pending" },
  { id: "INV-007", type: "Credit Note", client: "ABC Company Inc.", amount: 1500, date: "2024-01-09", status: "paid" },
  { id: "INV-008", type: "Invoice", client: "PQR Retail", amount: 9800, date: "2024-01-08", status: "paid" },
]

export default function DocumentsPage() {
  return (
    <>
      {/* Header Responsive */}
      <div className="border-b bg-background px-4 py-6 md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
              <FileText className="h-6 w-6 md:hidden text-primary" />
              Documents
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">Manage all your invoices and documents</p>
          </div>
          <Button className="w-full md:w-auto gap-2">
            <Plus className="h-4 w-4" />
            New Invoice
          </Button>
        </div>
      </div>

      {/* Contenido Responsive */}
      <div className="p-4 md:p-8">

        {/* Search and Filters */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search by client, ID or amount..." className="pl-9 w-full" />
              </div>
              <Button variant="outline" className="w-full sm:w-auto">Filters</Button>
            </div>
          </CardContent>
        </Card>

        {/* Documents Table */}
        <Card>
          <CardContent className="p-0 md:pt-6 md:px-6 pb-4">

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Type</TableHead>
                    {/* Eliminé el comentario que estaba aquí y causaba el error */}
                    <TableHead className="min-w-[150px]">Client</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {allDocuments.map((doc) => (
                    <TableRow key={doc.id}>
                      <TableCell className="font-medium whitespace-nowrap">{doc.id}</TableCell>
                      <TableCell className="whitespace-nowrap">{doc.type}</TableCell>
                      <TableCell className="whitespace-nowrap font-medium text-slate-700">{doc.client}</TableCell>
                      <TableCell className="whitespace-nowrap text-muted-foreground">
                        {new Date(doc.date).toLocaleDateString("en-US")}
                      </TableCell>
                      <TableCell className="text-right font-medium whitespace-nowrap">{formatCurrency(doc.amount)}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={`whitespace-nowrap
                                ${doc.status === "paid" ? "bg-green-50 text-green-700 border-green-200" : ""}
                                ${doc.status === "pending" ? "bg-yellow-50 text-yellow-700 border-yellow-200" : ""}
                                ${doc.status === "overdue" ? "bg-red-50 text-red-700 border-red-200" : ""}
                            `}
                        >
                          {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-1">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-slate-900">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-slate-900">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}