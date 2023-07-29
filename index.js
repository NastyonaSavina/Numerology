const clcBtn = document.querySelector(".clc-btn");
const newDateValue = document.querySelector(".input-place");

const numResults = document.querySelector(".numbers-area");


clcBtn.addEventListener("click", (event) => {
  event.preventDefault();

    let calculation = {};
    const date = newDateValue.value;

    if (newDateValue.value.length !== 8) {
        newDateValue.value = "";
        return alert('Please, enter 8 numbers of date of birth')
    }

    const lastNumberPosition = date.split("").length - 1;

    const nOne = date.split("").reduce((prev, number) => {
      return prev + parseFloat(number);
    }, 0);
    calculation.nOne = nOne;

    const nTwo = nOne
      .toString()
      .split("")
      .reduce((prev, number) => {
        return prev + parseFloat(number);
      }, 0);
    calculation.nTwo = nTwo;

    const nThree =
      date.split("")[0] === "0"
        ? nOne - date.split("")[1] * 2
        : nOne - date.split("")[0] * 2;
    calculation.nThree = nThree;

    const nFour = nThree
      .toString()
      .split("")
      .reduce((prev, number) => {
        return prev + parseFloat(number);
      }, 0);
    calculation.nFour = nFour;

    const nFive =
      nOne +
      (date.split("")[lastNumberPosition] === "0"
        ? date.split("")[lastNumberPosition - 1] * 2
        : date.split("")[lastNumberPosition] * 2);
    calculation.nFive = nFive;

    const nSix = nFive
      .toString()
      .split("")
      .reduce((prev, number) => {
        return prev + parseFloat(number);
      }, 0);
    calculation.nSix = nSix;
   

    const markup = `
    <div class="future-numbers num-group">
                        <p>Future</p>
                        <div class="num-pair">
                            <div class="num-group-item">
                                <p class="num-title">#5</p>
                                <p class="num-value">${calculation.nFive}</p>
                            
                            </div>
                            <div class="num-group-item">
                                <p class="num-title">#6</p>
                                <p class="num-value">${calculation.nSix}</p>
                            </div>
                        </div>
                                           
                    </div>

                    <div class="present-numbers num-group">
                        <p>Present</p>
                       <div class="num-pair">
                            <div class="num-group-item">
                                <p class="num-title">#1</p>
                                <p class="num-value">${calculation.nOne}</p>
                            
                            </div>
                            <div class="num-group-item">
                                <p class="num-title">#2</p>
                                <p class="num-value">${calculation.nTwo}</p>
                            </div>
                        </div>
                        

                    </div>
                    <div class="past-numbers num-group">
                        <p>Past</p>
                        <div class="num-pair">
                            <div class="num-group-item">
                                <p class="num-title">#3</p>
                                <p class="num-value">${calculation.nThree}</p>
                            
                            </div>
                            <div class="num-group-item">
                                <p class="num-title">#4</p>
                                <p class="num-value">${calculation.nFour}</p>
                            </div>
                        </div>`;
    
    numResults.innerHTML = markup;


});
