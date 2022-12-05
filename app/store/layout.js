export default function StoreLayout({ children }) {
  return (
    <>
      <div className="content-fluid bg-success mt-1 mb-4 py-2">
        <p className="text-center m-0 fs-1 fw-bolder">X1UP's Store</p>
      </div>
      {children}
    </>
  );
}
