import { Code, Database, PenTool } from "lucide-react";
import albaPhoto from "../../assets/albaPhoto.png";

function ProfileVisual() {
  return (
    <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg">
      <div className="absolute inset-8 rounded-full border border-cyan-300/25 shadow-[0_0_80px_rgba(34,211,238,0.22)]"></div>
      <div className="absolute -right-2 top-12 z-20 rounded-2xl border border-violet-300/30 bg-slate-950/80 p-3 text-violet-200 shadow-xl shadow-violet-950/30 sm:p-4">
        <Code size={26} />
      </div>
      <div className="absolute -left-2 top-28 z-20 rounded-2xl border border-cyan-300/30 bg-slate-950/80 p-3 text-cyan-200 shadow-xl shadow-cyan-950/30 sm:p-4">
        <PenTool size={26} />
      </div>
      <div className="absolute bottom-14 right-4 z-20 rounded-2xl border border-pink-300/30 bg-slate-950/80 p-3 text-pink-200 shadow-xl shadow-pink-950/30 sm:p-4">
        <Database size={26} />
      </div>

      <div className="relative rounded-[2rem] border border-slate-700/80 bg-slate-900/70 p-4 shadow-2xl shadow-cyan-950/20 backdrop-blur sm:p-5">
        <div className="rounded-[1.5rem] border border-cyan-300/20 bg-gradient-to-br from-slate-950 via-slate-900 to-[#161E2E] p-3">
          <div className="overflow-hidden rounded-[1.25rem] border border-slate-700 bg-slate-950">
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
