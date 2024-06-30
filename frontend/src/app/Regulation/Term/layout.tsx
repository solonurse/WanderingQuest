export default function TermLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col w-full min-h-screen">
        {children}
      </div>
    </>
  );
};