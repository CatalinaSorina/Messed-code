import React, { useState } from 'react';
import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

export const Score = React.createContext();
const App = ({ Component, pageProps }) => {
  const [levels, setLevels] = useState({});
  const updateLevel = (level, levelProps) => {
    const updatingLevel = { ...levels, [level]: levelProps };
    setLevels(updatingLevel);
  };
  const updateCash = cash => setLevels({ ...levels, cash: (levels.cash||0) + cash });
  return (
    <Score.Provider value={{ levels, updateLevel, updateCash }}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Score.Provider>
  );
};

export default App;
