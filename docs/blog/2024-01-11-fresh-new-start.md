---
slug: fresh-new-start
title: Let's do a fresh new start!
authors: klaas
tags: [glow, new, update]
---

The Home Assistant Glow 🌟 has been around for almost 2.5 years now (Jul 28, 2021) and still there is a lot of interest in the project 🙏🏻 (as can be seen from the number of repository stars).

[![Star History Chart](https://api.star-history.com/svg?repos=klaasnicolaas/home-assistant-glow&type=Date)](https://star-history.com/#klaasnicolaas/home-assistant-glow)
<!-- truncate -->

However, over the past year and a half I've paid little attention to the project, simply because I was too busy studying to become a UX Engineer. Now that I have (almost) graduated, I've a lot more time to spend on the project again and I immediately started working on a refactor of the repository.

## Why a refactor?

In the past I've made a number of choices that have actually made maintaining a small project like the Home Assistant Glow too complex (in my opinion). In addition, I was not satisfied with the documentation and wanted to add more structure in the project.

## What has changed?

TL;DR - A lot 😅 ... v4.0.0 has been released, the most important changes are listed below.

### Breaking changes

1. The pulse meter pin for ESP32 boards has been changed from GPIO `13` to GPIO `26`.
2. The `home_assistant_glow.yaml` file no longer exists.

This would break the **package_import** for existing configs for people in the ESPHome dashboard. If you would like to use the latest version, I recommend re-flashing your ESP according to step 2 in [Getting Started](/docs/getting-started#step-2-install-firmware), and if desired, [re-adopting](/docs/advanced/firmware_customization#adopting-the-device) your device again in ESPHome dashboard (add-on).

### New config structure

_Relates to point 2 in the breaking changes._

The configuration YAML for the Home Assistant Glow is now split into multiple files. This makes building the firmware per board type easier without a lot of code duplication.

### Documentation website

The previous website has been replaced with a comprehensive documentation website, accessible at [https://glow-energy.io](https://glow-energy.io). This new website is built using [Docusaurus](https://docusaurus.io/), a static site generator widely used by various open source projects and hosted on GitHub Pages. It provides more space to present information in a structured format. Additionally, users can conveniently install firmware on their ESP directly from their browser using [ESP web tools](https://esphome.github.io/esp-web-tools/).

### Configuration in UI

This feature was already present in the old development branch, but never included in a release. From now on, you set the **imp/kWh** rate via an input field in the device UI or via an entity in Home Assistant.

### Building the firmware

The firmware building process has undergone a significant rewrite, allowing the generation of firmware files tailored to various board types. These files are used in the [Getting Started](/docs/getting-started#step-2-install-firmware) section by ESP web tools.

Moving forward, firmware builds will be tested on a weekly basis. This ensures that build problems with latest versions of ESPHome are identified more quickly, providing new users with up-to-date features and improvements in the future.

---

That's it! If you would like to support the project you can do so through [Github sponsors](https://github.com/sponsors/klaasnicolaas). If you have any questions, you can ask them via the [discussions](https://github.com/klaasnicolaas/home-assistant-glow/discussions) and if you encounter problems with the Home Assistant Glow, you can indicate this in the [issues](https://github.com/klaasnicolaas/home-assistant-glow/issues).

./Klaas
