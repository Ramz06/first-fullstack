export const AuthLayoutBackground = () => {
    return (
        <div aria-hidden="true" className="absolute inset-0 z-0">
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-purple-600 opacity-30 blur-[150px]"></div>

        <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-pink-500 opacity-30 blur-[150px]"></div>

        <div className="absolute -bottom-24 left-16 h-80 w-80 rounded-full bg-cyan-400 opacity-20 blur-[120px]"></div>

        <div className="absolute top-24 right-16 h-72 w-72 rounded-full bg-yellow-300 opacity-20 blur-[120px]"></div>
      </div>
    )
}