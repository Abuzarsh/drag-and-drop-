// src/components/PropertyEditor.jsx

export default function PropertyEditor({ selectedElement, updateElement }) {
  if (!selectedElement) {
    return <div>Select an element to edit</div>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateElement({ ...selectedElement, [name]: value });
  };

  return (
    <div style={{ flex: 1 }}>
      <h3>Edit Properties</h3>
      {selectedElement.type === 'text' || selectedElement.type === 'button' ? (
        <input
          type="text"
          name="content"
          value={selectedElement.content}
          onChange={handleChange}
          placeholder="Enter text"
        />
      ) : null}

      {selectedElement.type === 'image' ? (
        <input
          type="text"
          name="url"
          value={selectedElement.url}
          onChange={handleChange}
          placeholder="Enter image URL"
        />
      ) : null}
    </div>
  );
}
