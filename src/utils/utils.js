
/**
 * Adds prefix to S3 bucket assets and returns the resource URI
 * @param asset {String}
 * Asset name and extension as a string, e.g. 'logo.png'
 * @returns {String}
 * Returns URI formed with CDN + asset, e.g. 'https://s3.cdn.com/logo.png'
 */
export const addMediaPrefix = asset => {
    return `${process.env.REACT_APP_CDN}/${asset}`;
};