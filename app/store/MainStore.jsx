import { InterestLinks } from "../../components/storeComponents/InterestLinks";
import { LinksCategorias } from "../../components/storeComponents/LinksCategorias";
import { MainStoreBanner } from "../../components/storeComponents/MainStoreBanner";
import { MainStoreInfo } from "../../components/storeComponents/MainStoreInfo";
import { TopProducts } from "../../components/storeComponents/TopProducts";

export const MainStore = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <LinksCategorias />
        </div>
        <div className="col-md-9">
          <div className="container-fluid">
            <div className="row">
              <InterestLinks />
            </div>
            <div className="row d-flex align-item-center justify-content-center">
              <div className="col-md-4 " style={{ maxWidth: "300px" }}>
                <TopProducts />
              </div>
              <div className="col-md-8">
                <div className="container-fluid">
                  <div className="row">
                    <div
                      className="col-md-8 position-relative rounded rounded-5 my-5 my-md-0"
                      style={{ minHeight: "22rem" }}
                    >
                      <MainStoreBanner />
                    </div>
                    <div className="col-md-4"></div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <MainStoreInfo />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
