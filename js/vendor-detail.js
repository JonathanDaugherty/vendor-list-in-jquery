
let singleVendor = null;

$().ready(() => {
    
    vendorDetail(6)
        .done((vendor) => {
            singleVendor = vendor;
            display(singleVendor);
        })

});

const display = (vendor) => {
    $("#pid").text(vendor.id);
    $("#pcode").text(vendor.code);

};