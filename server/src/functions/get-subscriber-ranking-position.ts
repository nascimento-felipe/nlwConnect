import { redis } from "../redis/client";

interface GetSubscriberRankingPositionParams {
  subscriberId: string;
}

/**
 * Retorna a posição do usuário no ranking
 */
export async function getSubscriberRankingPosition({
  subscriberId,
}: GetSubscriberRankingPositionParams) {
  const rank = await redis.zrevrank("referral:ranking", subscriberId);

  if (rank === null) {
    return { position: null };
  }

  return { position: rank + 1 };
}
