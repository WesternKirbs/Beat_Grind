// let cl = document.getElementById("course_list");
let li = Array.from(document.getElementById("course_list").children);
li.forEach((child) => {
    child.children[0].addEventListener("mouseover", (e)=>{
        let c_title = e.target;
        let underline = c_title.parentElement;
        let arrow = underline.children[1].children[0].children[0];
        c_title.style.color="cyan";
        underline.style["border-bottom-color"]="cyan";
        arrow.style["border-color"] = "cyan";

        c_title.style.transition = "0.3s ease";
        underline.style.transition = "0.3s ease";
        arrow.style.transition = "0.3s ease";

        let course_type = c_title.textContent.split(" ")[0];
        let img = document.getElementById(course_type);
        let pngs = Array.from(img.parentElement.children);
        pngs.forEach((png) => {
            if(png.id != course_type){
                png.style.display = "none";
            }
                
        });
        img.style.display = "block";
    });

    child.children[0].addEventListener("mouseout", (e)=>{
        let c_title = e.target;
        let underline = c_title.parentElement;
        let arrow = underline.children[1].children[0].children[0];
        c_title.style.color="black";
        underline.style["border-bottom-color"]="black";
        arrow.style["border-color"] = "black";
    });

    child.children[1].children[0].addEventListener("mouseover", (e)=>{
        let a = e.target.parentElement.parentElement.children[0];
        a.style.color="cyan";
        a.parentElement.style["border-bottom-color"]="cyan";
        e.target.style["border-color"]="cyan"
    });

    child.children[1].children[0].addEventListener("mouseout", (e)=>{
        let a = e.target.parentElement.parentElement.children[0];
        a.style.color="black";
        a.parentElement.style["border-bottom-color"]="black";
        e.target.style["border-color"]="black"
    });
});




