export function FooterSection() {
  return (
    <footer className="w-full mt-28 px-4 py-4 md:px-8 border-t border-t-zinc-700">
      <div className="max-w-7xl mx-auto flex justify-between">
        <p className="text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()}
        </p>

        <p className="text-zinc-500 text-sm">Developer by: Felipe Gomes</p>
      </div>
    </footer>
  );
}
