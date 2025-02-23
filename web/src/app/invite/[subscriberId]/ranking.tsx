import Image from "next/image";

import { getRanking } from "@/http/api";
import cooper from "../../../assets/medal-cooper.svg";
import gold from "../../../assets/medal-gold.svg";
import silver from "../../../assets/medal-silver.svg";

export async function Ranking() {
  const { ranking } = await getRanking();

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {ranking.map((item, index) => {
          return (
            <div
              key={index}
              className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
            >
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{index + 1}º</span> |{" "}
                {item.name}
              </span>
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {item.score}
              </span>

              {index == 0 ? (
                <Image
                  src={gold}
                  alt="medalha de ouro"
                  className="absolute right-8 top-0"
                />
              ) : null}

              {index == 1 ? (
                <Image
                  src={silver}
                  alt="medalha de ouro"
                  className="absolute right-8 top-0"
                />
              ) : null}

              {index == 2 ? (
                <Image
                  src={cooper}
                  alt="medalha de ouro"
                  className="absolute right-8 top-0"
                />
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
