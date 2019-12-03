import React from 'react';
import { useStore } from "./../../store/useStore";

 const connect=(mapStateToProps, mapDispatchToProps) =>(Wrapped)=>{

  return (props) => {
                            
  const { state, dispatch } = useStore();
                return (
                    <Wrapped
                        {...props}
                        {...mapStateToProps(state, props)}
                        {...mapDispatchToProps(dispatch, props)}
                    />
                );  
  }
}
export default connect;

