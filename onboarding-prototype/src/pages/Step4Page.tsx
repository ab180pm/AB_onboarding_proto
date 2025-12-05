import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Button } from '../components/Button';
import { OnboardingLayout } from '../components/OnboardingLayout';
import { onboardingState } from '../store/onboardingState';
import { theme } from '../styles/theme';

const StepContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl};
`;

const Title = styled.h2`
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
`;

const Description = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
`;

const UseCaseList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

const UseCaseCard = styled.button<{ selected: boolean }>`
  padding: ${theme.spacing.lg};
  border: 2px solid ${({ selected }) => (selected ? theme.colors.primary : theme.colors.border)};
  background-color: ${({ selected }) =>
    selected ? `${theme.colors.primary}10` : theme.colors.background.primary};
  border-radius: ${theme.borderRadius.lg};
  cursor: pointer;
  transition: all ${theme.transitions.fast};
  text-align: left;
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing.md};

  &:hover {
    border-color: ${theme.colors.primary};
    background-color: ${theme.colors.background.secondary};
  }
`;

const UseCaseIcon = styled.div`
  font-size: ${theme.typography.fontSize.xl};
  flex-shrink: 0;
`;

const UseCaseContent = styled.div`
  flex: 1;
`;

const UseCaseTitle = styled.div`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.xs};
`;

const UseCaseDescription = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.lg};
`;

const useCases = [
  {
    id: 'attribution',
    icon: '🎯',
    title: 'Mobile Attribution',
    description: 'Track user acquisition and measure campaign performance',
  },
  {
    id: 'analytics',
    icon: '📊',
    title: 'Analytics & Insights',
    description: 'Understand user behavior and optimize conversion funnels',
  },
  {
    id: 'deeplink',
    icon: '🔗',
    title: 'Deep Linking',
    description: 'Create seamless user experiences with deep links',
  },
  {
    id: 'fraud',
    icon: '🛡️',
    title: 'Fraud Prevention',
    description: 'Protect your budget from ad fraud and invalid traffic',
  },
];

export const Step4Page = () => {
  const navigate = useNavigate();
  const [state, setState] = useRecoilState(onboardingState);
  const [selectedUseCase, setSelectedUseCase] = useState(state.userData.useCase || '');

  const handleComplete = () => {
    if (!selectedUseCase) return;

    setState({
      ...state,
      userData: {
        ...state.userData,
        useCase: selectedUseCase,
      },
      isCompleted: true,
    });

    navigate('/onboarding/complete');
  };

  const handleBack = () => {
    setState({
      ...state,
      currentStep: 3,
    });
    navigate('/onboarding/step3');
  };

  return (
    <OnboardingLayout>
      <StepContent>
        <div>
          <Title>What brings you to Airbridge?</Title>
          <Description>
            Select your primary use case so we can set up the right tools and features for you.
          </Description>
        </div>

        <UseCaseList>
          {useCases.map((useCase) => (
            <UseCaseCard
              key={useCase.id}
              selected={selectedUseCase === useCase.id}
              onClick={() => setSelectedUseCase(useCase.id)}
            >
              <UseCaseIcon>{useCase.icon}</UseCaseIcon>
              <UseCaseContent>
                <UseCaseTitle>{useCase.title}</UseCaseTitle>
                <UseCaseDescription>{useCase.description}</UseCaseDescription>
              </UseCaseContent>
            </UseCaseCard>
          ))}
        </UseCaseList>

        <ButtonGroup>
          <Button variant="secondary" onClick={handleBack}>
            Back
          </Button>
          <Button fullWidth onClick={handleComplete} disabled={!selectedUseCase}>
            Complete Setup
          </Button>
        </ButtonGroup>
      </StepContent>
    </OnboardingLayout>
  );
};
