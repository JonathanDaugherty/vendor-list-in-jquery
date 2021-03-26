const url = "http://localhost:46200/api/vendors";

const vendorList = () => {
    return $.getJSON(url);
}

const vendorDetail = (id) => {
    return $.getJSON(`${url}/${id}`);
}