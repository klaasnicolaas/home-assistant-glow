---
id: abrupt_consumption_with_solar
title: Wrong reading when using solar
description: Sudden increase in consumption after a period of zero readings
---


If you have a solar system, and the consumption remains zero for some time and then gets a value from the sensor, you may see an abrupt increase in the total daily energy sensor value that doesn't match the actual consumption. 

More details under: https://github.com/klaasnicolaas/home-assistant-glow/issues/274

## What to do?

In your esp config file, use the left calculation method instead of the default
```yaml
platform: total_daily_energy
name: '${friendly_name} - Daily Energy'
id: sensor_total_daily_energy
power_id: sensor_energy_pulse_meter
unit_of_measurement: 'kWh'
icon: mdi:circle-slice-3
state_class: total_increasing
device_class: energy
accuracy_decimals: 3
method: left
```
