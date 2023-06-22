import { styled } from 'styled-components';

interface Props {
  children: JSX.Element[];
}

const LoginForm = ({ children }: Props) => {
  return <FormContainer>{children}</FormContainer>;
};

const FormContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  gap: 1rem;
  width: 100%;
  padding: 2rem 1.5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default LoginForm;
