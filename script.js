// const firstClassPlusBtn = document.getElementById("f-plus-btn");
// firstClassPlusBtn.addEventListener("click", function () {
//   const firstClassInputGet = document.getElementById("first-class-input").value;
//   const currentInput = parseFloat(firstClassInputGet);
//   const CurrentNumberUpdate = parseFloat(currentInput + 1);
//   document.getElementById("first-class-input").value = CurrentNumberUpdate;
// });

FCplusMinusBtn("fPlusBtn", 1);
FCplusMinusBtn("fMinusBtn", -1);

// const firstClassMinusBtn = document.getElementById("f-minus-btn");
// firstClassMinusBtn.addEventListener("click", function () {
//   const firstClassInputGet = document.getElementById("first-class-input").value;
//   const currentInput = parseFloat(firstClassInputGet);
//   const CurrentNumberUpdate = parseFloat(currentInput - 1);
//   document.getElementById("first-class-input").value = CurrentNumberUpdate;
// });

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
  });
}