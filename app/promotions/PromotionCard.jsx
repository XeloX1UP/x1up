import Link from "next/link";

export const PromotionCard = ({ title, subTitle, body, link, code }) => {
  if (link) {
    return (
      <div className="card text-bg-dark my-3">
        <h5 className="card-header">{title}</h5>
        <div className="card-body">
          <h5 className="card-title">{subTitle}</h5>
          <p className="card-text">{body}</p>
          <Link href={link} className={`btn btn-primary`} target={"_blank"}>
            ir a la promoción
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card text-bg-dark my-3">
        <h5 className="card-header">{title}</h5>
        <div className="card-body">
          <h5 className="card-title">{subTitle}</h5>
          <p className="card-text">{body}</p>
          <div className="d-flex align-item-center justify-content-center">
            <p>
              <strong>Código: </strong>
              <span className="fs-1 btn btn-outline-light">{code}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
};
