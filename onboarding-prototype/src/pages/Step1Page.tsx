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

export const Step1Page = () => {
  const navigate = useNavigate();
  const [state, setState] = useRecoilState(onboardingState);
  const [companyName, setCompanyName] = useState(state.userData.companyName || '');
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!companyName.trim()) {
      setError('Please enter your company name');
      return;
    }

    setState({
      ...state,
      currentStep: 2,
      userData: {
        ...state.userData,
        companyName,
      },
    });

    navigate('/onboarding/step2');
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <OnboardingLayout>
      <StepContent>
        <div>
          <Title>Tell us about your company</Title>
          <Description>
            Let's start with some basic information about your organization. This helps us
            customize your experience.
          </Description>
        </div>

        <FormSection>
          <Input
            label="Company Name"
            placeholder="Enter your company name"
            value={companyName}
            onChange={(e) => {
              setCompanyName(e.target.value);
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
