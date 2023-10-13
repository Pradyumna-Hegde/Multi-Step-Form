import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

function FormWrapper({ title, children }: Props) {
  return (
    <div className="row">
      <h3
        className="text-center"
        style={{ margin: 0, marginBottom: `${2}rem` }}
      >
        {title}
      </h3>
      <div>{children}</div>
    </div>
  );
}

export default FormWrapper;
