import { PodCastType } from "@/types/podcast.type";
import { Clock, Ellipsis, Headphones } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
type Props = {
  podcast: PodCastType;
  number: number;
};

const PodcastDisplay: FC<Props> = ({ podcast, number }) => {
  return (
    <div className="flex items-center gap-x-6 py-4">
      <span className="px-3">{number}</span>
      <div className="w-[200px]  rounded-sm  aspect-square relative">
        <Image
          src={podcast.image}
          alt={podcast.title}
          fill
          className="object-contain aspect-square"
        />
      </div>
      <h4>{podcast.title}</h4>
      <div className="flex justify-end w-full items-center gap-x-2">
        <Headphones />
        <span>{podcast.listeners}</span>
      </div>
      <div className="flex justify-end w-full items-center gap-x-2">
        <Clock />
        <span>{podcast.duration}</span>
      </div>
      <div>
        <Ellipsis />
      </div>
    </div>
  );
};

export default PodcastDisplay;
