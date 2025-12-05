import { atom, selector } from 'recoil';

export interface OnboardingData {
  currentStep: number;
  totalSteps: number;
  userData: {
    companyName?: string;
    email?: string;
    role?: string;
    useCase?: string;
  };
  isCompleted: boolean;
}

export const onboardingState = atom<OnboardingData>({
  key: 'onboardingState',
  default: {
    currentStep: 1,
    totalSteps: 4,
    userData: {},
    isCompleted: false,
  },
});

export const progressPercentage = selector({
  key: 'progressPercentage',
  get: ({ get }) => {
    const state = get(onboardingState);
    return (state.currentStep / state.totalSteps) * 100;
  },
});

export const canProceed = selector({
  key: 'canProceed',
  get: ({ get }) => {
    const state = get(onboardingState);
    const { currentStep, userData } = state;

    switch (currentStep) {
      case 1:
        return !!userData.companyName;
      case 2:
        return !!userData.email;
      case 3:
        return !!userData.role;
      case 4:
        return !!userData.useCase;
      default:
        return false;
    }
  },
});
