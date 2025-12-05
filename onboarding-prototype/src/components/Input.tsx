import styled from '@emotion/styled';
import { theme } from '../styles/theme';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const InputWrapper = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
`;

const Label = styled.label`
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.text.primary};
`;

const StyledInput = styled.input<{ hasError?: boolean }>`
  padding: ${theme.spacing.md};
  font-size: ${theme.typography.fontSize.base};
  border: 2px solid ${({ hasError }) => (hasError ? theme.colors.error : theme.colors.border)};
  border-radius: ${theme.borderRadius.md};
  outline: none;
  transition: all ${theme.transitions.fast};
  background-color: ${theme.colors.background.primary};

  &:focus {
    border-color: ${({ hasError }) => (hasError ? theme.colors.error : theme.colors.primary)};
  }

  &::placeholder {
    color: ${theme.colors.text.light};
  }

  &:disabled {
    background-color: ${theme.colors.background.tertiary};
    cursor: not-allowed;
  }
`;

const ErrorText = styled.span`
  font-size: ${theme.typography.fontSize.xs};
  color: ${theme.colors.error};
`;

export const Input: React.FC<InputProps> = ({ label, error, fullWidth, ...props }) => {
  return (
    <InputWrapper fullWidth={fullWidth}>
      {label && <Label>{label}</Label>}
      <StyledInput hasError={!!error} {...props} />
      {error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  );
};
