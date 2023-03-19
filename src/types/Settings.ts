type ChartSettings = {
  min_weight: number;
  max_weight: number;
  min_calories: number;
  max_calories: number;
}

export type Settings = {
  chart: ChartSettings
}

export default Settings;