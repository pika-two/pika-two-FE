import React, { forwardRef } from 'react'
import CenterBox from './CenterBox'
import BackGoroundCover from '../ui/BackGroundCover'
import { GlobalPortal } from '../../GlobalPortal'
const Modal = forwardRef(function Modal(props, forwardedRef){
    
    return (
        <GlobalPortal.Consumer>
            <div ref={forwardedRef} style={{
                display : props.isOpen?'flex':'none',
                'flexDirection' : 'column'
            }}>
                <CenterBox zIndex="2" {...props}></CenterBox>
                <BackGoroundCover zIndex="1" opacity="0.5" backgroundColor="#FC0"></BackGoroundCover>
            </div>
        </GlobalPortal.Consumer>
    )
})

export default Modal