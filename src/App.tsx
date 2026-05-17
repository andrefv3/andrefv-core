import { RootProvider } from './app/providers/RouterProvider';
import { AppRouter } from './app/router/AppRouter';

const App = () => (
  <RootProvider>
    <AppRouter />
  </RootProvider>
);

export default App;