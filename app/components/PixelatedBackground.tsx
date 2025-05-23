const PixelatedBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] opacity-10">
      <div className="absolute inset-0 bg-grid-white/30 dark:bg-grid-white/30 light-mode:bg-grid-black/20 bg-grid-8 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
    </div>
  )
}

export default PixelatedBackground
