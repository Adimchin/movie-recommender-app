import languageMap from "../utils/languageMap";
import formatCurrency from "../utils/formatCurrency";

function SideDetails({ movie , keywords }: any) {
  return (
       <div className="bg-slate-800/40 border border-slate-800/60 rounded p-5 space-y-5">
            <div className="flex flex-col gap-1 text-white">
              <span className="text-slate-600 text-[14px] font-bold tracking-wide">
                STATUS
              </span>
              <span className="tracking-wide font-semibold text-[17px]">
                {movie?.status}
              </span>
            </div>
            <div className="flex flex-col gap-1 text-white text-[14px]">
              <span className="text-slate-600 font-bold tracking-wide">
                ORIGINAL LANGUAGE
              </span>
              <span className="tracking-wide font-semibold text-[17px]">
                {languageMap[movie?.original_language]}
              </span>
            </div>
            <div className="flex flex-col gap-1 text-white text-[14px]">
              <span className="text-slate-600 font-bold tracking-wide">
                BUDGET
              </span>
              <span className="tracking-wide font-semibold text-[17px]">
                {formatCurrency(movie?.budget) ? `${formatCurrency(movie?.revenue)}$` : 'Not available'}
              </span>
            </div>
            <div className="flex flex-col gap-1 text-white text-[14px]">
              <span className="text-slate-600 font-bold tracking-wide">
                REVENUE
              </span>
              <span className="tracking-wide font-semibold text-[17px]">
                {formatCurrency(movie?.revenue) ? `${formatCurrency(movie?.revenue)}$` : 'Not available'}
              </span>
            </div>
            <div className="border-slate-800/30 border-[0.1px] mx-1"></div>
            <div className="space-y-4 text-white text-[14px]">
              <div>
                <span className="text-slate-600 font-bold tracking-wide">
                  KEYWORDS
                </span>
              </div>
              <div className="flex gap-3 flex-wrap">
                {/*loop keywords*/}
                {keywords?.keywords.map((keyword: any) => {
                  return (
                    <span
                      className="tracking-wide font-semibold text-sm text-slate-400 bg-slate-800/70 border-slate-800/30 border-[0.1px] px-3 py-1 rounded-full shrink-0"
                      key={crypto.randomUUID()}
                    >
                      {keyword.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
  );
}

export default SideDetails;