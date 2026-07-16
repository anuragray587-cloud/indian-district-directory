export default function StateStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
      <div className="rounded-lg border p-4 text-center">
        <h3 className="text-sm text-gray-500">Population</h3>
        <p className="text-xl font-bold">--</p>
      </div>

      <div className="rounded-lg border p-4 text-center">
        <h3 className="text-sm text-gray-500">Area</h3>
        <p className="text-xl font-bold">--</p>
      </div>

      <div className="rounded-lg border p-4 text-center">
        <h3 className="text-sm text-gray-500">Districts</h3>
        <p className="text-xl font-bold">--</p>
      </div>

      <div className="rounded-lg border p-4 text-center">
        <h3 className="text-sm text-gray-500">Capital</h3>
        <p className="text-xl font-bold">--</p>
      </div>
    </div>
  );
}
