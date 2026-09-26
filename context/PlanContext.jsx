"use client";
import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const PlanContext = createContext();

export function PlanProvider({ children }) {
  const [todayPlan, setTodayPlan] = useState([]);
    const [savedPlan, setSavedPlan] = useState([]);

      const addToPlan = (item) => {
          if (todayPlan.find((w) => w.id === item.id)) {
                toast.error("Already added to Today's Plan!");
                      return;
                          }
                              if (todayPlan.length >= 5) {
                                    toast.error("Maximum 5 lifts allowed for today!");
                                          return;
                                              }
                                                  setTodayPlan([...todayPlan, item]);
                                                      toast.success("Added to today's plan");
                                                        };

                                                          const addToSaved = (item) => {
                                                              if (savedPlan.find((w) => w.id === item.id)) {
                                                                    toast.error("Already saved!");
                                                                          return;
                                                                              }
                                                                                  setSavedPlan([...savedPlan, item]);
                                                                                      toast.success("Saved for later");
                                                                                        };

                                                                                          const removeFromPlan = (id) => {
                                                                                              setTodayPlan(todayPlan.filter((w) => w.id !== id));
                                                                                                  toast.success("Removed from plan");
                                                                                                    };

                                                                                                      const removeFromSaved = (id) => {
                                                                                                          setSavedPlan(savedPlan.filter((w) => w.id !== id));
                                                                                                              toast.success("Removed from saved");
                                                                                                                };

                                                                                                                  const markAsDone = (id) => {
                                                                                                                      setTodayPlan(todayPlan.filter((w) => w.id !== id));
                                                                                                                          toast.success("Workout completed!");
                                                                                                                            };

                                                                                                                              return (
                                                                                                                                  <PlanContext.Provider
                                                                                                                                        value={{
                                                                                                                                                todayPlan,
                                                                                                                                                        savedPlan,
                                                                                                                                                                addToPlan,
                                                                                                                                                                        addToSaved,
                                                                                                                                                                                removeFromPlan,
                                                                                                                                                                                        removeFromSaved,
                                                                                                                                                                                                markAsDone,
                                                                                                                                                                                                      }}
                                                                                                                                                                                                          >
                                                                                                                                                                                                                {children}
                                                                                                                                                                                                                    </PlanContext.Provider>
                                                                                                                                                                                                                      );
                                                                                                                                                                                                                      }

                                                                                                                                                                                                                      export const usePlan = () => useContext(PlanContext);