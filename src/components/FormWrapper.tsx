import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

function FormWrapper({ title, children }: Props) {
  return (
    <>
      <h3
        className="text-center"
        style={{ margin: 0, marginBottom: `${2}rem` }}
      >
        {title}
      </h3>
      <form>{children}</form>
    </>
  );
}

export default FormWrapper;
