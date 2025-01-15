let names=['Sarthak_Bharti' ,
    'Parth_Aggarwal' ,
    'Ranjan_ojha' ,
    'Krish_Agarwal',
    'Shikhar_Gupta',
    'Swatantra_kumar_Jagrwal',
    'Ritvija_Katare',
    'Atharv_Dubey' ,
    'Namya_Mayur_Jarag', 
    'Himanshu_Gupta',
    'Prathu_Agarwal',
    'Daksh_Gupta',
    'Vatsal_Jain',
    'Arjun_Singla',
    'Palthya_Suman',
    'Keerthisri_Naik', 
    'Aryaman_Oberoi',
    'Spandan_Kapil_Patil']
let manifestos = ['https://drive.google.com/open?id=1UCrgefJOKo6xPEwT52ZMBrkBLBxQmGqP',
    'https://drive.google.com/open?id=1imJSHf0AqhNdTdeagQm6vA_PhCLmqCLp',
    'https://drive.google.com/open?id=1JW-FApqBEDLpcyLtzYt_IeuXloNni2kS',
    'https://drive.google.com/open?id=1F7At_LV2efEKVJnkWGyefo5Q2BlgcL0-',
    'https://drive.google.com/open?id=1voWnxVrGkctIK2f-REtS8e2CvflPbxMP',
    'https://drive.google.com/open?id=1Wht33CEZSETB8bEuVqwBRZNgsc1wGA23',
    'https://drive.google.com/open?id=1hQvLVb89iaLkJZLqIbtk6DkCx3hnr-Wz',
    'https://drive.google.com/open?id=1wQrbiIOJ_61eWUjk0dCHMPJYD7oZRCme',
    'https://drive.google.com/open?id=1ZzOUEP_LOdGf7rn_153Wm7_oj8jONu5X',
    'https://drive.google.com/open?id=1FqyAtbwwOIYRz9RkLwHtH8XD4CNUUgn7',
    'https://drive.google.com/open?id=19xrH64VMmTaYtCW8DTtpDKywdrS3CSfg',
    'https://drive.google.com/open?id=1N8NHNUJm4jenIiFR8X97gICJwHQDDA9y',
    'https://drive.google.com/open?id=1VFl96ZBJ0N9cUfU7Am8whZ4WTyyrE3z9',
    'https://drive.google.com/open?id=18cfCM0RJC49BfFxLinzl_zT4CuWzaWXM',
    'https://drive.google.com/open?id=1j7n-8Q2wvCzyvBV6WDhFLd9LhFUfdW5-',
    'https://drive.google.com/open?id=1KLrhQop9U3p4alVRcYpB054dkead-3q5',
    'https://drive.google.com/open?id=1wuqkAJ6nTK5zcM8MwqpzcC2XY2OI-soJ',
    'https://drive.google.com/open?id=1ZxDTcIfwtS8TmFe7MNsH1ASggPJf55Dl']
let idx = 0;
let cardContainingDiv=document.createElement("div");
cardContainingDiv.className="enclosingDiv";
document.querySelector("body").appendChild(cardContainingDiv);
for (let name in names){
    let card=document.createElement("div");
    card.className="profileCard";
    let imageDiv=document.createElement("div");
    imageDiv.className="imgSenator";
    imageDiv.addEventListener("mouseenter",()=>{
        document.querySelector(`#${names[name]}popup`).className="hoverPopUp showPopUp";
        image.style.boxShadow="2px 2px 2px 2px white";
    })
    imageDiv.addEventListener("mouseleave",()=>{
        document.querySelector(`#${names[name]}popup`).className="hoverPopUp hide";
        image.style.boxShadow="";
    })
    let image=document.createElement("img");
    image.src=`assets\\images\\senators\\MidTerm&ByElection\\${names[name].replace("_"," ").replace("_"," ")}.jpg`;
    let description = document.createElement("div");
    description.className = "desc";
    let pop=document.createElement("div");
    pop.id=`${names[name]}popup`;
    pop.className="hoverPopUp hide";
    let manifesto=document.createElement("a");
    manifesto.href=manifestos[idx];
    idx = idx+1;
    manifesto.target="_blank";
    let click=document.createElement('p');
    click.innerText="Click Here to see Manifesto";
    let identity = document.createElement("p");
    identity.className="identity";
    identity.innerText=names[name].replace("_"," ").replace("_"," ");
    let pos = document.createElement("p");
    pos.className="position";
    pos.innerText="SENATOR BT/BS Y24";

    manifesto.appendChild(click);
    pop.appendChild(manifesto);
    imageDiv.appendChild(image);
    imageDiv.appendChild(pop);
    description.appendChild(identity);
    description.appendChild(pos);
    imageDiv.appendChild(description);
    card.appendChild(imageDiv);
    cardContainingDiv.appendChild(card);
}




