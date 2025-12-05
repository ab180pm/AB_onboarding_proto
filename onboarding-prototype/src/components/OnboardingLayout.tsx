import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { progressPercentage } from '../store/onboardingState';
import { ProgressBar } from './ProgressBar';
import { theme } from '../styles/theme';

interface OnboardingLayoutProps {
  children: React.ReactNode;
}

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, ${theme.colors.background.secondary} 0%, ${theme.colors.background.primary} 100%);
`;

const Header = styled.header`
  padding: ${theme.spacing.xl};
  background-color: ${theme.colors.background.primary};
  box-shadow: ${theme.shadows.sm};
`;

const Logo = styled.div`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.lg};
`;

const ContentArea = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.xxl};
`;

const ContentCard = styled.div`
  background-color: ${theme.colors.background.primary};
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.shadows.xl};
  padding: ${theme.spacing.xxl};
  max-width: 600px;
  width: 100%;
`;

export const OnboardingLayout: React.FC<OnboardingLayoutProps> = ({ children }) => {
  const progress = useRecoilValue(progressPercentage);

  return (
    <LayoutContainer>
      <Header>
        <Logo>Airbridge</Logo>
        <ProgressBar progress={progress} />
      </Header>
      <ContentArea>
        <ContentCard>{children}</ContentCard>
      </ContentArea>
    </LayoutContainer>
  );
};
