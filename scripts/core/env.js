const DEV = "development";
const PROD = "production";
const IS_PRODUCTION = process.env.NODE_ENV === PROD;

/**
 *
 * @public
 * @namespace env
 * @memberof core
 * @description Set the app environment.
 *
 */
const env = {
    /**
     *
     * @member ENV
     * @memberof core.env
     * @description The applied environment ref.
     *
     */
    ENV: process === "undefined" || IS_PRODUCTION ? PROD : DEV,

    /**
     *
     * @method isDev
     * @memberof core.env
     * @description Returns the dev mode status.
     * @returns {boolean}
     *
     */
    isDev() {
        return this.ENV === DEV;
    },

    /**
     *
     * @method isProd
     * @memberof core.env
     * @description Returns the dev mode status.
     * @returns {boolean}
     *
     */
    isProd() {
        this.ENV === PROD;
    }
};

/******************************************************************************
 * Export
 *******************************************************************************/
export default env;
