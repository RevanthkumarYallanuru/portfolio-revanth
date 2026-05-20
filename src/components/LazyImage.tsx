import { useEffect, useRef, useState } from 'react';
import { ImageOff } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const FALLBACK_SVG = encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" fill="none">
    <rect width="1200" height="800" fill="#0d1213" />
    <rect x="80" y="80" width="1040" height="640" rx="48" fill="#121a1b" stroke="#ffffff12" />
    <path d="M180 610L380 430L520 540L690 340L1020 610" stroke="#A7AA63" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" opacity="0.65" />
    <circle cx="370" cy="300" r="56" fill="#A7AA63" opacity="0.18" />
  </svg>
`);

const PLACEHOLDER_SRC = `data:image/svg+xml;charset=UTF-8,${FALLBACK_SVG}`;

type LazyImageProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'loading' | 'decoding'> & {
  src: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
};

export default function LazyImage({
  src,
  alt,
  className,
  loading = 'lazy',
  priority = false,
  onLoad,
  onError,
  ...rest
}: LazyImageProps) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [resolvedSrc, setResolvedSrc] = useState(src);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(priority);

  useEffect(() => {
    setResolvedSrc(priority ? src : PLACEHOLDER_SRC);
    setLoaded(false);
    setFailed(false);
    setShouldLoad(priority);
  }, [src, priority]);

  useEffect(() => {
    if (priority) {
      setShouldLoad(true);
      return;
    }

    if (!imgRef.current || typeof IntersectionObserver === 'undefined') {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px 0px' },
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [priority]);

  useEffect(() => {
    if (shouldLoad && resolvedSrc !== src) {
      setResolvedSrc(src);
    }
  }, [shouldLoad, resolvedSrc, src]);

  return (
    <img
      ref={imgRef}
      {...rest}
      src={resolvedSrc}
      alt={alt}
      loading={priority ? 'eager' : loading}
      decoding="async"
      className={cn(
        'transition-opacity duration-500',
        loaded || failed ? 'opacity-100' : 'opacity-0',
        failed && 'object-contain bg-white/5 p-6',
        className,
      )}
      onLoad={(event) => {
        setLoaded(true);
        onLoad?.(event);
      }}
      onError={(event) => {
        if (!failed) {
          setFailed(true);
          setResolvedSrc(PLACEHOLDER_SRC);
        }
        onError?.(event);
      }}
    />
  );
}
