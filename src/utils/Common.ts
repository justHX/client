export function buildURIString(
  host: Maybe<string>,
  port: Maybe<number>,
  shouldUseSSL: boolean = false,
  isProduction: boolean = false
) {
  if (!host) throw new Error("Host is not provided");

  const APIString = `http${shouldUseSSL && ""}://${host}`;

  if (!isProduction) {
    if (!port) throw new Error("Port is not provided");

    return `${APIString}:${port}/`;
  }

  return `${APIString}/`;
}
