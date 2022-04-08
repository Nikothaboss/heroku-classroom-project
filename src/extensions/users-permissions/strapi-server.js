// ref doc: https://docs.strapi.io/developer-docs/latest/development/plugins-extension.html#extending-a-plugin-s-interface
module.exports = (plugin) => {
  plugin.controllers.auth.refreshToken = async (ctx) => {
    const { token } = ctx.request.body;
    const payload =
      strapi.plugins["users-permissions"].services.jwt.verify(token);
    const newJwt = strapi.plugins["users-permissions"].services.jwt.issue({
      id: payload.id,
    });

    const { id, iat, exp } = await payload;

    const query = {
      id,
      iat,
      exp,
      newJwt,
    };

    return query;
  };

  plugin.routes["content-api"].routes.push({
    method: "POST",
    path: "/auth/refreshToken",
    handler: "auth.refreshToken",
    config: {
      prefix: "",
    },
  });

  return plugin;
};
