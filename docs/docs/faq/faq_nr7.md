---
id: abrupt_consumption_with_solar
title: Wrong reading when using solar
description: Sudden increase in consumption after a period of zero readings
---

Linked issue: [#274][issue_274]

If you have a solar system, and the consumption remains zero for some time and then gets a value from the sensor, you may see an abrupt increase in the total daily energy sensor value that doesn't match the actual consumption.

## What to do?

Try to use the `left` [calculation method][method] instead of the default (`right`). You can do this by editing your ESPHome device and add the following configuration at the bottom of your YAML file:

```yaml title="your_glow_config.yaml"
sensor:
  - id: !extend sensor_energy_pulse_meter
    total:
      method: left
```

## Related topics

- [ESPHome total daily energy sensor][method]
- [Customizing the firmware](/docs/advanced/firmware_customization.mdx)

[method]: https://esphome.io/components/sensor/total_daily_energy.html
[issue_274]: https://github.com/klaasnicolaas/home-assistant-glow/issues/274
