---
id: energy_dashboard
title: Energy Dashboard
description: Learn how to set up an energy dashboard in Home Assistant to monitor your energy usage.
---

# Add to Energy Dashboard

To monitor your energy usage, you can add the Home Assistant Glow to the [Energy Dashboard][energy]. This dashboard provides an overview of your energy consumption, costs, and trends over time.

## Which entities to add?

You can choose between the following entities to add to the Energy Dashboard:

- **sensor.home_assistant_glow_daily_energy**
- **sensor.home_assistant_glow_total_energy**

It doesn't matter if the entity resets during the day for example due to an update/or hard reset after reboot. The long-term statistics in Home Assistant can handle that.

## Step-by-step guide to add entities

1. Open your Home Assistant dashboard/interface.
2. From the sidebar, click on **Energy**.
3. Click on the 3 dots in the top right corner and select **Energy Configuration**.
4. Click on **Add Consumption** and select the entity you want to add.
5. Optionally, you can setup the cost of your energy provider to get an overview of your energy costs.
6. Click **Save** to apply the changes.

:::note
If your Glow has just been added to Home Assistant, you may need to wait up to 2 hours before enough long-term statistics are stored to show in the Energy Dashboard.
:::

## Helpful resources

- [Home Assistant - Energy Management][energy]

[energy]: https://www.home-assistant.io/docs/energy