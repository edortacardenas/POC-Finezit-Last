import { DashboardSidebar, MobileSidebar } from "@/components/layout/dashboard-sidebar"
import { Footer } from "@/components/layout/footer" // Importas el footer
import { Navbar } from "@/components/layout/navbar"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-muted/20">
            <Navbar />
            {/* Sidebar Fijo */}
            <DashboardSidebar />

            {/* Header Móvil */}
            <div className="flex h-16 items-center border-b bg-background px-4 md:hidden sticky top-0 z-30">
                <MobileSidebar />
                <span className="ml-4 font-bold text-lg">Finezit Dashboard</span>
            </div>

            {/* Contenido Principal */}
            <main className="md:ml-64 min-h-screen transition-all duration-300 ease-in-out flex flex-col">

                {/* El contenido de la página */}
                <div className="flex-1">
                    {children}
                </div>

                {/* FOOTER: Al estar aquí dentro, respeta el margen de 64px del sidebar */}
                <div className="mt-auto">
                    <Footer />
                </div>
            </main>

        </div>
    )
}