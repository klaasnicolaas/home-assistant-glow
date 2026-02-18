---
id: encryption_key_required
title: Home Assistant asks for encryption key
description: Why Home Assistant asks for an encryption key when adding the Glow device
---

Linked issue: [#870][issue_870]

When adding your Glow to Home Assistant, you may be prompted to enter an encryption key. This should not happen if you're using the default firmware installed via this website.

## What causes this?

The default firmware available on this [website][website] does not include an encryption key in the YAML configuration. However, if you have made any modifications to the firmware, an encryption key may have been added automatically.

The most common scenario is:

1. You added the Glow to the ESPHome Builder (app)
2. You clicked "Take Control" in ESPHome Builder
3. ESPHome automatically installed custom firmware and added an `encryption` -> `key:` entry to your YAML configuration

## What to do?

If you're using custom firmware through ESPHome Builder, you need to find the encryption key in your device's YAML configuration:

1. Open ESPHome Builder
2. Find your Glow device (e.g., *"home-assistant-glow-XXXX"*)
3. Click **Edit** to view the YAML configuration
4. Look for the `api:` section with the `encryption` -> `key:` entry
5. Use this key when adding the device to Home Assistant

:::note
Once you start using the ESPHome Builder and make custom firmware modifications, you are responsible for managing your own configuration, including the encryption key. Using ESPHome Builder requires advanced skills and understanding of how ESPHome works.
:::

## Avoiding this issue

If you want to avoid encryption key issues:

- **Stick with the default firmware** if you don't need customization - this way you get automatic updates and no encryption complexity
- **Only adopt the device in ESPHome Builder** if you need specific customizations that aren't available in the default firmware

See [Customizing the Firmware](/docs/advanced/firmware_changes) for more information about when and why you might want to customize.

## Related topics

- [ESPHome - Native API][esphome_api]
- [Customizing the Firmware](/docs/advanced/firmware_changes)

[esphome_api]: https://esphome.io/components/api.html
[issue_870]: https://github.com/klaasnicolaas/home-assistant-glow/issues/870
[website]: https://glow-energy.io