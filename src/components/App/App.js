import '@radix-ui/themes/styles.css';
import React, { useEffect } from 'react';
import Todo from '../Todo/Todo.js';

import { Theme, ThemePanel, Box, Flex } from '@radix-ui/themes';

function App() {
  useEffect(() => {
    document.title = 'TODO Master';
    
    // FIXME: https://github.com/radix-ui/themes/issues/6
    const root = document.getElementById("root")
    const script = root.querySelector("script")
    const scriptCopy = document.createElement("script")
    scriptCopy.innerText = script.innerText
    root.appendChild(scriptCopy)
  }, []);
  return (
        <Theme appearance="dark" accentColor="lime" grayColor="sand" radius="full" scaling="100%"  panelBackground="translucent">          
          <Flex justify="center" align="center" height="100%" css={{height: "100vh"}}>
              <Todo></Todo>
          </Flex>
        </Theme>
  );
}

export default App;
