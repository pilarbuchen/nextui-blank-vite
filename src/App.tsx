import { useState } from 'react';
import classNames from 'classnames';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import styles from './App.module.scss';
import MyNextUiComponent from './components/my-next-ui-component/my-next-ui-component';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <MyNextUiComponent />
        </div>
    );
}

export default App;
