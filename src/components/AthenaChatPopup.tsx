'use client';

import { buildAthenaChatUrl } from '@/lib/athenaChat';

type AthenaChatPopupProps = {
  packageName: string;
  onClose: () => void;
};

export default function AthenaChatPopup({
  packageName,
  onClose,
}: AthenaChatPopupProps) {
  const chatUrl = buildAthenaChatUrl(packageName);

  return (
    <aside
      className="athena-chat-popup glass"
      role="dialog"
      aria-labelledby="athena-chat-title"
      aria-modal="false"
    >
      <div className="athena-chat-popup__header">
        <div>
          <p className="athena-chat-popup__eyebrow">Package selected</p>
          <h2 id="athena-chat-title" className="athena-chat-popup__title">
            {packageName} inquiry
          </h2>
        </div>
        <button
          type="button"
          className="athena-chat-popup__close"
          aria-label="Close Athena chat"
          onClick={onClose}
        >
          ×
        </button>
      </div>

      <div className="athena-chat-popup__frame-wrap">
        <iframe
          className="athena-chat-popup__frame"
          src={chatUrl}
          title="Malkah Package Concierge"
          allow="clipboard-write; microphone"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      <div className="athena-chat-popup__footer">
        <a href={chatUrl} target="_blank" rel="noopener noreferrer">
          Open chat in new tab
        </a>
      </div>
    </aside>
  );
}
