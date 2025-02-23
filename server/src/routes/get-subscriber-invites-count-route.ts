import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";
import { getSubscriberInviteCount } from "../functions/get-subscribers-invites-count";

export const getSubscriberInvitesCountRoute: FastifyPluginAsyncZod = async (
  app
) => {
  app.get(
    "/subscribers/:subscriberId/ranking/count",
    {
      schema: {
        summary:
          "Quantidade de inscrições realmente realizadas a partir de um usuário",
        operationId: "getSubscriberInviteCount",
        tags: ["referral"],
        params: z.object({
          subscriberId: z.string(),
        }),
        response: {
          200: z.object({
            count: z.number(),
          }),
        },
      },
    },
    async (request) => {
      const { subscriberId } = request.params;

      const { count } = await getSubscriberInviteCount({ subscriberId });

      return { count };
    }
  );
};
