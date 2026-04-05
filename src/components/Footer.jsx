export default function Footer() {
  return (
    <footer className="bg-blue-900 text-blue-200 py-8 text-center">
      <p className="font-semibold text-white text-lg">Abdulahi Ahmed Hassan</p>
      <p className="text-sm mt-1">Chief Accountant · AMAL EXPRESS</p>
      <p className="text-xs mt-4 text-blue-400">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  )
}
