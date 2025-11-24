import { DashboardSidebar } from "@/components/layout/dashboard-sidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, Download, Eye } from "lucide-react"
import { formatCurrency } from "@/lib/utils"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const allDocuments = [
  { id: "INV-001", type: "Invoice", client: "ABC Company Inc.", amount: 15000, date: "2024-01-15", status: "paid" },
  { id: "INV-002", type: "Invoice", client: "XYZ Distributors", amount: 8500, date: "2024-01-14", status: "pending" },
  { id: "INV-003", type: "Credit Note", client: "DEF Commercial", amount: 3200, date: "2024-01-13", status: "paid" },
  { id: "INV-004", type: "Invoice", client: "GHI Services", amount: 12000, date: "2024-01-12", status: "overdue" },
  { id: "INV-005", type: "Invoice", client: "JKL Industries", amount: 22000, date: "2024-01-11", status: "paid" },
  {
    id: "INV-006",
    type: "Invoice",
    client: "MNO Construction",
    amount: 18500,
    date: "2024-01-10",
    status: "pending",
  },
  {
    id: "INV-007",
    type: "Credit Note",
    client: "ABC Company Inc.",
    amount: 1500,
    date: "2024-01-09",
    status: "paid",
  },
  { id: "INV-008", type: "Invoice", client: "PQR Retail", amount: 9800, date: "2024-01-08", status: "paid" },
]

export default function DocumentsPage() {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />

      <main className="ml-64 flex-1 bg-muted/20">
        <div className="border-b bg-background px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Documents</h1>
              <p className="text-muted-foreground">Manage all your invoices and documents</p>
            </div>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              New Invoice
            </Button>
          </div>
        </div>

        <div className="p-8">
          {/* Search and Filters */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Search by client, ID or amount..." className="pl-9" />
                </div>
                <Button variant="outline">Filters</Button>
              </div>
            </CardContent>
          </Card>

          {/* Documents Table */}
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Client</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {allDocuments.map((doc) => (
                    <TableRow key={doc.id}>
                      <TableCell className="font-medium">{doc.id}</TableCell>
                      <TableCell>{doc.type}</TableCell>
                      <TableCell>{doc.client}</TableCell>
                      <TableCell>{new Date(doc.date).toLocaleDateString("en-US")}</TableCell>
                      <TableCell className="text-right">{formatCurrency(doc.amount)}</TableCell>
                      <TableCell>
                        {doc.status === "paid" && (
                          <Badge variant="default" className="bg-green-500">
                            Paid
                          </Badge>
                        )}
                        {doc.status === "pending" && <Badge variant="yellow">Pending</Badge>}
                        {doc.status === "overdue" && <Badge variant="destructive">Overdue</Badge>}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon-sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon-sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}