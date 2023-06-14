'use client';

// * Props
interface IProps {
  name: string;
}

// * Component
export default function HeaderLink({ name }: IProps) {
  // * Render
  return (
    <h1
      className="text-2xl md:text-3xl xl:text-4xl font-bold cursor-pointer hocus:text-green-700 transition-colors duration-300 ease-in-out"
      onClick={() => window.location.reload()}
    >
      {name}
    </h1>
  );
}
