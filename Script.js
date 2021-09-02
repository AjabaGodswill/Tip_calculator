calculate_tip = () => {
    let [bill_amt, service, num_of_people] =
        [document.querySelector(".bill_amt").value,
     document.querySelector("#service_selector").value,
    document.querySelector(".people_amt").value];


    if (bill_amt === "" || service == 0) {
        alert("Please enter some values")

        return;
    }

    if (num_of_people == "" || num_of_people < 1) {
        num_of_people = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block"
    }

    let total = (bill_amt * service) / num_of_people;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2)

    document.getElementById("Tip_total").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

document.getElementById("Tip_total").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").addEventListener("click", () => {
    calculate_tip();
})