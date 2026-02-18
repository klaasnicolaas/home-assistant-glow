/// <reference types="react" />

declare namespace JSX {
  interface IntrinsicElements {
    "esp-web-install-button": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & { manifest: string };
  }
}
