import { Code, Database, PenTool } from "lucide-react";
import albaPhoto from "../../assets/albaPhoto.png";

function ProfileVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[18.5rem] sm:max-w-sm md:max-w-md lg:max-w-[27rem]">
      <div className="absolute inset-6 rounded-full border border-cyan-300/25 shadow-[0_0_76px_rgba(34,211,238,0.20)] sm:inset-8"></div>
      <div className="absolute right-1 top-10 z-20 rounded-2xl border border-violet-300/30 bg-slate-950/80 p-3 text-violet-200 shadow-xl shadow-violet-950/30 sm:-right-2 sm:top-12 sm:p-4">
        <Code size={24} />
      </div>
      <div className="absolute left-1 top-24 z-20 rounded-2xl border border-cyan-300/30 bg-slate-950/80 p-3 text-cyan-200 shadow-xl shadow-cyan-950/30 sm:-left-2 sm:top-28 sm:p-4">
        <PenTool size={24} />
      </div>
      <div className="absolute bottom-10 right-3 z-20 rounded-2xl border border-pink-300/30 bg-slate-950/80 p-3 text-pink-200 shadow-xl shadow-pink-950/30 sm:bottom-14 sm:right-4 sm:p-4">
        <Database size={24} />
      </div>

      <div className="relative rounded-[1.75rem] border border-slate-700/80 bg-slate-900/70 p-3 shadow-2xl shadow-cyan-950/20 backdrop-blur sm:rounded-[2rem] sm:p-5">
        <div className="rounded-[1.35rem] border border-cyan-300/20 bg-gradient-to-br from-slate-950 via-slate-900 to-[#161E2E] p-2.5 sm:rounded-[1.5rem] sm:p-3">
          <div className="overflow-hidden rounded-[1rem] border border-slate-700 bg-slate-950 sm:rounded-[1.25rem]">
            <img
              src={albaPhoto}
              alt="Retrato profesional de Alba, desarrolladora Full Stack"
              className="aspect-[4/5] w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileVisual;
