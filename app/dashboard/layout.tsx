import { DashboardSidebar, MobileSidebar } from "@/components/layout/dashboard-sidebar"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-muted/20">

            {/* Sidebar Fijo (Solo visible en Desktop 'md') */}
            <DashboardSidebar />

            {/* Header Móvil (Solo visible en Mobile) */}
            <div className="flex h-16 items-center border-b bg-background px-4 md:hidden sticky top-0 z-30">
                <MobileSidebar />
                <span className="ml-4 font-bold text-lg">Finezit Dashboard</span>
            </div>

            {/* Contenido Principal */}
            {/* md:ml-64 empuja el contenido a la derecha solo en pantallas medianas y grandes */}
            <main className="md:ml-64 min-h-screen transition-all duration-300 ease-in-out">
                {children}
            </main>

        </div>
    )
}