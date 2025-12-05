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

const RoleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.md};
`;

const RoleCard = styled.button<{ selected: boolean }>`
  padding: ${theme.spacing.lg};
  border: 2px solid ${({ selected }) => (selected ? theme.colors.primary : theme.colors.border)};
  background-color: ${({ selected }) =>
    selected ? `${theme.colors.primary}10` : theme.colors.background.primary};
  border-radius: ${theme.borderRadius.lg};
  cursor: pointer;
  transition: all ${theme.transitions.fast};
  text-align: center;

  &:hover {
    border-color: ${theme.colors.primary};
    background-color: ${theme.colors.background.secondary};
  }
`;

const RoleIcon = styled.div`
  font-size: ${theme.typography.fontSize['2xl']};
  margin-bottom: ${theme.spacing.sm};
`;

const RoleTitle = styled.div`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.lg};
`;

const roles = [
  { id: 'marketer', icon: '📊', title: 'Marketer' },
  { id: 'developer', icon: '👨‍💻', title: 'Developer' },
  { id: 'product', icon: '🎯', title: 'Product Manager' },
  { id: 'analyst', icon: '📈', title: 'Data Analyst' },
];

export const Step3Page = () => {
  const navigate = useNavigate();
  const [state, setState] = useRecoilState(onboardingState);
  const [selectedRole, setSelectedRole] = useState(state.userData.role || '');

  const handleNext = () => {
    if (!selectedRole) return;

    setState({
      ...state,
      currentStep: 4,
      userData: {
        ...state.userData,
        role: selectedRole,
      },
    });

    navigate('/onboarding/step4');
  };

  const handleBack = () => {
    setState({
      ...state,
      currentStep: 2,
    });
    navigate('/onboarding/step2');
  };

  return (
    <OnboardingLayout>
      <StepContent>
        <div>
          <Title>What's your role?</Title>
          <Description>
            This helps us personalize your dashboard and recommend features that matter most to you.
          </Description>
        </div>

        <RoleGrid>
          {roles.map((role) => (
            <RoleCard
              key={role.id}
              selected={selectedRole === role.id}
              onClick={() => setSelectedRole(role.id)}
            >
              <RoleIcon>{role.icon}</RoleIcon>
              <RoleTitle>{role.title}</RoleTitle>
            </RoleCard>
          ))}
        </RoleGrid>

        <ButtonGroup>
          <Button variant="secondary" onClick={handleBack}>
            Back
          </Button>
          <Button fullWidth onClick={handleNext} disabled={!selectedRole}>
            Continue
          </Button>
        </ButtonGroup>
      </StepContent>
    </OnboardingLayout>
  );
};
