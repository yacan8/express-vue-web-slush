import * as awilix from 'awilix';

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY
});

export default container;