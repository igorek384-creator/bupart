export default function Header() {
  return (
    <header className="bg-black border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <span className="text-xl font-bold text-yellow-500">
          Bupart
        </span>
        <nav className="flex gap-4 text-zinc-300">
          <a href="/" className="hover:text-white">Главная</a>
          <a href="/add" className="hover:text-white">Добавить</a>
        </nav>
      </div>
    </header>
  )
}