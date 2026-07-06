"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import clsx from "clsx";

export default function VideoPlayer({
  src,
  poster,
  title,
  className,
  ringClassName,
  aspect = "aspect-9/16",
}: {
  src: string;
  poster: string;
  title: string;
  className?: string;
  ringClassName?: string;
  aspect?: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={clsx(
        "relative w-full overflow-hidden rounded-[20px] bg-ink",
        aspect,
        ringClassName,
        className
      )}
    >
      {playing ? (
        <video
          className="h-full w-full object-cover"
          src={src}
          poster={poster}
          autoPlay
          controls
          playsInline
          preload="auto"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 h-full w-full"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={poster}
            alt={title}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <span className="play-pulse absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cta text-white shadow-lg transition group-hover:scale-105">
            <Play className="ml-1 h-6 w-6" fill="currentColor" />
          </span>
          <span className="absolute inset-x-0 bottom-0 p-4 text-left text-sm font-medium text-white">
            {title}
          </span>
        </button>
      )}
    </div>
  );
}
