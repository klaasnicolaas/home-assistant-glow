# Home Assistant Glow 🌟

<!-- PROJECT SHIELDS -->
![Project Maintenance][maintenance-shield]
[![License][license-shield]](LICENSE)
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

[![GitHub Activity][commits-shield]][commits]
[![GitHub Last Commit][last-commit-shield]][commits]
[![Contributors][contributors-shield]][contributors-url]

During my internship at [Nabu Casa][nc] in the first half of 2021, I focused on energy management in homes and how to collect all energy data and display it on a dashboard. From core release **2021.8** you can now also get started with the [energy dashboard][energy] in Home Assistant!

<p align="center">
  <img width="80%" src="static/images/home-assistant-glow.jpg">
</p>

<details>
  <summary>CLICK HERE! To see the Home Assistant Glow in action.</summary>

  <p align="center">
    <img src="static/images/glow_sensor_testing.gif" alt="Glow testing" width="40%"/><img src="static/images/glow_in_action.gif" alt="Glow in action" width="40%"/>
  </p>
</details>

Home Assistant Glow makes a *(not so)* smart meter without a P1 port easily readable, reading the pulse LED that is always present in most cases and it works with [ESPHome][esphome]! To neatly hide it all in your meter cupboard, a case has been designed that you can 3D print yourself.

### How do I know if my meter is supported?

To make sure your meter will work with the Home Assistant Glow, you have to look for the **imp/kWh** rate (see picture). Note the value, because it will be of importance at a later stage to configure the `.yaml` file.

<p align="center">
  <img width="60%" src="static/images/pulse_rate.png">
</p>

## Hardware

First, fill your 🛒 or see if you already have the components below.

- [ESP32][esp32-shop]
- [Dupont Jumpers][dupont-jumpers-shop]
- 3D printed case (see the [case](/case) folder)
- Photodiode: [Banggood][photodiode-bg-shop] or [AliExpress][photodiode-ali-shop] (make sure that you do not accidentally order or receive an LDR)
- LED RGB 5mm 4 pin - kathode: [Banggood][rgbled-bg-shop] or [AliExpress][rgbled-ali-shop]

### Diagrams

How everything is connected together.

#### Photodiode

| PHOTODIODE | ESP32        | D1 mini / ESP8266 |
|------------|--------------|-------------------|
| A0         | NOT USING    | NOT USING         |
| DO         | D12 (GPIO12) | D6 (GPIO12)       |
| VCC        | 3V3          | 3V3               |
| GND        | GND          | GND               |

For problems with the measurements, see the [FAQ part](#faq) further down.

#### LED

How the status led is connected to the ESP32. For each measured pulse, the LED will briefly flash red and in case of no WiFi connection, the LED will continue to flash blue.

| LED    | ESP32      | D1 mini / ESP8266 |
|--------|------------|-------------------|
| RED    | D2 (GPIO2) | D4 (GPIO2)        |      
| GREEN  | D4 (GPIO4) | D2 (GPIO4)        |
| BLUE   | D5 (GPIO5) | D1 (GPIO5)        |
| GND    | GND        | GND               |

## Get started

Once you are done connecting all the hardware, we'll get started with the configuration for ESPHome. In this repository you will find the file [home_assistant_glow.yaml][file], which you can copy into the `esphome` folder of your Home Assistant config. Adjust the value `pulse_rate` under **substitutions** to the value on your meter ([how do I find my imp/kWh rate?](#how-do-i-know-if-my-meter-is-supported)), by default the value is `1000` in the yaml file. Finally go through the installation wizard of ESPHome and flash the ESP32/8266.

## FAQ

Anwers to some of the most frequently asked questions:

### Wrong soldered diode

Issue: [#34][issue_34]

A number of users have reported receiving the recommended diode board from various sources, only to find the diode has been soldered to the board the wrong way round. This can cause that your pulse LED is not measured regardless of the sensitivity you set for the diode.

<p align="center">
  <img src="static/images/correct_board.png">
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
[issue_34]: https://github.com/klaasnicolaas/home-assistant-glow/issues/34

<!-- Shields -->
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
[commits]: https://github.com/klaasnicolaas/home-assistant-glow/commits/main
[last-commit-shield]: https://img.shields.io/github/last-commit/klaasnicolaas/home-assistant-glow.svg

<!-- Hardware -->
[esp32-shop]: https://www.banggood.com/bang/?tt=16956_12_417111_&r=https%3A%2F%2Fnl.banggood.com%2FGeekcreit-ESP32-WiFi%2Bbluetooth-Development-Board-Ultra-Low-Power-Consumption-Dual-Cores-Pins-Unsoldered-p-1214159.html%3Futm_source%3Dgoogle%26utm_medium%3Dorganic%26utm_content%3D-%26utm_campaign%3Dnone_pps_copy%26_branch_match_id%3D791437124706440886%26_branch_referrer%3DH4sIAAAAAAAAA8soKSkottLXT0rMS0%2FPz0%2FRSywo0MvJzMvW9ynOLzRL9PBMz0wCAJ%2FOhjUlAAAA%26cur_warehouse%3DCZ%26DCC%3DNL%26currency%3DEUR
[dupont-jumpers-shop]: https://www.banggood.com/bang/?tt=16956_12_417111_&r=https%3A%2F%2Fnl.banggood.com%2F120pcs-20cm-Male-To-Female-Female-To-Female-Male-To-Male-Color-Breadboard-Jumper-Cable-Dupont-Wire-p-974006.html%3Futm_source%3Dadwords%26utm_medium%3Dorganic%26utm_content%3D-%26utm_campaign%3Dnone_pps_copy%26_branch_match_id%3D791437124706440886%26_branch_referrer%3DH4sIAAAAAAAAA8soKSkottLXT0rMS0%252FPz0%252FRSywo0MvJzMvW9ywxSzYMD%252FBMz0wCAKK%252BdgElAAAA%26cur_warehouse%3DCN
[photodiode-bg-shop]: https://www.banggood.com/bang/?tt=16956_12_417111_&r=https%3A%2F%2Fnl.banggood.com%2F4Pin-Photodiode-Sensor-Controller-Module-Measure-Module-p-1416445.html%3Futm_source%3Dadwords%26utm_medium%3Dorganic%26utm_content%3D-%26utm_campaign%3Dnone_pps_copy%26_branch_match_id%3D791437124706440886%26_branch_referrer%3DH4sIAAAAAAAAA8soKSkottLXT0rMS0%252FPz0%252FRSywo0MvJzMvWN%252FIvTHHLDPdMz0wCAGUhz1klAAAA%26cur_warehouse%3DCN%26ID%3D522225
[photodiode-ali-shop]: https://tc.tradetracker.net/?c=15640&m=12&a=417111&r=&u=%2Fitem%2F1005001640685908.html
[rgbled-bg-shop]: https://www.banggood.com/bang/?tt=16956_12_417111_&r=https%3A%2F%2Fnl.banggood.com%2F50pcs-LED-RGB-Common-Cathode-4-Pin-F5-5MM-Diode-p-1016398.html%3Futm_source%3Dadwords%26utm_medium%3Dorganic%26utm_content%3D-%26utm_campaign%3Dnone_pps_copy%26_branch_match_id%3D791437124706440886%26_branch_referrer%3DH4sIAAAAAAAAA8soKSkottLXT0rMS0%252FPz0%252FRSywo0MvJzMvWT851TPYuKPVOz0wCANu%252FpdslAAAA%26cur_warehouse%3DCN
[rgbled-ali-shop]: https://tc.tradetracker.net/?c=15640&m=12&a=417111&r=&u=%2Fitem%2F4000225253691.html