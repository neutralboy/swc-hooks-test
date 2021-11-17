import React from "react";


interface IappContext {
    bgColor: string;
};

const ThemeContext = React.createContext<IappContext | null>(null);

interface IAppProvider{
    children: React.ReactElement;
};

const def: IappContext = {
    bgColor: "black"
}

const AppProvider = ({ children }: IAppProvider) => {
    return (
        <ThemeContext.Provider value={def} >
            {children}
        </ThemeContext.Provider>
    );
};

const AppConsumer = ThemeContext.Consumer;

export {
    ThemeContext,
    AppProvider,
    AppConsumer
};