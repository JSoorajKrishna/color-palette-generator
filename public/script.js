let div = document.querySelectorAll("div");
let btn = document.querySelector("a");

let first = true;

if(first)
{

    first = false;
    let a;
    let b;
    let c;
    let href="";
    for(let i=0;i<div.length;i++)
    {
        a = Math.floor(Math.random()*256).toString();
        b = Math.floor(Math.random()*256).toString();
        c = Math.floor(Math.random()*256).toString();
        a = parseInt(a);
        b = parseInt(b);
        c = parseInt(c);

        div[i].setAttribute("style",`background-color: rgb(${a},${b},${c});`);
        href+= `rgb(${a},${b},${c})`;

    }
    btn.setAttribute("href",`/dashboard/${href}`);

}



window.addEventListener("keydown",e =>
		{
			const keyName = event.key;
			if(keyName==" ")
			{
                let a;
                let b;
                let c;
                let href="";
                for(let i=0;i<div.length;i++)
                {
                    a = Math.floor(Math.random()*256).toString();
                    b = Math.floor(Math.random()*256).toString();
                    c = Math.floor(Math.random()*256).toString();
                    a = parseInt(a);
                    b = parseInt(b);
                    c = parseInt(c);

                    div[i].setAttribute("style",`background-color: rgb(${a},${b},${c});`);
                    href+= `rgb(${a},${b},${c})`;

                }
                btn.setAttribute("href",`/dashboard/${href}`);

            }
		})

for(let i=0;i<div.length;i++)
div[i].addEventListener("click",() =>{
    console.log(i);
});



