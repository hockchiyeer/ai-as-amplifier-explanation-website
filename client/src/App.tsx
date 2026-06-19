import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import NeuralLimitations from './pages/NeuralLimitations';
import NeuralMockPreview from './pages/NeuralMockPreview';
import I18nDebug from "./components/I18nDebug";
import { Navigation } from './components/Navigation';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            {/* Render NeuralLimitations on its own route ('/neural-network-limits'). Home no longer embeds this section. */}
            {typeof window !== 'undefined' && window.location.pathname === '/neural-mock-preview' ? (
              <NeuralMockPreview />
            ) : typeof window !== 'undefined' && window.location.pathname === '/neural-network-limits' ? (
              <>
                <Navigation activeSection="neural-network-limits" />
                <NeuralLimitations />
              </>
            ) : (
              <Home />
            )}
            <I18nDebug />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
