import { forwardRef } from "react";
import Button from "./Button";
import { GlobalPortal } from "../../GlobalPortal";

const FixedBottomButton = forwardRef(function FixedBottomButton(props, forwardedRef){

    return (
        <GlobalPortal.Consumer>
            <div style={{
                position : 'fixed',
                left : 0,
                bottom : 0,
                width : "100%"
            }}>
                <div style={{
                    padding: "0 20px 18px"
                }}>
                    <Button {...props} ref={forwardedRef} />
                </div>
            </div>
        </GlobalPortal.Consumer>
    )
})

export default FixedBottomButton