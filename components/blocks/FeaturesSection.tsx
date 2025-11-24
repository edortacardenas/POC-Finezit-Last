import React from 'react';
import {
    Clock,
    MapPin,
    MessageSquareWarning,
    DollarSign,
    Activity,
    ShieldCheck,
    FileBarChart
} from 'lucide-react';

// Tarjeta individual con estilo IDÉNTICO a la imagen (Fondo blanco, sombra suave, bordes redondeados)
const FeatureCard = ({ feature, delay }: { feature: any, delay: number }) => (
    <div className="group relative transition-all duration-300 hover:-translate-y-1">
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 h-full">
            {/* Icono flotante sin círculo de fondo o con estilo minimalista según la imagen */}
            <div className="mb-5">
                <feature.icon className={`h-10 w-10 ${feature.textClass}`} strokeWidth={1.5} />
            </div>

            <h3 className="mb-3 text-lg font-extrabold text-slate-900">
                {feature.title}
            </h3>

            <p className="text-sm leading-relaxed text-slate-500 font-medium">
                {feature.desc}
            </p>
        </div>
    </div>
);

const featuresData = [
    // --- COLUMNA CENTRAL (Arriba) ---
    {
        icon: Clock,
        title: "1 to 30 second updating",
        desc: "Unlike other GPS tracking companies, our trackers are updated every 1-30 seconds out of the box, providing turn-by-turn data accuracy.",
        textClass: "text-blue-600"
    },
    // --- COLUMNA IZQUIERDA (1) ---
    {
        icon: MapPin,
        title: "Real-time tracking",
        desc: "Access real-time GPS tracking for fleet vehicles 24 hours a day, 7 days a week. 100% web based (desktop or mobile). No software required.",
        textClass: "text-orange-600"
    },
    // --- COLUMNA DERECHA (1) ---
    {
        icon: MessageSquareWarning,
        title: "Text and email alerts",
        desc: "Receive text and email updates about unsafe driver behavior and after-hours or out-of-area usage.",
        textClass: "text-red-600"
    },
    // --- COLUMNA CENTRAL (Medio) ---
    {
        icon: DollarSign,
        title: "Affordable Fleet Management Solution",
        desc: "Only $13.95 a month, with a free device*. Device must be returned to end service.",
        textClass: "text-green-600"
    },
    // --- COLUMNA IZQUIERDA (2) ---
    {
        icon: Activity,
        title: "Engine Diagnostics",
        desc: "Monitor engine health and get alerts for maintenance needs before they become costly repairs.",
        textClass: "text-purple-600"
    },
    // --- COLUMNA DERECHA (2) ---
    {
        icon: ShieldCheck,
        title: "Anti-Theft Protection",
        desc: "Instant alerts if a vehicle is moved without ignition or leaves a designated safe zone (Geofencing).",
        textClass: "text-indigo-600"
    },
    // --- COLUMNA CENTRAL (Abajo) ---
    {
        icon: FileBarChart,
        title: "Detailed Reports",
        desc: "Generate comprehensive reports on mileage, fuel usage, and driver performance with one click.",
        textClass: "text-teal-600"
    }
];

export default function FeaturesSection() {
    // Separamos los datos manualmente para lograr la distribución exacta
    // Centro: 3 tarjetas (Indices 0, 3, 6)
    const centerCol = [featuresData[0], featuresData[3], featuresData[6]];
    // Izquierda: 2 tarjetas (Indices 1, 4)
    const leftCol = [featuresData[1], featuresData[4]];
    // Derecha: 2 tarjetas (Indices 2, 5)
    const rightCol = [featuresData[2], featuresData[5]];

    return (
        <section className="bg-slate-50 py-24">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold md:text-5xl text-slate-900">
                        Everything you need in one place
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-slate-500">
                        Manage your business with professional and easy-to-use tools
                    </p>
                </div>

                {/* 
           LAYOUT DE 3 COLUMNAS FLEXIBLES 
           Usamos flex-row para escritorio y flex-col para móvil.
           'gap-6' mantiene las tarjetas cerca pero no pegadas.
        */}
                <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto items-start justify-center">

                    {/* COLUMNA IZQUIERDA (Desplazada hacia abajo con mt-12 en escritorio) */}
                    <div className="flex flex-col gap-6 flex-1 lg:mt-12 w-full">
                        {leftCol.map((feature, idx) => (
                            <FeatureCard key={idx} feature={feature} delay={idx} />
                        ))}
                    </div>

                    {/* COLUMNA CENTRAL (Sin margen superior, empieza antes) */}
                    <div className="flex flex-col gap-6 flex-1 w-full">
                        {centerCol.map((feature, idx) => (
                            <FeatureCard key={idx} feature={feature} delay={idx} />
                        ))}
                    </div>

                    {/* COLUMNA DERECHA (Desplazada hacia abajo con mt-12 en escritorio) */}
                    <div className="flex flex-col gap-6 flex-1 lg:mt-12 w-full">
                        {rightCol.map((feature, idx) => (
                            <FeatureCard key={idx} feature={feature} delay={idx} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}