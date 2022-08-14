type MarkProps = {
  text: string,
  className: string,
};

export function Mark({ text, className }: MarkProps): JSX.Element {
  return (
    <div className={className}>
      <span>{text}</span>
    </div>
  );
}
