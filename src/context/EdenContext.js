import { createContext, useContext, useReducer } from "react";

export const EdenContext = createContext()

export const EdenReducer = (state, action) => {
    switch(action.type){
        case 'UPDATE_WELCOME':
            return {...state, fullName: action.payload.fullName, displayName: action.payload.displayName}
        case 'UPDATE_WORKSPACE':
            return {...state, workspaceName: action.payload.workspaceName, workspaceURL: action.payload.workspaceURL}
        case 'UPDATE_PLAN':
            return {...state, plan: action.payload}
        default:
            return state
    }
}

export const EdenContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(EdenReducer, {
        fullName: '',
        displayName: '',
        workspaceName: '',
        workspaceURL: '',
        plan: ''
    })

    // console.log('Eden State:', state)

    return (
        <EdenContext.Provider value={{ ...state, dispatch}}>
            { children }
        </EdenContext.Provider>
    )
}

export const useEdenContext = () => {
    const context = useContext(EdenContext)

    return context
}