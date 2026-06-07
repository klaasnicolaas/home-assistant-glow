---
id: ghost_pulses
title: Unrealistic power spikes (ghost pulses)
description: What to do when you see unrealistic power spikes caused by ghost pulse detections
---

Linked issue: [#983][issue_983]

If you see sudden unrealistic power spikes (e.g. 1000 kW) in Home Assistant, this is likely caused by **ghost pulses**, which are false detections triggered by electrical noise or reflections near your meter's LED.

## What to do?

Increase the **Internal Filter** value on your device. This tells the pulse meter to ignore signals shorter than the configured duration, filtering out the noise that causes ghost detections.

You can adjust this in Home Assistant via the device configuration page, or via the built-in web interface. See the [Internal Filter](/docs/configuration/internal_filter) configuration page for step-by-step instructions.

A value between **1000 µs** (1 ms) and **10000 µs** (10 ms) is a good starting point for most setups.

## Related topics

- [Adjusting the Internal Filter](/docs/configuration/internal_filter)
- [Customizing the Firmware](/docs/advanced/firmware_changes)

[issue_983]: https://github.com/klaasnicolaas/home-assistant-glow/issues/983
