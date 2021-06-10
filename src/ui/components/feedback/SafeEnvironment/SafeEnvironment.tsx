import React from 'react';
import { Container } from '@material-ui/core';
import { SafeEnvironmentContainer } from './SafeEnvironment.style';

function SafeEnvironment() {
  return (
    <SafeEnvironmentContainer>
      <Container>
        Ambiente Seguro <i className={'twf-lock'} />
      </Container>
    </SafeEnvironmentContainer>
  );
}

export default SafeEnvironment;