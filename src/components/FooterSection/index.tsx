import { infoBR, infoEN } from "@/data/userInfo";

export function FooterSection() {
  let info = infoBR;

  return (
    <footer className="w-full mt-28 px-4 py-4 md:px-8 border-t border-t-zinc-700">
      <div className="max-w-7xl mx-auto flex justify-between">
        <p className="text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()}
        </p>

        <p className="text-zinc-500 text-sm">{info.footer.note}</p>
      </div>
    </footer>
  );
}
