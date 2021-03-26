//const url = "http://localhost:46200/api/vendors";

// let newvendor = {
//     id: 0, 
//     code: "NB", 
//     name: "NoBull", 
//     address: "123 Olly Lifting Way", 
//     city: "Boston",
//     state: "MA", 
//     zip: "12345",
//     phone: "555-555-5555",
//     email: "nobull@gmail.com"
// }

let allVendors = [];

$ ().ready(() => {

    vendorList()
        .done((vendors) => {
            allVendors = vendors;
            display(allVendors);
        })
        .fail()
    })

    //  $.ajax({
    //     method: "POST",
    //     url: url, 
    //     data: JSON.stringify(newvendor),
    //     contentType: `application/json`
    // })
    // .done((res) => {
    //     console.log(res);
    // })
    // .fail((err) => {
    //     console.log(err);
    // })

$().ready(() => {
    console.log("jQuery is ready!")
    $.getJSON(url)
        .done((users) => {
            console.log(users);
        })
        .fail((err) => {
            console.error(err);
        })
})

const display = (vendors) => {
    let tbody = $("tbody");
    tbody.empty();
    for(let vendor of vendors){
        let tr = $("<tr></tr>");
        let tdId = $(`<td>${vendor.id}</td>`);
        tr.append(tdId);
        let tdCode = $(`<td>${vendor.code}</td>`);
        tr.append(tdCode);
        let tdName = $(`<td>${vendor.name}</td>`);
        tr.append(tdName);
        let tdAddress = $(`<td>${vendor.address}</td>`);
        tr.append(tdAddress);
        let tdCity = $(`<td>${vendor.city}</td>`);
        tr.append(tdCity);
        let tdState = $(`<td>${vendor.state}</td>`);
        tr.append(tdState);
        let tdZip = $(`<td>${vendor.zip}</td>`);
        tr.append(tdZip);
        let tdPhone = $(`<td>${vendor.phone}</td>`);
        tr.append(tdPhone);
        let tdEmail = $(`<td>${vendor.email}</td>`);
        tr.append(tdEmail);
        tbody.append(tr);
    }
}
