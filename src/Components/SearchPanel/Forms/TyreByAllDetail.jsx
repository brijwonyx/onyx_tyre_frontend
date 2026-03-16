const TyreByAllDetail = (fitmentDetail) => {
  const { fitmentDetail: finalData } = fitmentDetail || {};
  const { tyres, wheels, wheel_params } = finalData || {};

  return finalData !== undefined ? (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-48 py-10">
      <div>
        <h2 className="text-xl font-bold text-white border-b pb-2">
          Tyre Sizes
        </h2>
        <h3 className="mt-6 font-semibold text-white">Original Tyre Sizes</h3>

        <div className="flex flex-wrap gap-3 mt-3">
          {tyres?.factory?.map((t, i) => (
            <span key={i} className="bg-gray-600 text-white px-4 py-2 rounded">
              {t.width} / {t.profile} R{t.r}
            </span>
          ))}
        </div>

        <h3 className="mt-6 font-semibold text-white">Optional Sizes</h3>

        <div className="flex flex-wrap gap-3 mt-3">
          {tyres?.replace?.map((t, i) => (
            <span key={i} className="bg-gray-600 text-white px-4 py-2 rounded">
              {t.width} / {t.profile} R{t.r}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-white border-b pb-2">
          Wheel Sizes
        </h2>

        <h3 className="mt-6 font-semibold text-white">Original Wheel Sizes</h3>

        <div className="flex flex-wrap gap-3 mt-3">
          {wheels?.factory?.map((w, i) => (
            <span key={i} className="bg-gray-600 text-white px-4 py-2 rounded">
              {w.width}J x {w.r} ET{w.et}
            </span>
          ))}
        </div>
        <h3 className="mt-6 font-semibold text-white">Optional Sizes</h3>

        <div className="flex flex-wrap gap-3 mt-3">
          {wheels?.replace?.map((w, i) => (
            <span key={i} className="bg-gray-600 text-white px-4 py-2 rounded">
              {w.width}J x {w.r} ET{w.et}
            </span>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="font-semibold white">Wheel mount dimensions</h3>

          <div className="text-gray-500 mt-2 space-y-1">
            <p>Bolt: {wheel_params?.nut}</p>
            <p>PCD: {wheel_params?.pcd}</p>
            <p>DIA: {wheel_params?.dia} mm</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <h2 className="text-xl font-bold text-white border-b pb-2 flex justify-center mt-4">
        Data Not Found !!!
      </h2>
    </div>
  );
};

export default TyreByAllDetail;
