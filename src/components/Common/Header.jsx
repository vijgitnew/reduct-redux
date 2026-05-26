import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  let myData = useSelector((mystore) => mystore.counterStore.count);

  let cart = useSelector((mystore) => mystore.cartStore.cart);
  console.log(cart);
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold">MyStore</h1>

        {/* Navigation */}
        <nav>
          <ul className="flex gap-6 text-lg">
            <li>
              <Link to="/" className="hover:text-yellow-300">
                Home
              </Link>
            </li>

            <li>
              <Link to="/cart" className="hover:text-yellow-300">
                Cart{cart.length}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
