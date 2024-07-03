---
id: how_to_set_ota_password
title: How to set OTA password
description: How to set an OTA password for your ESPHome device
---

Since [release v4.1.0](/blog/release-4.1.0#esphome-ota-updates), the OTA component is in a separate (external) [package], so it is no longer in your config when you adopt the Home Assistant Glow in ESPHome dashboard. Fortunately, the ESPHome platform has an ID under the OTA component so you can use [!extend]. This way, you can set the OTA password in your Glow configuration.

```yaml title="your_glow_config.yaml"
ota:
  - id: !extend ota_esphome
    password: "your_password"
```

In the example above, replace `your_password` with the password you want to use for OTA updates. Of course, this way you can not only add a password, but also override all platform options with your own settings.

## Related topics

- [ESPHome - OTA updates][esphome_ota]
- [ESPHome - Extend][!extend]
- [Customizing the firmware](/docs/advanced/firmware_customization.mdx)

[esphome_ota]: https://esphome.io/components/ota.html
[!extend]: https://esphome.io/guides/configuration-types#extend
[package]: https://esphome.io/guides/configuration-types#remote-git-packages