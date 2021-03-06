import type { PermissionState } from '@capacitor/core';

export type CameraPermissionState = PermissionState | 'limited';

export type CameraPermissionType = 'camera' | 'photos';

export interface PermissionStatus {
  camera: CameraPermissionState;
  photos: CameraPermissionState;
}

export interface CameraPluginPermissions {
  permissions: CameraPermissionType[];
}

export interface ScanPlugin {
  /**
   * Prompt the user to pick a photo from an album, or take a new photo
   * with the camera.
   *
   * @since 1.0.0
   */
  scan(options: ImageOptions): Promise<Photo>;

  /**
   * Check camera and photo album permissions
   *
   * @since 1.0.0
   */
  checkPermissions(): Promise<PermissionStatus>;

  /**
   * Request camera and photo album permissions
   *
   * @since 1.0.0
   */
  requestPermissions(
    permissions?: CameraPluginPermissions,
  ): Promise<PermissionStatus>;
}

export interface ImageOptions {
  /**
   * The quality of image to return as JPEG, from 0-100
   *
   * @since 1.0.0
   */
  quality?: number;
}

export interface Photo {
  /**
   * The base64 encoded string representation of the image, if using CameraResultType.Base64.
   *
   * @since 1.0.0
   */
  base64String?: string;
  /**
   * The url starting with 'data:image/jpeg;base64,' and the base64 encoded string representation of the image, if using CameraResultType.DataUrl.
   *
   * @since 1.0.0
   */
  dataUrl?: string;
  /**
   * If using CameraResultType.Uri, the path will contain a full,
   * platform-specific file URL that can be read later using the Filsystem API.
   *
   * @since 1.0.0
   */
  path?: string;
  /**
   * webPath returns a path that can be used to set the src attribute of an image for efficient
   * loading and rendering.
   *
   * @since 1.0.0
   */
  webPath?: string;
  /**
   * Exif data, if any, retrieved from the image
   *
   * @since 1.0.0
   */
  exif?: any;
  /**
   * The format of the image, ex: jpeg, png, gif.
   *
   * iOS and Android only support jpeg.
   * Web supports jpeg and png. gif is only supported if using file input.
   *
   * @since 1.0.0
   */
  format: string;
  /**
   * Whether if the image was saved to the gallery or not.
   *
   * On Android and iOS, saving to the gallery can fail if the user didn't
   * grant the required permissions.
   * On Web there is no gallery, so always returns false.
   *
   * @since 1.1.0
   */
  saved: boolean;
}