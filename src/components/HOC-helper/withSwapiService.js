import React from "react";
import { SwapiServiceConsumer} from "../SwapiServiceContext";

const withSwapiService = (Wrapper, mapMethodsToProps) =>{
    return (props)=>{
        return(
            <SwapiServiceConsumer>
                {
                    (swapiService)=>{
                        const serviceProps = mapMethodsToProps(swapiService);
                        return(
                            <Wrapper {...props} {...serviceProps}/>
                        );
                    }
                }
            </SwapiServiceConsumer>
        );
    }
};
export default withSwapiService;