---
id: reduce_sensor_data
title: Reduce amount of sensor data
description: How to reduce the amount of sensor data
---

Depending on the configured **pulse rate**, the type of house/apartment and the heating system in use, the sensors that are exposed to Home Assistant may produce a lot of data. For example, with the default **pulse rate** of `1000`, a power consumption of 3600 W means that the sensors produce 2 HA state changes per second (which means 7200 state changes per hour). If you don't need that kind of granularity, you can use [ESPHome sensor filters](https://esphome.io/components/sensor/index.html#sensor-filters) to reduce the rate of updates written to Home Assistant. With the commented-out filters in the [home_assistant_glow.yaml][file] enabled, only 396 state changes will be produced per hour.

[file]: https://github.com/klaasnicolaas/home-assistant-glow/blob/main/components/pulse_meter.yaml#L73