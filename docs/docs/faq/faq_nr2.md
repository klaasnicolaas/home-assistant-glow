---
id: reduce_sensor_data
title: Reduce amount of sensor data
description: How to reduce the amount of sensor data
---

Depending on the configured **pulse rate**, the type of house/apartment and the heating system in use, the sensors that are exposed to Home Assistant may produce a lot of data. For example, with the default **pulse rate** of `1000`, a power consumption of 3600 W means that the sensors produce 2 HA state changes per second (which means 7200 state changes per hour).

If you don't need that kind of granularity, you can use [ESPHome sensor filters][filters] to reduce the rate of updates written to Home Assistant. This can be done by adding the following YAML code at the bottom of your Home Assistant Glow configuration file:

```yaml title="your_glow_config.yaml"
sensor:
  - id: !extend sensor_energy_pulse_meter
    filters:
      # Update the sensor with an average every 10th second. See
      - throttle_average: 10s
      - filter_out: NaN
    total:
      filters:
        # Update the sensor once per 0.1 kWh consumed, or every 5th minute, whichever happens sooner.
        - delta: 0.01
        - heartbeat: 300s
```

After applying the filters, only 396 state changes will be produced per hour. You can read more about making YAML adjustments on the [customizing the firmware](/docs/advanced/firmware_changes) page.

## Related topics

- [ESPHome sensor filters][filters]
- [ESPHome pulse meter](https://esphome.io/components/sensor/pulse_meter.html)
- [ESPHome total daily energy sensor](https://esphome.io/components/sensor/total_daily_energy.html)
- [Customizing the Firmware](/docs/advanced/firmware_changes)

[filters]: https://esphome.io/components/sensor/index.html#sensor-filters
[file]: https://github.com/klaasnicolaas/home-assistant-glow/blob/main/components/pulse_meter.yaml#L73