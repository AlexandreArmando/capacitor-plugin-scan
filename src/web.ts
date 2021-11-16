import { WebPlugin } from '@capacitor/core';

import { CameraPluginPermissions, ImageOptions, PermissionStatus, Photo, ScanPlugin } from './definitions';

export class ScanWeb extends WebPlugin implements ScanPlugin {
  scan(options: ImageOptions): Promise<Photo> {
    throw new Error('Method not implemented.');
  }
  checkPermissions(): Promise<PermissionStatus> {
    throw new Error('Method not implemented.');
  }
  requestPermissions(permissions?: CameraPluginPermissions): Promise<PermissionStatus> {
    throw new Error('Method not implemented.');
  }
}
