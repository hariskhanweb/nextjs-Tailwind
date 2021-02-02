import Link from 'next/link';

function Nav() {
  return (
    <>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <Link href="/about">
          <a className="mr-5 hover:text-gray-900">About</a>
        </Link>
        <Link href="/services">
          <a className="mr-5 hover:text-gray-900">Services</a>
        </Link>
        <Link href="/blog">
          <a className="mr-5 hover:text-gray-900">Blog</a>
        </Link>
        <Link href="/contact">
          <a className="mr-5 hover:text-gray-900">Contact</a>
        </Link>
      </nav>
    </>
  )
}
export default Nav