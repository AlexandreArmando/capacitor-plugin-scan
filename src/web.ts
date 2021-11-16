import { WebPlugin } from '@capacitor/core';

import type { ScanPlugin } from './definitions';

export class ScanWeb extends WebPlugin implements ScanPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
