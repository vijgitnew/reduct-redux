export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <p>
          © 2026 MyStore. All rights reserved.
        </p>

        <div className="flex gap-4">
          <a href="#" className="hover:text-yellow-300">
            Privacy
          </a>

          <a href="#" className="hover:text-yellow-300">
            Contact
          </a>
        </div>

      </div>
    </footer>
  );
}