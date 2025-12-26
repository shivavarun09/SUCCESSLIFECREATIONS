import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import HomePage from './MarketingPage.tsx';
import {BrowserRouter} from 'react-router-dom';
import {Route,Routes} from "react-router-dom";
import SignIn from './components/Signin.tsx';
import SignUp from './components/SignUp.tsx';
import RefundPolicy from './components/RefundPolicy.tsx';
import TermsAndConditions from './components/TermsAndConditions.tsx';
import PrivacyPolicy from './components/PrivacyPolicy.tsx';
import PaidDemoForm from './components/PaidDemoForm.tsx';
ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
            <Routes>
              <Route path='/*' element={<HomePage/>} />
              <Route path='/sign-in' element={<SignIn/>} />
              <Route path='/sign-up' element={<SignUp/>} />
              <Route path='/refund-policy' element={<RefundPolicy/>} />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/paid-demo-form" element={<PaidDemoForm />} />


            </Routes>
      </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>
);