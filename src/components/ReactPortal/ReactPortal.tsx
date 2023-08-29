import { ReactNode, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

declare interface ReactPortalInterface {
  children: ReactNode;
  wrapperId: string;
}

const ReactPortal = ({ children, wrapperId }: ReactPortalInterface) => {
  const [wrapper, setWrapper] = useState<Element | null>(null);

  useLayoutEffect(() => {
    // Find the container-element (if exist).
    let element = document.getElementById(wrapperId);
    // Bool flag whether container-element has been created.
    let created = false;
    if (!element) {
      created = true;
      const wrapper = document.createElement("div");
      wrapper.setAttribute("id", wrapperId);
      document.body.appendChild(wrapper);
      element = wrapper;
    }
    // Set wrapper state.
    setWrapper(element);
    // Cleanup effect.
    return () => {
      if (created && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);
  // Return null on initial rendering.
  if (wrapper === null) return null;

  return createPortal(children, wrapper);
};

export default ReactPortal;
