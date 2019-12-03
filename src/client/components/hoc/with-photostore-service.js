import React from 'react';
import { PhotostoreServiceConsumer } from '../photostore-service-context';

const withPhotostoreService = () => (Wrapped) => {

  return (props) => {
    return (
      <PhotostoreServiceConsumer>
        {
          (photostoreService) => {
            return (<Wrapped {...props}
                     photostoreService={photostoreService}/>);
          }
        }
      </PhotostoreServiceConsumer>
    );

  }
}

export default withPhotostoreService;
