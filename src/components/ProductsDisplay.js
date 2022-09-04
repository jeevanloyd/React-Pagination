import React from "react";

 const ProductsDisplay = (props) => {
    return (
        <div key={props.data.id} className="col-md-3 col-12 d-flex justify-content-center">
            <div className="card w-100 mb-3">
                <img
                    src={props.data.product_image}
                    className="card-img-top w-50"
                    height={250}
                    style={{marginLeft:"25%", marginTop:"10px"}}
                    alt ="ProductsImage Display"
                />
                <div className="card-body">
                    <p className="card-text">
                        <span className="card-subtitle mb-2 h6 text-muted text-left">
                            {props.data.product_name}
                        </span> 
                    </p>
                    <p className="card-text">
                        <span className="card-subtitle mb-2 text-muted text-left">
                            {props.data.description}
                        </span>
                    </p>
                    <p className="card-text">
                        <span className="card-title text-left h6">
                            {props.data.price}{" "}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductsDisplay;