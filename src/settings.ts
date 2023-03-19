import type Settings from "./types/Settings";

export const defaultSettings: Settings = {
  chart: {
    min_calories: 0,
    max_calories: 5000,
    min_weight: 70,
    max_weight: 90
  }
}

export default defaultSettings;