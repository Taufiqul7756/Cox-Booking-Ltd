FCplusMinusBtn("fPlusBtn", 1);
FCplusMinusBtn("fMinusBtn", -1);

function FCplusMinusBtn(id, plusMinus) {
  const firstClassPlusBtn = document.getElementById(id);
  firstClassPlusBtn.addEventListener("click", function () {
    const firstClassInputGet =
      document.getElementById("first-class-input").value;
    const currentInput = parseFloat(firstClassInputGet);
    const CurrentNumberUpdate = parseFloat(currentInput + plusMinus);

    if (CurrentNumberUpdate < 0) {
      document.getElementById("first-class-input").value = 0;
    } else {
      document.getElementById("first-class-input").value = CurrentNumberUpdate;
    }
    calculation();
  });
}

ECplusMinusBtn("economyPlusBtn", 1);
ECplusMinusBtn("economyMinusBtn", -1);

function ECplusMinusBtn(id, plusMinus) {
  const economyPlusBtn = document.getElementById(id);
  economyPlusBtn.addEventListener("click", function () {
    const economyClassInputGet = document.getElementById(
      "economy-class-input"
    ).value;
    const currentInput = parseFloat(economyClassInputGet);
    const CurrentNumberUpdate = parseFloat(currentInput + plusMinus);

    if (CurrentNumberUpdate < 0) {
      document.getElementById("economy-class-input").value = 0;
    } else {
      document.getElementById("economy-class-input").value =
        CurrentNumberUpdate;
    }
    calculation();
  });
}

function calculation() {
  const subCalculation =
    parseFloat(document.getElementById("first-class-input").value * 150) +
    parseFloat(document.getElementById("economy-class-input").value * 100);
  console.log(subCalculation);

  document.getElementById("subtotal").innerText = subCalculation;
  const taxCalculation = (document.getElementById("tax").innerText =
    (10 * subCalculation) / 100);
  document.getElementById("total").innerText = taxCalculation + subCalculation;
}

function bookNowFunction() {
  const clickedBookNowBtn = document.getElementById("bookNowBtn");
  //console.log(clickedBookNowBtn);
  clickedBookNowBtn.addEventListener("click", function () {
    document.querySelector(".booking-form").style.display = "none";
    document.querySelector(".receive-form").style.display = "block";
    const fairShow = document.getElementById("total").innerText;
    //console.log(fairShow);

    document.getElementById("total-fair").innerText = fairShow;
    //console.log(fairShow);
  });
}
bookNowFunction();
