---
id: reduce_sensor_data
title: Reduce amount of sensor data
description: How to reduce the amount of sensor data
---

Depending on the configured **pulse rate**, the type of house/apartment and the heating system in use, the sensors that are exposed to Home Assistant may produce a lot of data. For example, with the default **pulse rate** of `1000`, a power consumption of 3600 W means that the sensors produce 2 HA state changes per second (which means 7200 state changes per hour). If you don't need that kind of granularity, you can use [ESPHome sensor filters](https://esphome.io/components/sensor/index.html#sensor-filters) to reduce the rate of updates written to Home Assistant. With the commented-out filters in the [home_assistant_glow.yaml][file] enabled, only 396 state changes will be produced per hour.

### Pulse meter - power sensor

```yaml title="components/pulse_meter.yaml"
filters:
    # multiply value = (60 / imp value) * 1000
    # - multiply: 60
    - lambda: return x * ((60.0 / id(select_pulse_rate).state) * 1000.0);

    # Update the sensor with an average every 10th second. See
    - throttle_average: 10s
    - filter_out: NaN
```

### Pulse meter - total energy sensor

```yaml title="components/pulse_meter.yaml"
filters:
    # multiply value = 1 / imp value
    # - multiply: 0.001
    - lambda: return x * (1.0 / id(select_pulse_rate).state);

    # Update the sensor once per 0.1 kWh consumed, or every 5th minute, whichever happens sooner.
    - delta: 0.01
    - heartbeat: 300s
```

[file]: https://github.com/klaasnicolaas/home-assistant-glow/blob/main/components/pulse_meter.yaml#L73