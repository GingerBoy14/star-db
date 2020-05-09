import React from "react";

const withChildFunction = (ch) => (Wrapper) =>{
    return (props) =>{
        return(
            <Wrapper {...props}>
                {ch}
            </Wrapper>
        )}
};
export default withChildFunction