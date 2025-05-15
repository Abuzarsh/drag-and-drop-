// src/App.jsx
import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import PropertyEditor from './components/PropertyEditor';

function App() {
  const [elements, setElements] = useState([]);
  const [selectedElementIndex, setSelectedElementIndex] = useState(null);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="builder" style={{ display: 'flex', gap: '20px' }}>
        <Sidebar />
        <Canvas
          elements={elements}
          setElements={setElements}
          selectedElementIndex={selectedElementIndex}
          setSelectedElementIndex={setSelectedElementIndex}
        />
        <PropertyEditor
          selectedElement={elements[selectedElementIndex]}
          updateElement={(updated) => {
            const updatedElements = [...elements];
            updatedElements[selectedElementIndex] = updated;
            setElements(updatedElements);
          }}
        />
      </div>
    </DndProvider>
  );
}

export default App;
