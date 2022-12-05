import Link from "next/link";
const links = [
  {
    route: "/administrator/addproduct",
    label: "Agregar Productos",
  },
  {
    route: "/administrator/productlist",
    label: "Listar productos",
  },
  {
    route: "/administrator/addcategory",
    label: "Agregar Categorías",
  },
];

export default function AdminLayout({ children }) {
  return (
    <div className="container my-4">
      <div className="row">
        <h1 className="text-center">Administración</h1>
      </div>
      <div className="row">
        <div className="col-3">
          <ul className="nav flex-column">
            {links.map(({ label, route }) => (
              <li className="nav-item">
                <Link
                  className="btn btn-info w-100 my-3 active"
                  href={route}
                  aria-current="page"
                  prefetch={false}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-9">{children}</div>
      </div>
    </div>
  );
}
