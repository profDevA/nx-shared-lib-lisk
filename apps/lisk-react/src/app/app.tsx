import { useRef, useEffect } from 'react';
import { UIElement } from '@lisktest/ui';

export function App() {
  const value = {
    text: 'text in React component',
  };

  const uiel = useRef<UIElement>(null);

  const onClick = (e: Event) => {
    console.log(e);
  };

  useEffect(() => {
    if (uiel.current) {
      uiel.current.addEventListener('clicked', onClick);
    }
    return () => {
      if (uiel.current) {
        uiel.current.removeEventListener('clicked', onClick);
      }
    };
  });

  return (
    <div className="flex justify-center pt-10">
      <div className="p-5 max-w-sm text-center border rounded-lg shadow-md">
        <h1 className="text-4xl text-green-800">React App</h1>
        <ui-element ref={uiel} data-value={JSON.stringify(value)} onClicked={onClick}></ui-element>
      </div>
    </div>
  );
}

export default App;
