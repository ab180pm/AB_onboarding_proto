import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WelcomePage } from './pages/WelcomePage';
import { Step1Page } from './pages/Step1Page';
import { Step2Page } from './pages/Step2Page';
import { Step3Page } from './pages/Step3Page';
import { Step4Page } from './pages/Step4Page';
import { CompletePage } from './pages/CompletePage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/onboarding/step1" element={<Step1Page />} />
            <Route path="/onboarding/step2" element={<Step2Page />} />
            <Route path="/onboarding/step3" element={<Step3Page />} />
            <Route path="/onboarding/step4" element={<Step4Page />} />
            <Route path="/onboarding/complete" element={<CompletePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
