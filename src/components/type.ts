declare module "locomotive-scroll" {
  interface LocomotiveScrollOptions {
    el: HTMLElement | null;
    smooth: boolean;
    smoothMobile?: boolean;
    resetNativeScroll?: boolean;
    lenisOptions?: {
      wrapper: Window;
      content: HTMLElement;
      lerp: number;
      duration: number;
      orientation: "vertical" | "horizontal";
      gestureOrientation: "vertical" | "horizontal";
      smoothWheel: boolean;
      smoothTouch: boolean;
      wheelMultiplier: number;
      touchMultiplier: number;
      normalizeWheel: boolean;
      easing: (t: number) => number;
    };
  }

  class LocomotiveScroll {
    constructor(options: LocomotiveScrollOptions);
    on(event: string, callback: (args?: any) => void): void;
    update(): void;
    destroy(): void;
  }

  export default LocomotiveScroll;
}
