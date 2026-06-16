import { useEffect } from 'react'

// ── Swap this URL for your YouTube embed, Vimeo embed, or local video path ──
const VIDEO_SRC = 'https://www.youtube.com/embed/g6yZ3kYhcuQ'

export default function VideoModal({ onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const isYouTubeOrVimeo = VIDEO_SRC.includes('youtube') || VIDEO_SRC.includes('vimeo')

  return (
    <div className="vmodal" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="vmodal__box" onClick={(e) => e.stopPropagation()}>
        <button className="vmodal__close" onClick={onClose} aria-label="Close video">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <div className="vmodal__player">
          {!VIDEO_SRC ? (
            <div className="vmodal__placeholder">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.3 }}>
                <circle cx="12" cy="12" r="10"/>
                <polygon points="10 8 16 12 10 16 10 8"/>
              </svg>
              <p>Video coming soon</p>
              <span>Drop your YouTube/Vimeo URL into VideoModal.jsx</span>
            </div>
          ) : isYouTubeOrVimeo ? (
            <iframe
              src={VIDEO_SRC}
              title="GMDI Product Video"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="vmodal__iframe"
            />
          ) : (
            <video
              src={VIDEO_SRC}
              controls
              autoPlay
              className="vmodal__video"
            />
          )}
        </div>
      </div>
    </div>
  )
}
