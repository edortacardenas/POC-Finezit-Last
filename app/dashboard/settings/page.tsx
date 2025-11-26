"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { User, Building, Bell, CreditCard } from "lucide-react" // Iconos para mejorar la UX visual

export default function SettingsPage() {
  return (
    <>
      {/* 1. Header Responsive: Padding reducido en móvil */}
      <div className="border-b bg-background px-4 py-6 md:px-8">
        <h1 className="text-2xl md:text-3xl font-bold">Settings</h1>
        <p className="text-sm md:text-base text-muted-foreground">Configure your account and preferences</p>
      </div>

      {/* 2. Contenido Principal */}
      <div className="p-4 md:p-8 max-w-6xl mx-auto"> {/* Max-w para que no se estire demasiado en pantallas gigantes */}

        <Tabs defaultValue="profile" className="space-y-6">

          {/* 
             3. TabsList Responsive: 
             - w-full: Ocupa todo el ancho.
             - overflow-x-auto: Permite scroll horizontal en móviles si no caben.
             - justify-start: Alinea a la izquierda para scroll natural.
             - h-auto: Permite que los botones tengan su altura natural.
          */}
          <TabsList className="w-full justify-start overflow-x-auto h-auto p-1 bg-muted/50 rounded-xl">
            <TabsTrigger value="profile" className="gap-2 px-4 py-2">
              <User className="h-4 w-4" /> Profile
            </TabsTrigger>
            <TabsTrigger value="company" className="gap-2 px-4 py-2">
              <Building className="h-4 w-4" /> Company
            </TabsTrigger>
            <TabsTrigger value="notifications" className="gap-2 px-4 py-2">
              <Bell className="h-4 w-4" /> Notifications
            </TabsTrigger>
            <TabsTrigger value="billing" className="gap-2 px-4 py-2">
              <CreditCard className="h-4 w-4" /> Billing
            </TabsTrigger>
          </TabsList>

          {/* --- PROFILE TAB --- */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your profile information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" defaultValue="+1 555 123 4567" />
                </div>
                <div className="pt-2">
                  <Button>Save changes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* --- COMPANY TAB --- */}
          <TabsContent value="company">
            <Card>
              <CardHeader>
                <CardTitle>Company Information</CardTitle>
                <CardDescription>Configure your company tax details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Legal Name</Label>
                  <Input id="companyName" defaultValue="My Company Inc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rfc">Tax ID</Label>
                  <Input id="rfc" defaultValue="TAX123456ABC" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Fiscal Address</Label>
                  <Input id="address" defaultValue="123 Main St, Downtown" />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" defaultValue="Mexico City" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">Zip Code</Label>
                    <Input id="zipCode" defaultValue="01000" />
                  </div>
                </div>
                <div className="pt-2">
                  <Button>Save changes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* --- NOTIFICATIONS TAB --- */}
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Configure how you want to receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Usamos gap-4 para evitar que el texto toque el switch en pantallas muy pequeñas */}
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <Label className="text-base">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive updates via email</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <Label className="text-base">Invoice Alerts</Label>
                    <p className="text-sm text-muted-foreground">New invoice and due date notifications</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <Label className="text-base">Tax Reminders</Label>
                    <p className="text-sm text-muted-foreground">Alerts about upcoming tax obligations</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <Label className="text-base">Newsletter</Label>
                    <p className="text-sm text-muted-foreground">Receive news and updates from Finezit</p>
                  </div>
                  <Switch />
                </div>
                <div className="pt-2">
                  <Button>Save preferences</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* --- BILLING TAB --- */}
          <TabsContent value="billing">
            <Card>
              <CardHeader>
                <CardTitle>Billing & Subscription</CardTitle>
                <CardDescription>Manage your plan and payment method</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">

                {/* 4. Billing Items Responsive: flex-col en móvil, flex-row en escritorio */}
                <div>
                  <h3 className="mb-3 font-semibold text-sm uppercase tracking-wide text-muted-foreground">Current Plan</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between rounded-lg border p-4 gap-4 bg-slate-50/50">
                    <div>
                      <p className="font-bold text-lg">Professional Plan</p>
                      <p className="text-sm text-muted-foreground">$999 MXN/month</p>
                    </div>
                    <Button variant="outline" className="w-full sm:w-auto">Change Plan</Button>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-sm uppercase tracking-wide text-muted-foreground">Payment Method</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between rounded-lg border p-4 gap-4 bg-slate-50/50">
                    <div className="flex items-center gap-3">
                      <div className="bg-slate-100 p-2 rounded border">
                        <CreditCard className="h-6 w-6 text-slate-700" />
                      </div>
                      <div>
                        <p className="font-medium">•••• •••• •••• 4242</p>
                        <p className="text-xs text-muted-foreground">Expires 12/25</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full sm:w-auto">Update</Button>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="mb-1 font-semibold text-blue-900">Next Payment</h3>
                  <p className="text-sm text-blue-700">
                    Your next payment of <span className="font-bold">$999 MXN</span> will be processed on February 15, 2024
                  </p>
                </div>

              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}