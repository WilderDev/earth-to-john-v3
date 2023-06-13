'use client';

import { useCallback, useRef, useEffect, PropsWithChildren } from 'react';
import { useRouter } from 'next/navigation';

export default function Modal({ children }: PropsWithChildren) {
  // * Hooks
  const router = useRouter();

  // * Refs
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);

  // * Handlers
  // Close the modal
  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  // Close the modal when clicking outside of it
  const onClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper],
  );

  // Close the modal when pressing the escape key
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Escape') onDismiss();
    },
    [onDismiss],
  );

  // * Effects
  // Add event listeners for the escape key and outside clicks
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss();
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onDismiss]);

  // * Render
  return (
    <article
      className="fixed inset-0 z-50 mx-auto bg-stone-900/60"
      onClick={onClick}
      ref={overlay}
    >
      <div
        ref={wrapper}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-6"
      >
        {children}
      </div>
    </article>
  );
}
