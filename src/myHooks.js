import React from "react";
//Custom hook_1
export const useRenderCount = () => {
  // src: https://medium.com/better-programming/how-to-properly-use-the-react-useref-hook-in-concurrent-mode-38c54543857b
  const renderCount = React.useRef(0);
  let renderCountLocal = renderCount.current;
  React.useEffect(() => {
    renderCount.current = renderCountLocal;
  });
  renderCountLocal++;
  return renderCount.current;
};

//Custom hook_2 (We just need this, we'll call the other one implicitly).
export const useStopInfiniteRender = (maxRenders) => {
  const renderCount = useRenderCount();
  if (renderCount > maxRenders) throw new Error(`Maximum re-rendering limit (${maxRenders}) reached from "useStopInfiniteRender(${maxRenders})"`);
};