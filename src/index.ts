import { registerPlugin } from '@capacitor/core';

import type { ScanPlugin } from './definitions';

const Scan = registerPlugin<ScanPlugin>('Scan', {
  web: () => import('./web').then(m => new m.ScanWeb()),
});

export * from './definitions';
export { Scan };
