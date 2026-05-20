/** Build a YouTube embed URL for VideoModal (autoplay on open). */
export function youtubeEmbedUrl(watchOrShareUrl: string): string {
  const match = watchOrShareUrl.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{11})/
  );
  const id = match?.[1];
  if (!id) {
    return watchOrShareUrl;
  }
  return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
}
