import Head from "@docusaurus/Head";
import React, { useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "esp-web-install-button": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { manifest: string };
    }
  }
}

/**
 * Load the ESP Web Tools script
 */
const loadEspWebToolsScript = () => (
  <script
    type="module"
    src="https://unpkg.com/esp-web-tools@10/dist/web/install-button.js?module"
    onError={(e) => console.error("Failed to load esp-web-tools script", e)}
  />
);

type Variant = {
  id: string;
  name: string;
  description: string;
  manifest: string;
  recommended?: boolean;
};

const variants: Variant[] = [
  {
    id: "standard",
    name: "Standard",
    description: "For the complete Home Assistant Glow with RGB LED. The LED provides visual feedback by flashing on each pulse and indicating connection status.",
    manifest: "/home-assistant-glow/manifest.json",
    recommended: true,
  },
  {
    id: "basic",
    name: "Basic",
    description: "For minimal builds without LED hardware. Only the pulse sensor is required, no LED pins needed. Ideal for simple installations.",
    manifest: "/glow-basic/manifest.json",
  },
];

export default function FirmwareSelector() {
  const [selectedVariant, setSelectedVariant] = useState<string>("standard");
  const manifestUrl = useBaseUrl(
    variants.find((v) => v.id === selectedVariant)?.manifest || variants[0].manifest
  );

  return (
    <>
      <Head>{loadEspWebToolsScript()}</Head>

      <div style={{ marginTop: "1rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
          {variants.map((variant) => (
            <label
              key={variant.id}
              style={{
                display: "block",
                padding: "1rem",
                border: selectedVariant === variant.id
                  ? "2px solid var(--ifm-color-primary)"
                  : "1px solid var(--ifm-color-emphasis-300)",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <input
                  type="radio"
                  name="firmware-variant"
                  value={variant.id}
                  checked={selectedVariant === variant.id}
                  onChange={(e) => setSelectedVariant(e.target.value)}
                  style={{ marginTop: "0.25rem", cursor: "pointer" }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: "600", marginBottom: "0.25rem" }}>
                    {variant.name}
                    {variant.recommended && (
                      <span
                        style={{
                          marginLeft: "0.5rem",
                          fontSize: "0.75em",
                          backgroundColor: "var(--ifm-color-primary)",
                          color: "white",
                          padding: "0.125rem 0.5rem",
                          borderRadius: "999px",
                        }}
                      >
                        Recommended
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: "0.9em", color: "var(--ifm-color-emphasis-700)" }}>
                    {variant.description}
                  </div>
                </div>
              </div>
            </label>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <esp-web-install-button manifest={manifestUrl}></esp-web-install-button>
        </div>
      </div>
    </>
  );
}
