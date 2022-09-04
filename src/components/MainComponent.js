import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import PageCount from "./PageCount";
import ProductsDisplay from "./ProductsDisplay";


const MainComponent = () => {
    const [data, setdata] = useState([]);
    const [pageCount, setpageCount] = useState(0);
    const [limit, setLimit] = useState(8);
    const [total, setTotal] = useState(0);
    const dispatch = useDispatch()

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(
                `http://localhost:4000/Data?_page=1&_limit=${limit}`
            );
            const data = await res.json();
            const total = res.headers.get("x-total-count");
            setTotal(total)
            setpageCount(Math.ceil(total / limit));
            setdata(data);
            dispatch({ type: "add_product", product: data })
        };

        getData();
    }, [dispatch, limit]);

    const fetchData = async (currentPage) => {
        const res = await fetch(
            `http://localhost:4000/Data?_page=${currentPage}&_limit=${limit}`
        );
        const data = await res.json();
        return data;
    };

    const handleClick = async (data) => {
        let currentPage = data.selected + 1;
        const dataRecieved = await fetchData(currentPage);
        setdata(dataRecieved)
        dispatch({ type: "add_product", product: data })
    };
    return (
        <>
            <div className="row d-flex justify-content-between mt-3">
                <div style={{ width: "auto" }}>{total} Products</div>
                < PageCount limit={limit} setLimit={setLimit} />
            </div>
            <hr />
            <div className="row"  >
                {data.map((item) => {
                    return (
                        <ProductsDisplay data={item} />
                    );
                })}
            </div>

            <hr />
            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={handleClick}
                containerClassName={"pagination justify-content-end"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                pageClassName={"page-item"}
                previousLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />
        </>
    );
};
export default MainComponent;