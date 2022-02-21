import * as React from 'react';
import { IdProvider } from '@radix-ui/react-id';

import { createTheme, defaultTheme, Theme as UiTheme } from '@aws-amplify/ui';

import { AmplifyContext } from './AmplifyContext';
import { Authenticator } from '../Authenticator';

export type Theme = UiTheme;
export type ColorMode = 'system' | 'light' | 'dark';

interface AmplifyProviderProps {
  children: React.ReactNode;
  colorMode?: ColorMode;
  theme?: Theme;
}

export function AmplifyProvider({
  children,
  colorMode,
  theme = defaultTheme,
}: AmplifyProviderProps) {
  const webTheme = createTheme(theme);
  const { name, cssText } = webTheme;
  React.useEffect(() => {
    if (document && document.documentElement) {
      document.documentElement.setAttribute('data-amplify-theme', name);
      document.documentElement.setAttribute(
        'data-amplify-color-mode',
        colorMode
      );
    }
  }, [theme, colorMode]);
  return (
    <AmplifyContext.Provider
      value={{
        theme: webTheme,
      }}
    >
      <Authenticator.Provider>
        <IdProvider>
          <div>{children}</div>
          <style
            id={`amplify-theme-${name}`}
            dangerouslySetInnerHTML={{ __html: cssText }}
          />
        </IdProvider>
      </Authenticator.Provider>
    </AmplifyContext.Provider>
  );
}
