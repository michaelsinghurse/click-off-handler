import { useEffect } from 'react';

function ClickOffHandler({ children, targetSelector, handler, cancel }){
  useEffect(() => {
    if (cancel) {
      return;
    }

    const targetNodes = document.querySelectorAll(targetSelector);

    function onClick(e){
      if (![...targetNodes].some(node => node.contains(e.target))) {
        handler(e);
      }
    }
    
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
    }
  }, [targetSelector, handler, cancel]);

  return children;
}

export default ClickOffHandler;
