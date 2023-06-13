'use client';

import { useCallback, useRef, useEffect, PropsWithChildren } from 'react';
import { useRouter } from 'next/navigation';

// * Component
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
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss();
    },
    [onDismiss],
  );

  // * Effects
  // Add event listeners for the escape key and outside clicks
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onDismiss, onKeyDown]);

  // * Render
  return (
    <article
      className="fixed inset-0 z-50 mx-auto bg-stone-900/60"
      onClick={onClick}
      ref={overlay}
    >
      <div
        ref={wrapper}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-10/12 md:w-8/12 lg:w-1/2 p-6 bg-white rounded-lg shadow-lg"
      >
        {children}
      </div>
    </article>
  );
}
