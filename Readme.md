## Home Assistant Glow 🌟

<!-- PROJECT SHIELDS -->
![Project Maintenance][maintenance-shield]
[![License][license-shield]](LICENSE)
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

[![GitHub Activity][commits-shield]][commits]
[![GitHub Last Commit][last-commit-shield]][commits]
[![Contributors][contributors-shield]][contributors-url]

During my internship at [Nabu Casa][nc] in the first half of 2021, I focused on energy management in your house and how you can collect all energy data and display it in a dashboard. From core release **2021.8** you can now also get started with the [energy dashboard][energy] in Home Assistant!

<p align="center">
  <img width="80%" src="images/home-assistant-glow.jpg">
</p>

<details>
  <summary>CLICK HERE! To see the Home Assistant Glow in action.</summary>

  <p align="center">
    <img src="images/glow_sensor_testing.gif" alt="Glow testing" width="40%"/><img src="images/glow_in_action.gif" alt="Glow in action" width="40%"/>
  </p>
</details>

Home Assistant Glow makes it possible to read a (not so) smart meter that is not equipped with a P1 port, reading the pulse LED that is always present in most cases and it works with [ESPHome][esphome]! To neatly hide it all in your meter cupboard, a case has been designed that you can 3D print yourself.

### How do I know if my meter is supported

To make sure your meter will work with the Home Assistant Glow, you have to look for the **imp/kWh** rate (see picture). Make a note of it, because you will need this value at a later stage to configure the yaml file.

<p align="center">
  <img width="60%" src="images/pulse_rate.png">
</p>

## Hardware

First, fill your 🛒 or see if you already have the components below.

- [ESP32](https://banggood.app.link/Lsoq6aHIgib)
- [Dupont Jumpers](https://banggood.app.link/It6c1WPIgib)
- 3D printed case (see the [case](/case) folder)
- Photodiode - [Banggood](https://banggood.app.link/2OqdFiWIgib) or [AliExpress](https://nl.aliexpress.com/item/1005001640685908.html) (make sure that you do not accidentally order or receive an LDR)
- [LED RGB 5mm 4 pin kathode](https://banggood.app.link/cmAcKpuKgib)

### Diagrams

How everything is connected together.

#### Photodiode

| PHOTODIODE | ESP32        |
|------------|--------------|
| A0         | NOT USING    |
| DO         | D12 (GPIO12) |
| VCC        | 3V3          |
| GND        | GND          |

For problems with the measurements, see the [FAQ part](#faq) further down.

#### LED

How the status led is connected to the ESP32. For each measured pulse, the LED will briefly flash red and in case of no WiFi connection, the LED will continue to flash blue.

| LED    | ESP32      |
|--------|------------|
| RED    | D2 (GPIO2) |
| GREEN  | D4 (GPIO4) |
| BLUE   | D5 (GPIO5) |
| GND    | GND        |

## Get started

Once you've connected all the hardware, we'll get started with the configuration for ESPHome. In this repository you will find the file [home_assistant_glow.yaml][file], which you can copy into the `esphome` folder of your Home Assistant config. Adjust the value `pulse_rate` under **substitutions** to the value on your meter ([how do I find my imp/kWh rate?](#how-do-i-know-if-my-meter-is-supported)), by default the value `1000` is used in the yaml file. Finally go through the installation wizard of ESPHome and flash the ESP32/8266.

## FAQ

The answers to the most common problems raised in the issues.

### Wrong soldered diode

Issue: #34

A number of users have reported receiving the recommended diode board from various sources, only to find the diode has been soldered to the board the wrong way round. This can cause that your pulse LED is not measured regardless of the sensitivity you set for the diode.

<p align="center">
  <img src="images/correct_board.png">
</p>

The large triangular part of the diode, should be soldered to the positive side of the board not the negative. If yours is orientated as above, you should desolder the photodiode invert it and resolder so the larger triangular part of the diode is connected to positive.

## License

MIT License

Copyright (c) 2021 Klaas Schoute

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

<!-- MARKDOWN LINKS & IMAGES -->
[file]: /home_assistant_glow.yaml
[esphome]: https://esphome.io
[nc]: https://www.nabucasa.com
[energy]: https://home-assistant.io/docs/energy/

[maintenance-shield]: https://img.shields.io/maintenance/yes/2021.svg
[contributors-shield]: https://img.shields.io/github/contributors/klaasnicolaas/home-assistant-glow.svg
[contributors-url]: https://github.com/klaasnicolaas/home-assistant-glow/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/klaasnicolaas/home-assistant-glow.svg
[forks-url]: https://github.com/klaasnicolaas/home-assistant-glow/network/members
[stars-shield]: https://img.shields.io/github/stars/klaasnicolaas/home-assistant-glow.svg
[stars-url]: https://github.com/klaasnicolaas/home-assistant-glow/stargazers
[issues-shield]: https://img.shields.io/github/issues/klaasnicolaas/home-assistant-glow.svg
[issues-url]: https://github.com/klaasnicolaas/home-assistant-glow/issues
[license-shield]: https://img.shields.io/github/license/klaasnicolaas/home-assistant-glow.svg
[commits-shield]: https://img.shields.io/github/commit-activity/y/klaasnicolaas/home-assistant-glow.svg
[commits]: https://github.com/klaasnicolaas/home-assistant-glow/commits/master
[last-commit-shield]: https://img.shields.io/github/last-commit/klaasnicolaas/home-assistant-glow.svg