'use client';

import Image from 'next/image';
import { images } from '../../../../data/images';

export default function TheWall() {
  // 只展示前24张图片
  const displayImages = images.slice(0, 24);

  return (
    <section className="bg-gradient-to-t from-zinc-50 to-white dark:from-zinc-950 dark:to-black">
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4">
          {displayImages.map(({ id, src, alt }) => (
            <div
              key={id}
              className="group relative mb-6 block w-full"
            >
              <Image
                alt={alt}
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110 shadow-md"
                src={src}
                width={720}
                height={480}
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.jpg';
                }}
              />
            </div>
          ))}
        </div>
    </section>
  );
}