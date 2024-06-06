import { PodCastType } from "@/types/podcast.type";
import Image from "next/image";
import { FC } from "react";

type Props = {
  podcast: Partial<PodCastType>;
};

const PodcastCover: FC<Props> = ({ podcast }) => {
  return (
    <div className="flex-1 w-full flex flex-col  items-center">
      <div className="aspect-square w-full relative">
        <Image
          src={podcast.image as string}
          fill
          className="object-contain"
          alt={podcast.title as string}
        />
      </div>
      <h4 className="text-[16px] flex flex-wrap font-bold text-start w-full">
        {podcast.title}
      </h4>
      <span className="text-[12px] font-normal text-start w-full text-gray-400">
        {podcast.host}
      </span>
    </div>
  );
};

export default PodcastCover;
