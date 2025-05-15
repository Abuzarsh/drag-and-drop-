// components/Element.js
export default function Element({ element }) {
  switch (element.type) {
    case 'text':
      return <p style={{ color: element.props.color }}>{element.props.text}</p>;
    case 'button':
      return <button>{element.props.text}</button>;
    case 'image':
      return <img src="https://via.placeholder.com/100" alt="placeholder" />;
    default:
      return null;
  }
}
