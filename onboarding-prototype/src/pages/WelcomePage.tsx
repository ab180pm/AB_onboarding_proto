import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { OnboardingLayout } from '../components/OnboardingLayout';
import { theme } from '../styles/theme';

const WelcomeContent = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: ${theme.typography.fontSize['4xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
`;

const Subtitle = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.xxl};
  line-height: 1.6;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${theme.spacing.xxl} 0;
  text-align: left;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.md};
  background-color: ${theme.colors.background.secondary};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.text.primary};

  &::before {
    content: '✓';
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background-color: ${theme.colors.primary};
    color: white;
    border-radius: ${theme.borderRadius.full};
    font-weight: ${theme.typography.fontWeight.bold};
    flex-shrink: 0;
  }
`;

export const WelcomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/onboarding/step1');
  };

  return (
    <OnboardingLayout>
      <WelcomeContent>
        <Title>Welcome to Airbridge</Title>
        <Subtitle>
          Let's get you set up in just a few minutes. We'll help you configure your account and get
          started with powerful mobile attribution.
        </Subtitle>

        <FeatureList>
          <FeatureItem>Track Android, iOS, and Web conversions in one place</FeatureItem>
          <FeatureItem>Measure campaign performance with accurate attribution</FeatureItem>
          <FeatureItem>Unlock deeper insights with advanced analytics</FeatureItem>
          <FeatureItem>Integrate with your favorite marketing tools seamlessly</FeatureItem>
        </FeatureList>

        <Button size="lg" fullWidth onClick={handleGetStarted}>
          Get Started
        </Button>
      </WelcomeContent>
    </OnboardingLayout>
  );
};
