import { Dumbbell } from "lucide-react";

export default function Footer() {
  return (
      <footer className="bg-neutral-900 border-t border-neutral-800 py-6 mt-12 px-4 text-neutral-400 text-sm">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 font-bold text-white">
                              <Dumbbell className="w-5 h-5 text-[#ccff00]" />
                                        <span>FITLOG</span>
                                                </div>
                                                        <p className="text-xs text-center md:text-right">
                                                                  © 2026 FitLog — Workout Library. Train hard, log honest.
                                                                          </p>
                                                                                </div>
                                                                                    </footer>
                                                                                      );
                                                                                      }