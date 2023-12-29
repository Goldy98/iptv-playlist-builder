export default function UploadField() {
  return (
    <div className="p-2 rounded-xl border border-primary">
      <div className="absolute">
        <button className="bg-primary/75 p-1 text-white rounded-lg font-semibold">
          Select
        </button>
        <span className="ml-4">Pick your playlist file</span>
      </div>
      <input
        type="file"
        className="relative bg-success opacity-0 cursor-pointer"
      />
    </div>
  );
}
