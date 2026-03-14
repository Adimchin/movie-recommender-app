function Casts({filteredCrew_castData}: any) {
  return (
    <div className="text-white text-2xl font-bold space-y-6 mt-15">
      <div className="">Casts</div>
      <div
        className="overflow-x-scroll overflow-y-visible py-5 flex gap-20"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {/*loop casts*/}
        {filteredCrew_castData?.map((cast: any) => {
          // fix needed
          return;
          return (
            <div className="space-y-5">
              <div className="w-40 h-40">
                <img
                  src="https://image.tmdb.org/t/p/w500//buPFnHZ3xQy6vZEHxbHgL1Pc6CR.jpg"
                  alt="cast"
                  className="w-full h-full object-cover object-center rounded-full border-2 border-slate-400/40"
                />
              </div>
              <div className="font-semibold text-lg text-center">
                <div>Johnathan</div>
                <div className="text-sm text-slate-500/50">John Doe</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Casts;
