import Link from "next/link";
import { Dumbbell } from "lucide-react";

export default function NotFound() {
  return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl mb-6">
                    <Dumbbell className="w-16 h-16 text-[#ccff00] mx-auto mb-2 animate-bounce" />
                            <h1 className="text-6xl font-black text-white">404</h1>
                                  </div>
                                        <h2 className="text-2xl font-bold text-white uppercase mb-2">Page Not Found</h2>
                                              <p className="text-neutral-400 text-sm max-w-md mb-6">
                                                      The workout or page you are looking for does not exist or has been moved.
                                                            </p>
                                                                  <Link
                                                                          href="/"
                                                                                  className="bg-[#ccff00] text-black font-bold text-xs uppercase px-6 py-3 rounded-xl hover:opacity-90 transition"
                                                                                        >
                                                                                                Back to Home
                                                                                                      </Link>
                                                                                                          </div>
                                                                                                            );
                                                                                                            }