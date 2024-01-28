let input = document.querySelector("input");
let btns = document.querySelectorAll("button");


btns.forEach((button)=>
{
    button.addEventListener("click", (e)=>
    {
        if(e.target.innerText === "=")
        {
            input.value = eval(input.value);
        }
        else if(e.target.innerText === "Ac")
        {
            input.value = "";
        }

        else if(e.target.innerText === "DEL")
        {
            input.value = input.value.slice(0,input.value.length - 1);
        }

        else
        {
            input.value = input.value + e.target.innerText;
        }
    })
})