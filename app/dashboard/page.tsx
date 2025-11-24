import { DashboardSidebar } from "@/components/layout/dashboard-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, TrendingUp, AlertCircle, CheckCircle } from "lucide-react"
import { formatCurrency } from "@/lib/utils"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const recentDocuments = [
  {
    id: "FAC-001",
    type: "Invoice",
    client: "Empresa ABC S.A.",
    amount: 15000,
    date: "2024-01-15",
    status: "paid",
  },
  {
    id: "FAC-002",
    type: "Invoice",
    client: "Distribuidora XYZ",
    amount: 8500,
    date: "2024-01-14",
    status: "pending",
  },
  {
    id: "FAC-003",
    type: "Credit Note",
    client: "Comercial DEF",
    amount: 3200,
    date: "2024-01-13",
    status: "paid",
  },
  {
    id: "FAC-004",
    type: "Invoice",
    client: "Servicios GHI",
    amount: 12000,
    date: "2024-01-12",
    status: "overdue",
  },
]

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />

      <main className="ml-64 flex-1 bg-muted/20">
        <div className="border-b bg-background px-8 py-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, here is your summary</p>
        </div>

        <div className="p-8">
          {/* Stats Cards */}
          <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Invoices this Month</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">124</div>
                <p className="text-xs text-muted-foreground">+12% vs last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatCurrency(248500)}</div>
                <p className="text-xs text-muted-foreground">+8% vs last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Accounts Receivable</CardTitle>
                <AlertCircle className="h-4 w-4 text-accent" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatCurrency(45000)}</div>
                <p className="text-xs text-muted-foreground">12 pending invoices</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Compliance</CardTitle>
                <CheckCircle className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">100%</div>
                <p className="text-xs text-muted-foreground">Up to date with SAT</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Documents */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Documents</CardTitle>
              <CardDescription>Latest transactions recorded in your account</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Client</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentDocuments.map((doc) => (
                    <TableRow key={doc.id}>
                      <TableCell className="font-medium">{doc.id}</TableCell>
                      <TableCell>{doc.type}</TableCell>
                      <TableCell>{doc.client}</TableCell>
                      {/* Changed locale to en-US for English date format */}
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