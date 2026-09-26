# FitLog — Workout Library & Planner

FitLog is a dark-themed, responsive web application built with **Next.js (App Router)** and **Tailwind CSS**. It allows users to browse a library of workouts, view detailed exercise specs, sort exercises by key metrics, and build custom training plans.

## 🚀 Features

- **Workout Library:** Browse 12+ compound and isolation exercises fetched from a live API.
- **Sorting Capability (Challenge C1):** Dynamic sorting by duration, calorie burn, or rating.
- **Detailed Exercise View:** Dedicated pages (`/workout/[id]`) showing target muscle groups, sets, reps, equipment, difficulty, and step-by-step instructions.
- **Interactive Training Plan (Challenge C3):**
  - Add up to 5 exercises to "Today's Plan" with toast alerts for limits and duplicate items.
    - Save exercises for later in a dedicated "Saved" tab.
      - View real-time aggregate stats (total duration in minutes and calorie burn).
        - Mark workouts as done or remove them from the active list.
        - **Responsive Layout:** Optimized dark-mode UI with fixed navigation and sticky action bars.
        - **Custom 404 & Loading States:** Built-in routes for smooth user experience during data fetching and missing paths.

        ## 🛠️ Tech Stack

        - **Framework:** Next.js 15 (App Router)
        - **Styling:** Tailwind CSS
        - **Icons:** Lucide React
        - **State Management:** React Context API (`PlanContext`)
        - **Notifications:** React Hot Toast

        ## ⚙️ Local Setup

        1. Clone the repository:
           ```bash
              git clone [https://github.com/Maxboy997/B14-A6-PH.git](https://github.com/Maxboy997/B14-A6-PH.git)
                 cd B14-A6-PH