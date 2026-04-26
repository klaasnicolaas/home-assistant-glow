import type {ClientModule} from '@docusaurus/types';

const trackingID = 'G-7519Z99G4C';

type GtagWindow = Window &
  typeof globalThis & {
    gtag?: (...args: unknown[]) => void;
  };

const clientModule: ClientModule = {
  onRouteDidUpdate({location, previousLocation}) {
    if (
      !previousLocation ||
      (location.pathname === previousLocation.pathname &&
        location.search === previousLocation.search &&
        location.hash === previousLocation.hash)
    ) {
      return;
    }

    setTimeout(() => {
      const {gtag} = window as GtagWindow;

      if (typeof gtag !== 'function') {
        return;
      }

      gtag('config', trackingID, {
        page_path: location.pathname + location.search + location.hash,
      });
    });
  },
};

export default clientModule;
