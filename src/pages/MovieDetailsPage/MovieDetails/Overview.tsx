function OverView({movie , crew_castData}: any) {
  return (
    <div className="space-y-4">
      <div className="text-white text-2xl font-bold">Overview</div>
      <div className="text-slate-400 text-lg tracking-wide font-semibold italic ">
        {movie?.tagline ? `"${movie?.tagline}"` : ""}
      </div>
      <div className="text-lg text-slate-300 font-semibold mb-10">
        {movie?.overview}
      </div>
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
        {/*loop crew*/}
        {crew_castData?.crew.filter((crew: any , index: number) => index <= 15)
          .map((crew: any) => {
          return (
            <div className="grow flex flex-col gap-1" key={crypto.randomUUID()}>
              <span className="text-white font-semibold text-lg">
                {crew.name}
              </span>
              <span className="text-slate-500 text-[16px]">
                {crew.known_for_department}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OverView;
