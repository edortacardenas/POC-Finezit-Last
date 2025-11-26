// app/dashboard/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, FileText, AlertCircle, CheckCircle } from "lucide-react" // Agregué iconos faltantes
import { formatCurrency } from "@/lib/utils"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const recentDocuments = [
  { id: "FAC-001", type: "Invoice", client: "Empresa ABC S.A.", amount: 15000, date: "2024-01-15", status: "paid" },
  { id: "FAC-002", type: "Invoice", client: "Distribuidora XYZ", amount: 8500, date: "2024-01-14", status: "pending" },
  { id: "FAC-003", type: "Credit Note", client: "Comercial DEF", amount: 3200, date: "2024-01-13", status: "paid" },
  { id: "FAC-004", type: "Invoice", client: "Servicios GHI", amount: 12000, date: "2024-01-12", status: "overdue" },
]

export default function DashboardPage() {
  return (
    <div className="pb-10"> {/* Padding bottom para que el footer no se pegue */}

      {/* Header específico responsive */}
      <div className="border-b bg-background px-4 py-6 md:px-8">
        <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
        <p className="text-sm md:text-base text-muted-foreground">Welcome back, here is your summary</p>
      </div>

      <div className="p-4 md:p-8">

        {/* Stats Cards - Responsive Grid */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

        {/* Recent Documents Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Documents</CardTitle>
            <CardDescription>Latest transactions recorded in your account</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Contenedor con scroll horizontal para móviles */}
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
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
                      <TableCell className="font-medium whitespace-nowrap">{doc.id}</TableCell>
                      <TableCell>{doc.type}</TableCell>
                      <TableCell className="whitespace-nowrap">{doc.client}</TableCell>
                      <TableCell className="whitespace-nowrap">{new Date(doc.date).toLocaleDateString("en-US")}</TableCell>
                      <TableCell className="text-right font-medium">{formatCurrency(doc.amount)}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
                          ${doc.status === 'paid' ? 'bg-green-100 text-green-800' :
                            doc.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'}`}>
                          {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}