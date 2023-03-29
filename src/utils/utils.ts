
/**
 * Adds prefix to S3 bucket assets and returns the resource URI
 * @param asset {String}
 * Asset name and extension as a string, e.g. 'logo.png'
 * @returns {String}
 * Returns URI formed with CDN + asset, e.g. 'https://s3.cdn.com/logo.png'
 */
export const addMediaPrefix = (asset: string): string => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/restrict-template-expressions
	return `${import.meta.env.VITE_APP_CDN}/${asset}`;
};