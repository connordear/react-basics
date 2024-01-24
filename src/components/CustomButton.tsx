import "./CustomButton.css";

interface CustomButtonProps {
  text: string;
  link?: string;
}

function CustomButton({ text, link }: CustomButtonProps) {
  if (link) {
    return (
      <button className="custom-button">
        <a href={link}>{text}</a>
      </button>
    );
  }
  return <button className="custom-button">{text}</button>;
}

export default CustomButton;
