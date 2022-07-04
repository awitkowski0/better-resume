import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useQuill } from 'react-quilljs';
// snow theme?
import "quill/dist/quill.snow.css";

function App() {
  const { quill, quillRef } = useQuill();

  React.useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML('<h1>React Hook for Quill!</h1>');
    }
  }, [quill]);

  return (
    <div style={{ width: 1000, height: 1000 }}>
      <div ref={quillRef}/>
    </div>
  );
}

export default App;
