export function Logout() {
  return (
    <>
      <a
        href="/api/auth/logout"
        className=" block text-lg text-pink-500 hover:text-pink-200 transition-colors"
      >
        Sair
      </a>
    </>
  )
}
