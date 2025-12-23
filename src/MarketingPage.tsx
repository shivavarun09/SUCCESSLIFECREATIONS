import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from './theme/AppTheme.tsx';
import AppAppBar from './components/AppAppBar.tsx';
import Hero from './components/Hero.tsx';
import Highlights from './components/Services.tsx';
import Pricing from './components/Pricing.tsx';
import Features from './components/Features.tsx';
import Testimonials from './components/Testimonials.tsx';
import FAQ from './components/FAQ.tsx';
import Footer from './components/Footer.tsx';

export default function MarketingPage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <AppAppBar />
      <Hero />
      <div>
        {/* <LogoCollection /> */}
        <Divider/>
        <Features />
        <Divider />
        <Highlights />
        <Divider />
        <Testimonials />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </div>
    </AppTheme>
  );
}
