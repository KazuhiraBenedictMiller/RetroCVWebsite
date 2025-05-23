export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-16 h-16 border-4 border-white dark:border-white light-mode:border-black border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 font-pixel">Loading...</p>
    </div>
  )
}
