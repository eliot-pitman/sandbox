import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const testpluginPlugin = createPlugin({
  id: 'testplugin',
  routes: {
    root: rootRouteRef,
  },
});

export const TestpluginPage = testpluginPlugin.provide(
  createRoutableExtension({
    name: 'TestpluginPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
