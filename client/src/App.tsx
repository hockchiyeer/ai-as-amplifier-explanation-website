import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import I18nDebug from "./components/I18nDebug";
import { ProgressProvider } from "./contexts/ProgressContext";
import { SlideViewerProvider } from "./components/SlideViewer";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <ProgressProvider>
            <SlideViewerProvider>
              <TooltipProvider>
                <Toaster />
                <Home />
                <I18nDebug />
              </TooltipProvider>
            </SlideViewerProvider>
          </ProgressProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
