import "./globals.css";
import { PlanProvider } from "@/context/PlanContext";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "FitLog - Workout Library",
    description: "Train with intent. Log every set.",
    };

    export default function RootLayout({ children }) {
      return (
          <html lang="en">
                <body className="bg-neutral-950 text-white min-h-screen flex flex-col justify-between">
                        <PlanProvider>
                                  <Toaster position="bottom-right" />
                                            <Navbar />
                                                      <main className="flex-grow">{children}</main>
                                                                <Footer />
                                                                        </PlanProvider>
                                                                              </body>
                                                                                  </html>
                                                                                    );
                                                                                    }