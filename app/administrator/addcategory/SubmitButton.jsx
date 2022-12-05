"use client";
const validateForm = (category) => {
  const regExp = {
    name: /^[a-zA-ZÀ-ÿ0-9\s()\u00f1\u00d1]{2,15}$/,
    description: /^[a-zA-ZÀ-ÿ0-9-_,.\u00f1\u00d1)(\s]{5,500}$/,
  };
  if (
    regExp.name.test(category.name) &&
    regExp.description.test(category.description)
  ) {
    return true;
  }
  return undefined;
};
const fetchNewCatgory = (category) => {
  return fetch("/api/newcategory", {
    credentials: "same-origin",
    method: "POST",
    body: JSON.stringify(category),
  }).then((res) => res.json());
};
export default function SubmitCategoryBtn() {
  const handleBtn = async (e) => {
    const form =
      e.target.parentElement.parentElement.parentElement.parentElement;
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }
    form.classList.add("was-validated");
    e.preventDefault();
    const category = {
      name: document.getElementById("name").value,
      description: document.getElementById("description").value,
    };
    if (validateForm(category)) {
      try {
        const response = await fetchNewCatgory(category);
        if (response.isValid) {
          alert(response.message);
          location.href = "/administrator/addcategory";
        } else {
          alert(response.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <button
      type="submit"
      className="btn btn-outline-success w-100 h-100"
      onClick={handleBtn}
    >
      Guardar categoría
    </button>
  );
}
