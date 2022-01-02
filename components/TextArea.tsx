import TextareaAutosize from "react-textarea-autosize";

export default function TextArea({
  value,
  onChange = () => {},
  className = "",
  id,
  placeholder = "",
  disabled = false,
}) {
  return (
    <TextareaAutosize
      id={id}
      value={value}
      spellCheck={false}
      onChange={onChange}
      disabled={disabled}
      className={
        "resize-none form-control block w-full bg-clip-padding rounded b-transition border-none focus:outline-none overflow-hidden" +
        className
      }
      minRows={1}
      placeholder={placeholder}
    />
  );
}