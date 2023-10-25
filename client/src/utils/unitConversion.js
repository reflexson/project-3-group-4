export const convertMetricToImperial = (metricValue) => {
    // Conversion logic from metric to imperial units 
        return metricValue * 2.20462; // 1 kilo is approx 2.20462 pounds 
  };
  
  export const convertImperialToMetric = (imperialValue) => {
    // Conversion from imperial to metric units (example: pounds to kilograms)
    return imperialValue / 2.20462; // 1 pound is approx 0.453592 kilograms
  };
  