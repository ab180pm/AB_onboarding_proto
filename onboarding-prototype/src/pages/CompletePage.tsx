import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { Button } from '../components/Button';
import { OnboardingLayout } from '../components/OnboardingLayout';
import { onboardingState } from '../store/onboardingState';
import { theme } from '../styles/theme';

const CompleteContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.xl};
`;

const SuccessIcon = styled.div`
  font-size: 80px;
  animation: bounce 1s ease-in-out;

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
`;

const Title = styled.h1`
  font-size: ${theme.typography.fontSize['4xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
`;

const Message = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
  max-width: 500px;
`;

const SummaryCard = styled.div`
  background-color: ${theme.colors.background.secondary};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  width: 100%;
  text-align: left;
`;

const SummaryTitle = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${theme.spacing.sm} 0;
  border-bottom: 1px solid ${theme.colors.border};

  &:last-child {
    border-bottom: none;
  }
`;

const SummaryLabel = styled.span`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
`;

const SummaryValue = styled.span`
  color: ${theme.colors.text.primary};
  font-weight: ${theme.typography.fontWeight.medium};
  font-size: ${theme.typography.fontSize.sm};
`;

const NextSteps = styled.div`
  background-color: ${theme.colors.background.secondary};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  width: 100%;
  text-align: left;
`;

const NextStepsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${theme.spacing.md} 0 0 0;
`;

const NextStepItem = styled.li`
  padding: ${theme.spacing.sm} 0;
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
  display: flex;
  gap: ${theme.spacing.sm};

  &::before {
    content: '→';
    color: ${theme.colors.primary};
    font-weight: ${theme.typography.fontWeight.bold};
  }
`;

export const CompletePage = () => {
  const state = useRecoilValue(onboardingState);

  const handleGetStarted = () => {
    // In a real app, this would navigate to the main dashboard
    window.location.href = '/dashboard';
  };

  const getRoleLabel = (role: string) => {
    const roleMap: Record<string, string> = {
      marketer: 'Marketer',
      developer: 'Developer',
      product: 'Product Manager',
      analyst: 'Data Analyst',
    };
    return roleMap[role] || role;
  };

  const getUseCaseLabel = (useCase: string) => {
    const useCaseMap: Record<string, string> = {
      attribution: 'Mobile Attribution',
      analytics: 'Analytics & Insights',
      deeplink: 'Deep Linking',
      fraud: 'Fraud Prevention',
    };
    return useCaseMap[useCase] || useCase;
  };

  return (
    <OnboardingLayout>
      <CompleteContent>
        <SuccessIcon>🎉</SuccessIcon>

        <div>
          <Title>You're all set!</Title>
          <Message>
            Congratulations! Your Airbridge account is ready. Let's start tracking and optimizing
            your mobile campaigns.
          </Message>
        </div>

        <SummaryCard>
          <SummaryTitle>Your Profile</SummaryTitle>
          <SummaryItem>
            <SummaryLabel>Company</SummaryLabel>
            <SummaryValue>{state.userData.companyName}</SummaryValue>
          </SummaryItem>
          <SummaryItem>
            <SummaryLabel>Email</SummaryLabel>
            <SummaryValue>{state.userData.email}</SummaryValue>
          </SummaryItem>
          <SummaryItem>
            <SummaryLabel>Role</SummaryLabel>
            <SummaryValue>{getRoleLabel(state.userData.role || '')}</SummaryValue>
          </SummaryItem>
          <SummaryItem>
            <SummaryLabel>Primary Use Case</SummaryLabel>
            <SummaryValue>{getUseCaseLabel(state.userData.useCase || '')}</SummaryValue>
          </SummaryItem>
        </SummaryCard>

        <NextSteps>
          <SummaryTitle>Next Steps</SummaryTitle>
          <NextStepsList>
            <NextStepItem>Install the Airbridge SDK in your app</NextStepItem>
            <NextStepItem>Set up your first marketing campaign</NextStepItem>
            <NextStepItem>Configure event tracking for key actions</NextStepItem>
            <NextStepItem>Explore the analytics dashboard</NextStepItem>
          </NextStepsList>
        </NextSteps>

        <Button size="lg" fullWidth onClick={handleGetStarted}>
          Go to Dashboard
        </Button>
      </CompleteContent>
    </OnboardingLayout>
  );
};
