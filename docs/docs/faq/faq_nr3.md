---
id: daily_energy_reset
title: Daily energy won't reset
description: What to do when the daily energy entity won't reset
---

Linked issue: [#140][issue_140]

By default, the Home Assistant Glow uses the `homeassistant` [time platform][time-platform], which synchronizes the current time via the native API from your home assistant config. If this doesn't work, you could consider using the `sntp` time platform, as in the example below:

```yaml title="components/basis.yaml"
time:
  - platform: sntp
    id: sntp_time
```

[issue_140]: https://github.com/klaasnicolaas/home-assistant-glow/issues/140
[time-platform]: https://esphome.io/components/time.html#home-assistant-time-source