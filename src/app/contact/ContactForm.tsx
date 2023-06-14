'use client';

import capitalize from '@/lib/common/text.helpers';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// * Component
export default function ContactForm() {
  // * Hooks
  const router = useRouter();
  const searchParams = useSearchParams();
  const painting = searchParams.get('painting');

  // * State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // * Handlers
  const onContactFormSubmit = async (e: any) => {
    e.preventDefault();

    const msgDetails = { name, email, subject, message };
    const formData = new FormData();

    Object.entries(msgDetails).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // carman.john@icloud.com

    const res = await fetch(
      `https://getform.io/f/${process.env.NEXT_PUBLIC_GET_FORM_ID}`,
      {
        method: 'POST',
        body: formData,
      },
    );

    if (res.ok) {
      router.push('/thank-you');
    } else {
      setError(
        'We had an error processing your request. Please refresh the page and try again!',
      );
    }
  };

  // * Effects
  // Add painting to subject if it exists
  useEffect(() => {
    if (painting) {
      setSubject(`Inquiry about ${capitalize(painting.split('-').join(' '))}`);
    }
  }, [painting]);

  // * Render
  return (
    <form
      onSubmit={onContactFormSubmit}
      className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-stone-700"
        >
          Full name
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="block w-full rounded-md border-stone-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-stone-700"
        >
          Email
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="block w-full rounded-md border-stone-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-stone-700"
        >
          Subject
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="subject"
            id="subject"
            autoComplete="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="block w-full rounded-md border-stone-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <div className="flex justify-between">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-stone-700"
          >
            Message
          </label>
        </div>
        <div className="mt-1">
          <textarea
            id="message"
            name="message"
            aria-describedby="message-description"
            className="block w-full rounded-md border border-stone-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
      </div>

      {error && <p className="block w-[500px] text-sm text-red-500">{error}</p>}

      <div className="text-right sm:col-span-2">
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 font-medium text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
