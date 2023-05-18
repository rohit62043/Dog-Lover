var dropdown = $("#breedList")
var allowSubmit = true;
var breedImage = $("#dog-img");
var breed;

$.get("https://dog.ceo/api/breeds/list/all", function (data, status) {
    let dogBreeds = data.message;
    for (let breed in dogBreeds) {
        dropdown.append('<option value="' + breed + '">' + breed + '</option>');//
        //  console.log(breed)
    }
});

dropdown.change(function () {
    allowSubmit = true;
});

$("form button").click(function (e) {
    e.preventDefault();
    if (allowSubmit) {
        breed = dropdown.val();
        console.log(breed);
        displayDog(breed);
        allowSubmit = false;
    }
});
$("#image button").click(function (e) {
    e.preventDefault();
    if (breed != undefined) {
        displayDog(breed);
    }
});


function displayDog(breed) {
    let url = "https://dog.ceo/api/breed/" + breed + "/images/random";

    $.get(url, function (data) {
        let imgUrl = data.message;
        breedImage.attr('src', imgUrl)
    })

}