let names2=['Deven_Anil_Gangwani','Varun_Tokas','Supritum_Karmakar']
idx = 0;
let manifestos2 = ['https://drive.google.com/open?id=149SKDqd80AxAu8wouDPqY4D_hEqEMx5e',
    'https://drive.google.com/open?id=1k3oxvAX59nYCrgt10mIXODtBas0_RSOp',
    'https://drive.google.com/open?id=1dIVxZRQX3wmb3IGiOnDf8DJuqKdkGt79']
cardContainingDiv=document.createElement("div");
cardContainingDiv.className="enclosingDiv";
document.querySelector("body").appendChild(cardContainingDiv);
for (let name in names2){
    let card=document.createElement("div");
    card.className="profileCard";
    let imageDiv=document.createElement("div");
    imageDiv.className="imgSenator";
    imageDiv.addEventListener("mouseenter",()=>{
        document.querySelector(`#${names2[name]}popup`).className="hoverPopUp showPopUp";
        image.style.boxShadow="2px 2px 2px 2px white";
    })
    imageDiv.addEventListener("mouseleave",()=>{
        document.querySelector(`#${names2[name]}popup`).className="hoverPopUp hide";
        image.style.boxShadow="";
    })
    let image=document.createElement("img");
    image.src=`assets\\images\\senators\\MidTerm&ByElection\\${names2[name].replace("_"," ").replace("_"," ")}.jpg`;
    let description = document.createElement("div");
    description.className = "desc";
    let pop=document.createElement("div");
    pop.id=`${names2[name]}popup`;
    pop.className="hoverPopUp hide";
    let manifesto=document.createElement("a");
    manifesto.href=manifestos2[idx];
    idx = idx+1;
    manifesto.target="_blank";
    let click=document.createElement('p');
    click.innerText="Click Here to see Manifesto";
    let identity = document.createElement("p");
    identity.className="identity";
    identity.innerText=names2[name].replace("_"," ").replace("_"," ");
    let pos = document.createElement("p");
    pos.className="position";
    pos.innerText="SENATOR BT/BS Y21";

    manifesto.appendChild(click);
    pop.appendChild(manifesto);
    imageDiv.appendChild(image);
    imageDiv.appendChild(pop);
    description.appendChild(identity);
    description.appendChild(pos);
    imageDiv.appendChild(description);
    card.appendChild(imageDiv);
    cardContainingDiv.appendChild(card);
}


let names3=['Mohammad_Zahid_Khan', 'Mayank_Bhardwaj', 'Ashwani_Kumar', 'Adarsh_Tiwari']
let manifestos3 = ['https://drive.google.com/open?id=1pBfFsUlhPm1uIqve7oBKkxNqzkzhIQ6X',
    'https://drive.google.com/open?id=1bbTJPx4zn_BnWY701XgsGPhgtNRJq9TQ',
    'https://drive.google.com/open?id=12EceljB4GqexGz0oNFg0eZTNO9WWFSJB',
    'https://drive.google.com/open?id=16L4MoQm3RkQbzrcyugkXDALd4QfVDTK3']
idx = 0;
cardContainingDiv=document.createElement("div");
cardContainingDiv.className="enclosingDiv";
document.querySelector("body").appendChild(cardContainingDiv);
for (let name in names3){
    let card=document.createElement("div");
    card.className="profileCard";
    let imageDiv=document.createElement("div");
    imageDiv.className="imgSenator";
    imageDiv.addEventListener("mouseenter",()=>{
        document.querySelector(`#${names3[name]}popup`).className="hoverPopUp showPopUp";
        image.style.boxShadow="2px 2px 2px 2px white";
    })
    imageDiv.addEventListener("mouseleave",()=>{
        document.querySelector(`#${names3[name]}popup`).className="hoverPopUp hide";
        image.style.boxShadow="";
    })
    let image=document.createElement("img");
    image.src=`assets\\images\\senators\\MidTerm&ByElection\\${names3[name].replace("_"," ").replace("_"," ")}.jpg`;
    let description = document.createElement("div");
    description.className = "desc";
    let pop=document.createElement("div");
    pop.id=`${names3[name]}popup`;
    pop.className="hoverPopUp hide";
    let manifesto=document.createElement("a");
    manifesto.href=manifestos3[idx];
    idx = idx+1;
    manifesto.target="_blank";
    let click=document.createElement('p');
    click.innerText="Click Here to see Manifesto";
    let identity = document.createElement("p");
    identity.className="identity";
    identity.innerText=names3[name].replace("_"," ").replace("_"," ");
    let pos = document.createElement("p");
    pos.className="position";
    pos.innerText="SENATOR PhD Y24";

    manifesto.appendChild(click);
    pop.appendChild(manifesto);
    imageDiv.appendChild(image);
    imageDiv.appendChild(pop);
    description.appendChild(identity);
    description.appendChild(pos);
    imageDiv.appendChild(description);
    card.appendChild(imageDiv);
    cardContainingDiv.appendChild(card);
}