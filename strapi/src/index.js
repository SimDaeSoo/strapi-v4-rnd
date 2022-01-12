'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    console.log('before initialize', strapi);
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    const testFunction = async () => {
      console.log(strapi.config.redis);
      const rawResults = await strapi.db.connection.raw('SELECT * FROM admin_users');
      console.log(rawResults);
    };

    testFunction();
  },
};
