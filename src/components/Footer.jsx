export default function Footer() {
  return (
    <footer className="bg-[#0a0a0b] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-400">© {new Date().getFullYear()} Swyra. All rights reserved.</p>
        <a id="download" href="#top" className="rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:bg-white/10">
          Back to top
        </a>
      </div>
    </footer>
  );
}
