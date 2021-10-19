let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach((targetBtn) => {
    targetBtn.addEventListener("click", (event) => {
        const styles = event.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        }
        else if(styles.contains("reset")){
            count = 0;
        }
        else{
            count++;
        }
        if(count > 0){
            value.style.color = "green";
        }
        if(count < 0){
            value.style.color = "red";
        }
        if(count === 0){
            value.style.color = "#102a42";
        }
        value.textContent = count;
    });
});