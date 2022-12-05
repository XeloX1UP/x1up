"use client";

import Link from "next/link";

export default function Modal({ btnName, title, body, secundary, id, email }) {
  return (
    <div>
      <button
        type="button"
        className={`btn ${secundary ? "btn-primary" : "btn-dark"}`}
        data-bs-toggle="modal"
        data-bs-target={`#${id}`}
      >
        {btnName}
      </button>
      <div
        className="modal fade"
        id={id}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                {title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{body}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <Link
                href={`mailto:${email.name}?Subject=${email.date}%20-%20${email.body}%20-%20${email.category}`}
              >
                <button type="button" className="btn btn-primary">
                  Enviar correo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
