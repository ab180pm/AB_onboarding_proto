import styled from '@emotion/styled';
import { theme } from '../styles/theme';

interface ProgressBarProps {
  progress: number;
  showLabel?: boolean;
}

const ProgressBarContainer = styled.div`
  width: 100%;
`;

const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${theme.colors.background.tertiary};
  border-radius: ${theme.borderRadius.full};
  overflow: hidden;
`;

const ProgressBarFill = styled.div<{ progress: number }>`
  height: 100%;
  width: ${({ progress }) => `${progress}%`};
  background-color: ${theme.colors.primary};
  transition: width ${theme.transitions.base};
  border-radius: ${theme.borderRadius.full};
`;

const ProgressLabel = styled.div`
  margin-top: ${theme.spacing.sm};
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
  text-align: right;
`;

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress, showLabel = true }) => {
  return (
    <ProgressBarContainer>
      <ProgressBarWrapper>
        <ProgressBarFill progress={progress} />
      </ProgressBarWrapper>
      {showLabel && <ProgressLabel>{Math.round(progress)}% Complete</ProgressLabel>}
    </ProgressBarContainer>
  );
};
