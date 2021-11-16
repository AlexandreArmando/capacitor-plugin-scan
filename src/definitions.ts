export interface ScanPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
