"use client"

export function ManageCookiesButton() {
  return (
    <button
      onClick={() => window.dispatchEvent(new CustomEvent("manage-cookies"))}
      className="text-orange-500 hover:underline cursor-pointer"
    >
      Gestionar cookies
    </button>
  )
}
