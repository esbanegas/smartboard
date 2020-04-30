import React from 'react';
import { Context } from '.';


const withState = ComposedComponent => props => {
    return (
        <Context.Consumer>
            {
                ({ state, dispatch }) => {
                    return (

                        <ComposedComponent
                            state={state}
                            dispatch={dispatch}
                            {...props}
                        />
                    )
                }
            }
        </Context.Consumer>
    )
}

export default withState;