import { useState } from "react";

export default function CodePopupButton({ code }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="text-xs px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 transition border border-white/10"
      >
        View code
      </button>

      {/* MODAL */}
      {open && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[100]"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-neutral-950 border border-white/10 rounded-xl p-4 w-[90%] max-w-3xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* HEADER */}
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs text-white/60">Code snippet</span>

              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
              >
                ✕
              </button>
            </div>

            {/* CODE */}
            <pre className="text-green-400 text-xs overflow-auto whitespace-pre">
              {code}
            </pre>

          </div>
        </div>
      )}
    </>
  );
}