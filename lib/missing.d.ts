declare module 'changelog-filename-regex' {
  const re: RegExp;
  export = re;
}

declare module 'linkify-markdown' {
  export function linkify(
    source: string,
    options: Record<string, unknown>
  ): string;
}

declare module 'get-installed-path' {
  interface Options {
    cwd?: string;
    local?: boolean;
    paths?: string[];
  }
  export function getInstalledPath(
    arg: string,
    opts?: Options
  ): Promise<string>;
}
