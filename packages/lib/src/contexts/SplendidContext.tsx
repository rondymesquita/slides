import React, { useContext } from 'react';

import { MarkdownAttributes } from '..';
import { merge } from '../util/merge-object';
import { useSetupContext } from './SetupContext';

type SplendidContextProps = Required<MarkdownAttributes>

const SplendidContext = React.createContext<SplendidContextProps>({} as SplendidContextProps);

export const useSplendidContext = () => useContext<SplendidContextProps>(SplendidContext);

export function SplendidProvider({ children, }: any) {

  const { markdown, } = useSetupContext()

  const value = merge(markdown.attributes, {
    syntaxHighlight: 'prism',
    syntaxHighlightEnabled: true,
    theme: 'classic',
    presentationSize: {
      width: 980,
      height: 552,
    },
    transitionDuration: 0.5,
    transitionName: 'slide',
  }) as SplendidContextProps

  return (
    <SplendidContext.Provider value={value}>
      {children}
    </SplendidContext.Provider>
  );
}
