import React, { FunctionComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import CodeTree from './CodeTree';
import data from './sample-data.json';
import toTree from "./toTree";

const treeOptions = {
    noTraverse: {
        '@material-ui/core/styles/useTheme': true,
        '@material-ui/core/styles/defaultTheme': true,
        '@material-ui/core/InputBase': true,
        '@material-ui/core/Modal': true,
        '@material-ui/core/styles/withStyles': true
    },
    hidden: {
        clsx: true,
        // react: true,
        // 'react-dom': true,
        'prop-types': true
    }
};

type AppProps = {
}

const App: FunctionComponent<AppProps> = () => {
    const tree = toTree(data, treeOptions);

    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <CodeTree dependencies={tree}/>
          </header>
        </div>
  );
};

export default App;
