// src/components/Canvas.jsx
import { useDrop } from 'react-dnd';

export default function Canvas({
  elements,
  setElements,
  selectedElementIndex,
  setSelectedElementIndex
}) {
  const [, dropRef] = useDrop(() => ({
    accept: 'element',
    drop: (item) => {
      const newElement = { type: item.type, content: item.type === 'text' ? 'Text' : '', url: '' };
      setElements((prev) => [...prev, newElement]);
    }
  }));

  return (
    <div
      ref={dropRef}
      style={{
        minHeight: '400px',
        border: '2px dashed #999',
        padding: '10px',
        marginTop: '10px',
        flex: 1
      }}
    >
      {elements.map((el, idx) => (
        <div
          key={idx}
          onClick={() => setSelectedElementIndex(idx)}
          style={{
            border: selectedElementIndex === idx ? '2px solid blue' : 'none',
            padding: '5px',
            marginBottom: '10px',
            cursor: 'pointer'
          }}
        >
          {el.type === 'text' && <p>{el.content}</p>}
          {el.type === 'image' && (
            <img src={el.url || 'https://via.placeholder.com/100'} alt="Element" width="100" />
          )}
          {el.type === 'button' && <button>{el.content || 'Click Me'}</button>}
        </div>
      ))}
    </div>
  );
}
