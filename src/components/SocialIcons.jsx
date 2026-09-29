import React from 'react';

export function XIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function YoutubeIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function LinkedinIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24M7.86 18.5V10.13H5.06V18.5h2.8z" />
    </svg>
  );
}

export function SnapchatIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.001 2c-3.714 0-6.425 2.87-6.425 6.386 0 .848.163 1.838.483 2.68.106.28.058.413-.19.532-.614.296-1.57.77-1.782 1.487-.145.49.206.97.747 1.157.653.226 1.442.27 2.13.064.295-.088.47-.024.56.24.316.924.965 2.146 2.502 2.735.348.133.454.34.402.738-.07.545-.494 1.137-1.396 1.341-.53.12-.916.357-.905.748.01.37.45.59 1.05.626 1.254.076 2.308-.553 2.826-.957.243-.19.467-.184.71 0 .518.404 1.572 1.033 2.826.957.6-.036 1.04-.256 1.05-.626.011-.391-.375-.628-.905-.748-.902-.204-1.326-.796-1.396-1.341-.052-.398.054-.605.402-.738 1.537-.589 2.186-1.811 2.502-2.735.09-.264.265-.328.56-.24.688.206 1.477.162 2.13-.064.541-.187.892-.667.747-1.157-.212-.717-1.168-1.191-1.782-1.487-.248-.119-.296-.252-.19-.532.32-.842.483-1.832.483-2.68C18.426 4.87 15.715 2 12.001 2z" />
    </svg>
  );
}

export function getSocialIcon(name, props = {}) {
  switch (name) {
    case 'X':
    case 'Twitter':
      return <XIcon {...props} />;
    case 'YouTube':
      return <YoutubeIcon {...props} />;
    case 'LinkedIn':
      return <LinkedinIcon {...props} />;
    case 'Snapchat':
      return <SnapchatIcon {...props} />;
    default:
      return null;
  }
}
