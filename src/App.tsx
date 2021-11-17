import { useContext, FC } from "react";

import { AppProvider, ThemeContext } from "./Context";

const App: FC<{}> = () => {
    const st  = useContext(ThemeContext);
    return (
        <AppProvider>
            <div style={{ height: "100vh", width: "100wh", backgroundColor: "black" }} >
                <h1>Hello World</h1>
            </div>
        </AppProvider>
    );
};

export default App;