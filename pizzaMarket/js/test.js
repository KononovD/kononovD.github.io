var out = "";

function testValidEmail() {
    if (validEmail("kononov.daniyl@gmail.com") === true)
        out += "<p style='color:green; font-weight: 600;'>Test validEmail passed </p>";
    else
        out += "<p style='color:red; font-weight: 600;'>Test validEmail failed </p>";
    if (validEmail("kononovD.com") === false)
        out += "<p style='color:green; font-weight: 600;'>Test validEmail2 passed </p>";
    else
        out += "<p style='color:red; font-weight: 600;'>Test validEmail2 failed </p>";
    if (validEmail("kononovDcom") === false)
        out += "<p style='color:green; font-weight: 600;'>Test validEmail3 passed </p>";
    else
        out += "<p style='color:red; font-weight: 600;'>Test validEmail3 failed </p>";
    if (validEmail("kononov@Dcom") === false)
        out += "<p style='color:green; font-weight: 600;'>Test validEmail4 passed </p>";
    else
        out += "<p style='color:red; font-weight: 600;'>Test validEmail4 failed </p>";
    if (validEmail("") === false)
        out += "<p style='color:green; font-weight: 600;'>Test validEmail5 passed </p>";
    else
        out += "<p style='color:red; font-weight: 600;'>Test validEmail5 failed </p>";
}

function testValidName() {
    if (validName("Daniyl") === true)
        out += "<p style='color:green; font-weight: 600;'>Test validName passed </p>";
    else
        out += "<p style='color:red; font-weight: 600;'>Test validName failed </p>";
    if (validName("Daniyl1233") === false)
        out += "<p style='color:green; font-weight: 600;'>Test validName2 passed </p>";
    else
        out += "<p style='color:red; font-weight: 600;'>Test validName2 failed </p>";
    if (validName("312313") === false)
        out += "<p style='color:green; font-weight: 600;'>Test validName3 passed </p>";
    else
        out += "<p style='color:red; font-weight: 600;'>Test validName3 failed </p>";
    if (validName("") === false)
        out += "<p style='color:green; font-weight: 600;'>Test validName4 passed </p>";
    else
        out += "<p style='color:red; font-weight: 600;'>Test validName4 failed </p>";
}

function testValidTel() {
    if (validTel("1234567890") === true)
        out += "<p style='color:green; font-weight: 600;'>Test validTel passed </p>";
    else
        out += "<p style='color:red; font-weight: 600;'>Test validTel failed </p>";
    if (validTel("asdasddsadas") === false)
        out += "<p style='color:green; font-weight: 600;'>Test validTel2 passed </p>";
    else
        out += "<p style='color:red; font-weight: 600;'>Test validTel2 failed </p>";
    if (validTel("12345asdasdsad") === false)
        out += "<p style='color:green; font-weight: 600;'>Test validTel3 passed </p>";
    else
        out += "<p style='color:red; font-weight: 600;'>Test validTel3 failed </p>";
    if (validTel("") === false)
        out += "<p style='color:green; font-weight: 600;'>Test validTel4 passed </p>";
    else
        out += "<p style='color:red; font-weight: 600;'>Test validTel4 failed </p>";
}

function testIsEmpty() {
    var o = {};
    if (isEmpty(o) === true)
        out += "<p style='color:green; font-weight: 600;'>Test isEmpty passed </p>";
    else
        out += "<p style='color:red; font-weight: 600;'>Test isEmpty failed </p>";
    o.id = 1;
    if (isEmpty(o) === false)
        out += "<p style='color:green; font-weight: 600;'>Test isEmpty passed2 </p>";
    else
        out += "<p style='color:red; font-weight: 600;'>Test isEmpty failed2 </p>";
}

$(document).ready(function () {
    /*testValidEmail();
    testValidName();
    testValidTel();
    testIsEmpty();
    $(".test").html(out);*/
});