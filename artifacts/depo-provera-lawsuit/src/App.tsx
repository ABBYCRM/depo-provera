import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import LandingPage from "@/pages/LandingPage";
import NotFound from "@/pages/not-found";

import { StatePage } from "@/pages/StatePage";
import { CityPage } from "@/pages/CityPage";
import { InjuryPage } from "@/pages/InjuryPage";
import { ResourcePage } from "@/pages/ResourcePage";
import { InfoPage } from "@/pages/InfoPage";
import { Sitemap } from "@/pages/Sitemap";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/state/:slug" component={StatePage} />
      <Route path="/city/:slug" component={CityPage} />
      <Route path="/injury/:slug" component={InjuryPage} />
      <Route path="/resource/:slug" component={ResourcePage} />
      <Route path="/info/:slug" component={InfoPage} />
      <Route path="/sitemap" component={Sitemap} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
