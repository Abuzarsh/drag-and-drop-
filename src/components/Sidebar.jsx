// src/components/Sidebar.jsx
import { useDrag } from 'react-dnd';

const sidebarItems = [
  { type: 'text', label: 'Text' },
  { type: 'image', label: 'Image' },
  { type: 'button', label: 'Button' }
];

export default function Sidebar() {
  return (
    <div>
      {sidebarItems.map((item) => (
        <DraggableItem key={item.type} item={item} />
      ))}
    </div>
  );
}

function DraggableItem({ item }) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'element',
    item: { type: item.type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }));

  return (
    <div ref={dragRef} style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move' }}>
      {item.label}
    </div>
  );
}
