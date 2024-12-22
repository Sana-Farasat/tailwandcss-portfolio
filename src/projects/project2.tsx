export default function ProjectEmbed2() {
  return (
    <main>
      <div className="flex justify-center">
        <div className="w-full max-w-4xl h-auto overflow-auto border border-gray-300 rounded-lg">
          <iframe
            src="https://dynamic-resume-builder-henna-iota.vercel.app/" // Vercel project URL
            title="Vercel Project"
            width="100%"
            height="400"
            style={{ border: "none" }}
            className="layout-responsive"
          />
        </div>
      </div>
    </main>
  );
}
