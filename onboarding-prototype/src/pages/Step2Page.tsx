import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
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

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.lg};
`;

export const Step2Page = () => {
  const navigate = useNavigate();
  const [state, setState] = useRecoilState(onboardingState);
  const [email, setEmail] = useState(state.userData.email || '');
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNext = () => {
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setState({
      ...state,
      currentStep: 3,
      userData: {
        ...state.userData,
        email,
      },
    });

    navigate('/onboarding/step3');
  };

  const handleBack = () => {
    setState({
      ...state,
      currentStep: 1,
    });
    navigate('/onboarding/step1');
  };

  return (
    <OnboardingLayout>
      <StepContent>
        <div>
          <Title>What's your email?</Title>
          <Description>
            We'll use this to send you important updates about your account and to help you recover
            access if needed.
          </Description>
        </div>

        <FormSection>
          <Input
            label="Email Address"
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
            error={error}
            fullWidth
          />
        </FormSection>

        <ButtonGroup>
          <Button variant="secondary" onClick={handleBack}>
            Back
          </Button>
          <Button fullWidth onClick={handleNext}>
            Continue
          </Button>
        </ButtonGroup>
      </StepContent>
    </OnboardingLayout>
  );
};
