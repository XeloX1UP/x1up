export default function CategoryPage({ params }) {
  const { id } = params;
  return (
    <div>
      <h1>Categoría {id}</h1>
    </div>
  );
}
