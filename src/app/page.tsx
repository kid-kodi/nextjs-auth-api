import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
      <div className="relative min-h-screen">
        {/* Image d'arrière-plan */}
        <div
          className="absolute inset-0 bg-[url('/images/bg-img.jpeg')] bg-cover bg-center bg-no-repeat"
          aria-hidden="true"
        />

        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

        {/* Contenu */}
        <div className="relative z-10 p-8 flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-4xl font-bold text-white">
            
          </h1>
          {/* Autres éléments */}
        </div>
      </div>
      <div className="flex items-center justify-center h-screen bg-cover bg-center">
        <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-6 max-w-lg text-center">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-gray-800">
              Bienvenue sur le Portail Business Plan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Créez, gérez et suivez vos plans d'affaires en toute simplicité.
            </p>
            <div className="mt-4">
              <Button className="w-full" asChild>
                <Link href={`/login`}>
                  Commencer
                  <ArrowRightIcon size={15} />
                </Link>
              </Button>
            </div>
          </CardContent>
        </div>
      </div>
    </div>
  );
}
