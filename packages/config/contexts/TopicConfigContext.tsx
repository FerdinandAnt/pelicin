import React, { useContext, useState, useEffect } from 'react';
import { TopicKey, TopicConfig } from '@pelicin/config';

// ================================================================================
// TYPES/CONST
// ================================================================================

type TopicConfigContextValue = TopicConfig & {
  isLoaded: boolean;
};

const fallbackValue: TopicConfigContextValue = {
  isLoaded: false,
  topicTitle: '',
  topicDescription: '',
  mainColor: '#34495e',
  accentColor: '#34495e',
};

const TopicConfigContext = React.createContext<TopicConfigContextValue>(null);

// ================================================================================
// MAIN
// ================================================================================

export function TopicConfigProvider(props: { topicKey: TopicKey; children: React.ReactNode }) {
  const { topicKey } = props;
  const [value, setValue] = useState(fallbackValue);

  useEffect(() => {
    import('@pelicin/config/topic-config/' + topicKey).then((module) => {
      const fetchedConfig = module.default;
      setValue({
        isLoaded: true,
        ...fetchedConfig,
      });
    });
  }, [topicKey]);

  return <TopicConfigContext.Provider value={value}>{props.children}</TopicConfigContext.Provider>;
}

export function useTopicConfig() {
  return useContext(TopicConfigContext);
}
