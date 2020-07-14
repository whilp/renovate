import { GetReleasesConfig, ReleaseResult } from './common';

export abstract class Datasource {
  public abstract id: string;

  abstract getReleases(
    getReleasesConfig: GetReleasesConfig
  ): Promise<ReleaseResult | null>;
}
