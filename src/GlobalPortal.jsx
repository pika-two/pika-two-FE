import { createContext, useState } from "react";
import { createPortal } from "react-dom";

const PortalContext = createContext(null);


function PortalProvider({children}){
    const [portalWrapperRef, setPortalWrapperRef] = useState(null);

    return (
        <PortalContext.Provider value={portalWrapperRef}>
            {children}
            <div id="portal-wrapper"
                ref = {elem=>{
                    if (portalWrapperRef !==null || elem == null ){
                        return
                    }
                    setPortalWrapperRef(elem);
                }}
            >
            </div>
        </PortalContext.Provider>
    )
}

function PortalConsummer({children}){
    return (
        <PortalContext.Consumer>
            {portalWrapperRef => {
                if (portalWrapperRef === null){
                    return null
                }
                return createPortal(children, portalWrapperRef)
            }}

        </PortalContext.Consumer>
    )
}

export const GlobalPortal = {
    Provider : PortalProvider,
    Consumer : PortalConsummer
}