interface thumbnailAboutUsProps {
  className: string;
}

export default function ThumbnailAboutUs({ className = "" }: thumbnailAboutUsProps) {
  return (
    <img
      className="unsplash-lrxys-0-t-sy-gc"
      src="../asset/unsplash_LRXYS0tSyGc.png"
      alt="thumbnail"
    />
  );
}