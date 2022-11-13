import "./Info.scss";

const Info = () => {
  return (
    <div className="info mb-lg-0 mb-4 ">
      <ul class="nav nav-product-info justify-content-lg-start justify-content-center" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#product-tab-pane"
            type="button"
            role="tab"
            aria-controls="product-tab-pane"
            aria-selected="true"
          >
            Product Info
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#size-tab-pane"
            type="button"
            role="tab"
            aria-controls="size-tab-pane"
            aria-selected="false"
          >
            Size
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#details-tab-pane"
            type="button"
            role="tab"
            aria-controls="details-tab-pane"
            aria-selected="false"
          >
            Details
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#delivery-return-tab-pane"
            type="button"
            role="tab"
            aria-controls="delivery-return-tab-pane"
            aria-selected="false"
          >
            Delivery & Returns
          </button>
        </li>
       
       
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="product-tab-pane"
          role="tabpanel"
          aria-labelledby="product-info-tab"
          tabindex="0"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum expedita numquam et repellat. Dolorum distinctio dolores vero voluptatum quia, debitis sequi deleniti nemo voluptates, est nostrum molestias corporis illum corrupti!
        </div>
        <div
          class="tab-pane fade"
          id="size-tab-pane"
          role="tabpanel"
          aria-labelledby="size-tab"
          tabindex="0"
        >
          50,42,33
        </div>
        <div
          class="tab-pane fade"
          id="details-tab-pane"
          role="tabpanel"
          aria-labelledby="details-tab"
          tabindex="0"
        >
          Details dolor sit amet consectetur, adipisicing elit. Rerum expedita numquam et repellat. Dolorum distinctio dolores vero voluptatum quia, debitis sequi deleniti nemo voluptates, est nostrum molestias corporis illum corrupti!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, ex porro vel tempora natus error molestiae quia nihil doloremque? Eos enim odio aliquam fugiat magni blanditiis veniam incidunt mollitia saepe.
        </div>
        <div
          class="tab-pane fade"
          id="delivery-return-tab-pane"
          role="tabpanel"
          aria-labelledby="delivery-return-tab"
          tabindex="0"
        >
          Delivery & Returns dolor sit amet consectetur, adipisicing elit. Rerum expedita numquam et repellat. Dolorum distinctio dolores vero voluptatum quia.
        </div>
      </div>
    </div>
  );
};

export default Info;
