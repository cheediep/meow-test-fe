export default function WelcomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full flex justify-center items-center sm:items-start px-4 py-12">
      {children}
    </main>
  );
}
