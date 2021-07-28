## Home Assistant Glow 🌟

During my internship at [Nabu Casa][nc] in the first half of 2021, I focused on energy management in your house and how you can collect all energy data and display it in a dashboard.

<img src="images/glow_sensor_testing.gif" alt="Glow testing" style="width: 50%"/><img src="images/glow_in_action.gif" alt="Glow in action" style="width: 50%;"/>

Home Assistant Glow makes it possible to read a (not so) smart meter that is not equipped with a P1 port, reading the pulse LED that is always present in most cases and it works with [ESPHome][esphome]! To neatly hide it all in your meter cupboard, a case has been designed that you can 3D print yourself.

## Hardware

First, fill your 🛒 or see if you already have the components below.

- [ESP32](https://banggood.app.link/Lsoq6aHIgib)
- [Dupont Jumpers](https://banggood.app.link/It6c1WPIgib)
- 3D printed case (see the case folder)
- [Photodiode](https://banggood.app.link/2OqdFiWIgib) (make sure that you do not accidentally order or receive an LDR)
- [LED RGB 5mm 4 pin kathode](https://banggood.app.link/cmAcKpuKgib)

### LED diagram

How the status led is connected to the ESP32. For each measured pulse, the LED will briefly flash red and in case of no WiFi connection, the LED will continue to flash blue.

| LED    | ESP32      |
|--------|------------|
| RED    | D2 (GPIO2) |
| GREEN  | D4 (GPIO4) |
| BLUE   | D5 (GPIO5) |
| GND    | GND        |

## ESPHome

In this repository you will find the file [home_assistant_glow.yaml][file] which you can copy into the `esphome` folder of your Home Assistant config, then go through the installation wizard of ESPHome and flash the ESP32.

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

[file]: /home_assistant_glow.yaml
[esphome]: https://esphome.io
[nc]: https://www.nabucasa.com