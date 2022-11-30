import styled from "styled-components";

const CheckboxInput = styled.input`
  width: 1.2rem;
  height: 1.2rem;
`;
export default function Checkbox(props: React.InputHTMLAttributes<any>) {
  const { type, ...prop } = props;
  return <CheckboxInput type="checkbox" {...prop} />;
}
