import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'iwswordpress-ionic',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
  ],
};
