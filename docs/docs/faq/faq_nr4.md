---
id: out_of_memory
title: Out of memory (error 4)
description: What to do when you get an error 4 / out of memory error
---

Linked issue: [#240][issue_240]

With this error there is a chance that the instance your ESPHome is running on may be out of memory (possibly on a Raspberry Pi with less RAM), you can solve this by limiting the number of processes at compiling time using [compile_process_limit][compile_process_limit].

```yaml title="home-assistant-glow/esp32.yaml"
esphome:
  compile_process_limit: 1
```

[issue_240]: https://github.com/klaasnicolaas/home-assistant-glow/issues/240
[compile_process_limit]: https://esphome.io/components/esphome.html?highlight=compile_process_limit