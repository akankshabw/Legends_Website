let post = document.createElement("h1");
post.innerText = "Executive Candidates";
document.querySelector("body").appendChild(post);
let names=['Chiranshu_Kataria',
    'Pratham_Sharma',
    'Aman_Shukla',
    'Anurag_Basu',
    'Apoorv_Tandon',
    'Devdhar_Patil',
    'Anukalp_Rai',
    'Pratham_Shah',
    'Anish_Sahu',
    'Avinash_Kumar',
    'Ram_Ratan_Aggarwal',
    'Tanush_Goel'];
let POSITION = ['PRESIDENT', 'PRESIDENT', 'GENERAL SECRETARY', 'GENERAL SECRETARY', 'GENERAL SECRETARY', 'GENERAL SECRETARY','GENERAL SECRETARY','GENERAL SECRETARY','GENERAL SECRETARY','GENERAL SECRETARY','GENERAL SECRETARY','GENERAL SECRETARY'];
let COUNCIL = ['STUDENTS\' GYMKHANA', 'STUDENTS\' GYMKHANA', 'PG ACADEMICS AND CAREER', 'PG ACADEMICS AND CAREER', 'UG ACADEMICS AND CAREER', 'UG ACADEMICS AND CAREER', 'GAMES AND SPORTS', 'GAMES AND SPORTS', 'MEDIA AND CULTURE', 'MEDIA AND CULTURE', 'MEDIA AND CULTURE', 'SCIENCE AND TECHNOLOGY']
let manifestoExec = ['https://drive.google.com/open?id=1C0kRRWnCEMgCjEltIcVjsmE-tEUy7pQG',
    'https://drive.google.com/open?id=1utY23BmmbuEnLaHuhbU95iEWgxijKRfY',
    'https://drive.google.com/open?id=1efUqfFttBbJ36FuRpzD1lVRRytMyJkZM',
    'https://drive.google.com/open?id=1RII13sRQWINCAzQbq2DQzMwVcFyMIgc5',
    'https://drive.google.com/open?id=1AL_JtipCmE7ECKK1QXOOU3mtEZVnkzgz',
    'https://drive.google.com/file/d/1cBxYgikNvs7HfzB5aAJjjPJbUS34YR23/view?usp=drive_link',
    'https://drive.google.com/open?id=1g87iHrV4a-DUJsdNLyapg3XGAX7ZYVht',
    'https://drive.google.com/open?id=13qyo3SwcmA-y50nN8VZ-f0qHDEoiWfq9',
    'https://drive.google.com/open?id=1L56ABZq1u_ej2KhObNDN_dXeOYE-yfhf',
    'https://drive.google.com/open?id=1sk22Dk_envhfohnPxFRtO1eWeUQvY4ws',
    'https://drive.google.com/file/d/1bvLeR-MSKbf73OBZ4kthDZIGoltuDakH/view?usp=drive_link',
    'https://drive.google.com/open?id=13qyo3SwcmA-y50nN8VZ-f0qHDEoiWfq9']
let cardContainingDiv=document.createElement("div");
cardContainingDiv.className="enclosingDiv executive";
document.querySelector("body").appendChild(cardContainingDiv);
let idx = 0;
for (let name in names){
    let card=document.createElement("div");
    card.className="profileCard";
    let imageDiv=document.createElement("div");
    imageDiv.className="imgSenator exec";
    imageDiv.addEventListener("mouseenter",()=>{
        document.querySelector(`#${names[name]}popup`).className="hoverPopUpExec showPopUp";
        image.style.boxShadow="2px 2px 2px 2px white";
    })
    imageDiv.addEventListener("mouseleave",()=>{
        document.querySelector(`#${names[name]}popup`).className="hoverPopUpExec hide";
        image.style.boxShadow="";
    })
    let image=document.createElement("img");
    image.src=`assets\\images\\executives\\Executive 25\\${names[name].replace("_"," ").replace("_"," ")}.jpg`;
    let description = document.createElement("div");
    description.className = "desc";
    let pop=document.createElement("div");
    pop.id=`${names[name]}popup`;
    pop.className="hoverPopUpExec hide";
    let manifesto=document.createElement("a");
    manifesto.href=manifestoExec[idx];
    manifesto.target="_blank";
    let click=document.createElement('p');
    click.innerText="Click Here to see Manifesto";
    let identity = document.createElement("p");
    identity.className="identity";
    identity.innerText=names[name].replace("_"," ").replace("_"," ");
    let position = document.createElement("p");
    position.className="position";
    position.innerText = POSITION[idx];
    let council = document.createElement("p");
    council.className="council";
    council.innerText = COUNCIL[idx];
    idx = idx+1;
    manifesto.appendChild(click);
    pop.appendChild(manifesto);
    imageDiv.appendChild(image);
    imageDiv.appendChild(pop);
    description.appendChild(identity);
    description.appendChild(position);
    description.appendChild(council);
    imageDiv.appendChild(description);
    card.appendChild(imageDiv);    
    cardContainingDiv.appendChild(card);
}


// let senCand = document.createElement('h1');
// senCand.innerText = "SENATOR CANDIDATES";
// document.querySelector("body").appendChild(senCand);







post = document.createElement("h1");
post.innerText = "Senator BT/BS Y23";
document.querySelector("body").appendChild(post);







let names23=['Aarnav_Gupta',
    'Abhishek_Chhawai',
    'Aditya_Sati',
    'Anisha_Saini',
    'Ayush_Sharma',
    'Divi_Pothukuchi',
    'Divyaman_Pal',
    'Jaiveer_Deepak_Sabharwal',
    'Kruti_Marthak',
    'Manit_Kapoor',
    'Parv_jain',
    'Parv_Mehta',
    'Priyank_Agnihotri',
    'Shubham_agarwal',
    'Shubhangam_Raj',
    'Yashasvi_Mahajan']
let manifesto23 = ['https://drive.google.com/open?id=189n7hToLRoGza6bL_8zX6b-7UqUSB-JD',
    'https://drive.google.com/open?id=179MeOuNURM7XulSCxqdJljjU1nfz59Nx',
    'https://drive.google.com/open?id=12Q1NXge45eOH8qkjuevNFREWBeG8VGg5',
    'https://drive.google.com/open?id=174e3JmHYkxvJ9dTkXcNuxQ0jxZHGBnZW',
    'https://drive.google.com/open?id=1lz0jgZezFBe6wvX7DfqoQtIJ91Zm4HJF',
    'https://drive.google.com/open?id=1QD0FpUjYumsBwN1OBHJPUmpv3C3ofX3j',
    'https://drive.google.com/open?id=1on_c7C79RCaOLoNpoa_AzD4Ag6uUoykd',
    'https://drive.google.com/open?id=1Si8cMdjmTnpItnaAzyCnU-_EcwLbcJDM',
    'https://drive.google.com/open?id=1jXcpbkh5mYG-iz6xwG1AWG7KfcAx3xPw',
    'https://drive.google.com/open?id=1QrNj9PxoZBvIU2ANVh_6mx7pXHaI3K49',
    'https://drive.google.com/open?id=1sfzCOC4kGDm13qf0gYno118RiBCGs5B4',
    'https://drive.google.com/open?id=1l4Wgek8ili8Qah5iR6LZP7jeSXPYd1iM',
    'https://drive.google.com/open?id=11DjQKNYzAIbRjfuAx_mWPQVgZ-ov7uDs',
    'https://drive.google.com/open?id=1y4xyOEkiqb23Wtez1Q89CDehrZqhj8qJ',
    'https://drive.google.com/open?id=1_lR1raLgls1LnyoKZon29ZvFgwKpjQ3J',
    'https://drive.google.com/open?id=1gwoUhIhCvTvMZl3UBCfKwe7bMb1qwXN7']
idx = 0;
cardContainingDiv=document.createElement("div");
cardContainingDiv.className="enclosingDiv SenatorsY23";
document.querySelector("body").appendChild(cardContainingDiv);
for (let name in names23){
    let card=document.createElement("div");
    card.className="profileCard";
    let imageDiv=document.createElement("div");
    imageDiv.className="imgSenator";
    imageDiv.addEventListener("mouseenter",()=>{
        document.querySelector(`#${names23[name]}popup`).className="hoverPopUp showPopUp";
        console.log("show");
        image.style.boxShadow="2px 2px 2px 2px white";
    })
    imageDiv.addEventListener("mouseleave",()=>{
        document.querySelector(`#${names23[name]}popup`).className="hoverPopUp hide";
        image.style.boxShadow="";
    })
    let image=document.createElement("img");
    image.src=`assets\\images\\senators\\Y23\\${names23[name].replace("_"," ").replace("_"," ")}.jpg`;
    let description = document.createElement("div");
    description.className = "desc";
    let pop=document.createElement("div");
    pop.id=`${names23[name]}popup`;
    pop.className="hoverPopUp hide";
    let manifesto=document.createElement("a");
    manifesto.href=manifesto23[idx];
    idx=idx+1;
    manifesto.target="_blank";
    let click=document.createElement('p');
    click.innerText="Click Here to see Manifesto";
    let identity = document.createElement("p");
    identity.className="identity";
    identity.innerText=names23[name].replace("_"," ").replace("_"," ");
    let pos = document.createElement("p");
    pos.className="position";
    // pos.innerText="SENATOR BT/BS Y23";
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













post = document.createElement("h1");
post.innerText = "Senator BT/BS Y22";
document.querySelector("body").appendChild(post);




names22=['Arin_Dhariwal',
    'Ayan_Gupta',
    'Ayush_Yadav',
    'Ishan_R_Mukundhan',
    'Kaushal_Jain',
    'Naitik_Harbhajanka',
    'Rajavardhan_Ramavath',
    'Shreyash_Dwivedi',
    'Shruti_Ramchandra_Dalvi',
    'Ujjawal_Agarwal',
    'Yash_Giri']
let manifesto22 = ['https://drive.google.com/file/d/1c9H4soBf_RhSma0sLg9gvzF5OMvopGHP/view?usp=drive_link',
    'https://drive.google.com/open?id=1-6mEe6nv1MBoD_9ok6kqPi9ZSEhID50Q',
    'https://drive.google.com/open?id=1HwmwdVUlQVOPI81ngLu_FmQW1eunWUgY',
    'https://drive.google.com/open?id=1LZAW1lh-Zft_EYZNnMKOVagzAy-EWtvw',
    'https://drive.google.com/open?id=1mbMcJDYlhKGcRrPGn0SxqSFxLAlb36P8',
    'https://drive.google.com/open?id=1gL_Q4cy7suChSeuBYWi_1wls6lJMtKwO',
    'https://drive.google.com/open?id=1RK3InZpCjW14AOyFs5tkJ4PvpT3g7wWJ',
    'https://drive.google.com/open?id=1kwdK4owfdul_bre8VOlxzhR_2c_eSbM5',
    'https://drive.google.com/open?id=1ucBRB1TiGhaLI1Rqfq2RXJ3ANaE9K4JN',
    'https://drive.google.com/open?id=138lzkqGoXl67gQoa3oY7NLx2yJJLL1YB',
    'https://drive.google.com/open?id=16Vg4EymdU5k0XSIgKQ4PxRjyIofunAAn']
idx = 0;
cardContainingDiv=document.createElement("div");
cardContainingDiv.className="enclosingDiv SenatorsY22";
document.querySelector("body").appendChild(cardContainingDiv);
for (let name in names22){
    let card=document.createElement("div");
    card.className="profileCard";
    let imageDiv=document.createElement("div");
    imageDiv.className="imgSenator";
    imageDiv.addEventListener("mouseenter",()=>{
        document.querySelector(`#${names22[name]}popup`).className="hoverPopUp showPopUp";
        image.style.boxShadow="2px 2px 2px 2px white";
    })
    imageDiv.addEventListener("mouseleave",()=>{
        document.querySelector(`#${names22[name]}popup`).className="hoverPopUp hide";
        image.style.boxShadow="";
    })
    let image=document.createElement("img");
    image.src=`assets\\images\\senators\\Y22\\${names22[name].replace("_"," ").replace("_"," ")}.jpg`;
    let description = document.createElement("div");
    description.className = "desc";
    let pop=document.createElement("div");
    pop.id=`${names22[name]}popup`;
    pop.className="hoverPopUp hide";
    let manifesto=document.createElement("a");
    manifesto.href=manifesto22[idx];
    idx = idx + 1;
    manifesto.target="_blank";
    let click=document.createElement('p');
    click.innerText="Click Here to see Manifesto";
    let identity = document.createElement("p");
    identity.className="identity";
    identity.innerText=names22[name].replace("_"," ").replace("_"," ");
    let pos = document.createElement("p");
    pos.className="position";
    // pos.innerText="SENATOR BT/BS Y22";
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










post = document.createElement("h1");
post.innerText = "Senator BT/BS Y24";
document.querySelector("body").appendChild(post);


names24=['Avinav_Alankar',
    'Boddupally_Utham_Teja_Sree',
    'Daksh_Gupta',
    'Daksh_Saijwal',
    'Keshav_Agarwal',
    'Madhur_Kumar',
    'Manish_Kajla',
    'Mehul_Talwar',
    'Prakhar_Gupta',
    'Prakhar_Jain',
    'Sarthak_Sehgal',
    'Shikhar_Gupta',
    'Shruti_Sharma',
    'Snehil_Chatterjee',
    'Utkarsh_Aman',
    'Vatsal_Jain']
let manifesto24 = ['https://drive.google.com/open?id=1_b8f_2cUpyOG-1TP6tAFpAPmjpDJpSBL',
    'https://drive.google.com/open?id=1fAPzUhJA7MERRX05OSASTq7eHSArtCqd',
    'https://drive.google.com/open?id=18Oh_qVOwvTQs3aUt4heEK72a6O7wHXEe',
    'https://drive.google.com/open?id=158-SQd9nUD7co-iFD3MHGCJEDgIKapYw',
    'https://drive.google.com/open?id=1BuffeteZeo4NKlJqhFkNV4Wu1UBkmmCl',
    'https://drive.google.com/open?id=1NbTA4sN4__TwsHgiKiImTq6lnLPGyn8f',
    'https://drive.google.com/open?id=1RIB3DOwsE6EXxysowSIKwzu0AHWW4Ccb',
    'https://drive.google.com/open?id=1B0-dQzki7_AUH_4fKSOFB6jnkCRjFXvo',
    'https://drive.google.com/open?id=1jRG1LIpWJ5U_tlcgFttqGZEttbZx8mkg',
    'https://drive.google.com/open?id=1AtvJYsVrqzokxie1fneCu4Dg7GD-10xp',
    'https://drive.google.com/open?id=11pF6N4nEyxLj3TNtYEkleImwhfoVY0Jx',
    'https://drive.google.com/open?id=1H0rz_0wdB-wFRYtdETzfLKDkJkrxehVq',
    'https://drive.google.com/open?id=1-VFAS-N_h67icBq-Uwz02UrJ0y5IhxAM',
    'https://drive.google.com/open?id=1JmcdEM_ekT4_VLQifOFBjU6LuQgKf21t',
    'https://drive.google.com/open?id=1uhrAWhHwM_1qhTkRoghl_CKk0yal1jDN',
    'https://drive.google.com/open?id=12Gzf1l_uFphwc25GJiK-mqqq2lbm-x05']
idx = 0;
cardContainingDiv=document.createElement("div");
cardContainingDiv.className="enclosingDiv SenatorsY24";
document.querySelector("body").appendChild(cardContainingDiv);
for (let name in names24){
    let card=document.createElement("div");
    card.className="profileCard";
    let imageDiv=document.createElement("div");
    imageDiv.className="imgSenator";
    imageDiv.addEventListener("mouseenter",()=>{
        document.querySelector(`#${names24[name]}popup`).className="hoverPopUp showPopUp";
        image.style.boxShadow="2px 2px 2px 2px white";
    })
    imageDiv.addEventListener("mouseleave",()=>{
        document.querySelector(`#${names24[name]}popup`).className="hoverPopUp hide";
        image.style.boxShadow="";
    })
    let image=document.createElement("img");
    image.src=`assets\\images\\senators\\Y24\\${names24[name].replace("_"," ").replace("_"," ").replace("_"," ")}.jpg`;
    let description = document.createElement("div");
    description.className = "desc";
    let pop=document.createElement("div");
    pop.id=`${names24[name]}popup`;
    pop.className="hoverPopUp hide";
    let manifesto=document.createElement("a");
    manifesto.href=manifesto24[idx];
    idx = idx + 1;
    manifesto.target="_blank";
    let click=document.createElement('p');
    click.innerText="Click Here to see Manifesto";
    let identity = document.createElement("p");
    identity.className="identity";
    identity.innerText=names24[name].replace("_"," ").replace("_"," ").replace("_"," ");
    let pos = document.createElement("p");
    pos.className="position";
    // pos.innerText="SENATOR BT/BS Y24";
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







post = document.createElement("h1");
post.innerText = "Senator M.Tech. Y23";
document.querySelector("body").appendChild(post);


namesMT23=['Anik_Kumar_Mondal',
    'AVIJIT_MITRA',
    'Prasad_Vijay_Dushing',
    'Suman_Bramhdev_Yadav']
let manifestoMT23 = ['https://drive.google.com/open?id=1m0ETXGLwlwdAQuam0ytqdVegxCuTsDLY',
    'https://drive.google.com/open?id=194UR0MWQBLohu-Gk3VscqqvDEyrB3dht',
    'https://drive.google.com/open?id=1Oej4afKreUBzHTjzqHz7RoLarngjAkq-',
    'https://drive.google.com/open?id=1JQSitKIHnKjn8KnzBos5UFLhDtz3rpCA']
idx = 0;
cardContainingDiv=document.createElement("div");
cardContainingDiv.className="enclosingDiv SenatorsMT23";
document.querySelector("body").appendChild(cardContainingDiv);
for (let name in namesMT23){
    let card=document.createElement("div");
    card.className="profileCard";
    let imageDiv=document.createElement("div");
    imageDiv.className="imgSenator";
    imageDiv.addEventListener("mouseenter",()=>{
        document.querySelector(`#${namesMT23[name]}popup`).className="hoverPopUp showPopUp";
        image.style.boxShadow="2px 2px 2px 2px white";
    })
    imageDiv.addEventListener("mouseleave",()=>{
        document.querySelector(`#${namesMT23[name]}popup`).className="hoverPopUp hide";
        image.style.boxShadow="";
    })
    let image=document.createElement("img");
    image.src=`assets\\images\\senators\\MTech Y23\\${namesMT23[name].replace("_"," ").replace("_"," ").replace("_"," ")}.jpg`;
    let description = document.createElement("div");
    description.className = "desc";
    let pop=document.createElement("div");
    pop.id=`${namesMT23[name]}popup`;
    pop.className="hoverPopUp hide";
    let manifesto=document.createElement("a");
    manifesto.href=manifestoMT23[idx];
    idx = idx + 1;
    manifesto.target="_blank";
    let click=document.createElement('p');
    click.innerText="Click Here to see Manifesto";
    let identity = document.createElement("p");
    identity.className="identity";
    identity.innerText=namesMT23[name].replace("_"," ").replace("_"," ").replace("_"," ");
    let pos = document.createElement("p");
    pos.className="position";
    // pos.innerText="SENATOR M.TECH. Y23";
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










post = document.createElement("h1");
post.innerText = "Senator M.Sc. Y24 (Including M.Sc.-PhD Y24)";
document.querySelector("body").appendChild(post);

namesMS24=['Koyena_Aich',
    'Sujal_Yadav',
    'Sumanth_Neerchal']
manifestoMS24 = ['https://drive.google.com/open?id=1j1MgUlA5qHoJfyd1l760KXf5IjnjlrW4',
    'https://drive.google.com/open?id=1VfPOoO3kz2nzuDu2WMBXisnR0DBn6Yl0',
    'https://drive.google.com/open?id=1auUeWuYNkhTS0ZofXOttV9SEeKnJRLtR']
idx = 0;
cardContainingDiv=document.createElement("div");
cardContainingDiv.className="enclosingDiv SenatorsMS24";
document.querySelector("body").appendChild(cardContainingDiv);
for (let name in namesMS24){
    let card=document.createElement("div");
    card.className="profileCard";
    let imageDiv=document.createElement("div");
    imageDiv.className="imgSenator";
    imageDiv.addEventListener("mouseenter",()=>{
        document.querySelector(`#${namesMS24[name]}popup`).className="hoverPopUp showPopUp";
        image.style.boxShadow="2px 2px 2px 2px white";
    })
    imageDiv.addEventListener("mouseleave",()=>{
        document.querySelector(`#${namesMS24[name]}popup`).className="hoverPopUp hide";
        image.style.boxShadow="";
    })
    let image=document.createElement("img");
    image.src=`assets\\images\\senators\\MSc and MSc-PhD Y24\\${namesMS24[name].replace("_"," ").replace("_"," ").replace("_"," ")}.jpg`;
    let description = document.createElement("div");
    description.className = "desc";
    let pop=document.createElement("div");
    pop.id=`${namesMS24[name]}popup`;
    pop.className="hoverPopUp hide";
    let manifesto=document.createElement("a");
    manifesto.href=manifestoMS24[idx];
    idx = idx + 1;
    manifesto.target="_blank";
    let click=document.createElement('p');
    click.innerText="Click Here to see Manifesto";
    let identity = document.createElement("p");
    identity.className="identity";
    identity.innerText=namesMS24[name].replace("_"," ").replace("_"," ").replace("_"," ");
    let pos = document.createElement("p");
    pos.className="position";
    // pos.innerText="SENATOR M.SC. Y24\n(INCLUDING M.SC.-PhD Y24)";
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










post = document.createElement("h1");
post.innerText = "Senator MSR";
document.querySelector("body").appendChild(post);

namesMSR=['Bishwas_Kumar',
    'Paras_Ghodeshwar',
    'Souvik_Sarkar']
manifestoMSR = ['https://drive.google.com/open?id=1HtTpmnPDWiz2MGGLJTUsH37TZ7YcozHx',
    'https://drive.google.com/open?id=1kP7dBgK6HhRrMZtvChDADbjQOCrWxcPQ',
    'https://drive.google.com/open?id=1mbCDvM6kLFvG7b4ZRASMLV9NQurwgu73']
idx = 0;
cardContainingDiv=document.createElement("div");
cardContainingDiv.className="enclosingDiv SenatorsMSR";
document.querySelector("body").appendChild(cardContainingDiv);
for (let name in namesMSR){
    let card=document.createElement("div");
    card.className="profileCard";
    let imageDiv=document.createElement("div");
    imageDiv.className="imgSenator";
    imageDiv.addEventListener("mouseenter",()=>{
        document.querySelector(`#${namesMSR[name]}popup`).className="hoverPopUp showPopUp";
        image.style.boxShadow="2px 2px 2px 2px white";
    })
    imageDiv.addEventListener("mouseleave",()=>{
        document.querySelector(`#${namesMSR[name]}popup`).className="hoverPopUp hide";
        image.style.boxShadow="";
    })
    let image=document.createElement("img");
    image.src=`assets\\images\\senators\\MSR\\${namesMSR[name].replace("_"," ").replace("_"," ").replace("_"," ")}.jpg`;
    let description = document.createElement("div");
    description.className = "desc";
    let pop=document.createElement("div");
    pop.id=`${namesMSR[name]}popup`;
    pop.className="hoverPopUp hide";
    let manifesto=document.createElement("a");
    manifesto.href=manifestoMSR[idx];
    idx = idx + 1;
    manifesto.target="_blank";
    let click=document.createElement('p');
    click.innerText="Click Here to see Manifesto";
    let identity = document.createElement("p");
    identity.className="identity";
    identity.innerText=namesMSR[name].replace("_"," ").replace("_"," ").replace("_"," ");
    let pos = document.createElement("p");
    pos.className="position";
    // pos.innerText="SENATOR MSR";
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







post = document.createElement("h1");
post.innerText = "Senator PhD Y22 and Earlier (Including M.Sc.-PhD Y20)";
document.querySelector("body").appendChild(post);


namesPhD22=['Animesh_Kumar_Soni',
    'Atul_Kumar',
    'Bhavesh_Rameshwar_Sarode',
    'Debojit_Chanda',
    'Kunwar_Pratap_Singh_Yadav',
    'Md_Faiz_Akhtar',
    'Murli_Manohar',
    'Pratik_Samal',
    'Ramanuj_Deb',
    'Shruti_Pandey',
    'Swastik_Sharma',
    'Zainab_Khan']
manifestoPhD22 = ['https://drive.google.com/file/d/19GmJCBY7lNZDygU-8Y3E8nZVXI9d3cFu/view?usp=drive_link',
    'https://drive.google.com/open?id=1UPKnnYyd4r45lfn67r0cjpAf35nyzalx',
    'https://drive.google.com/open?id=1STbQ7j--EmseHvKo0-HeF-hKKaGQSih1',
    'https://drive.google.com/open?id=1AP3wEtf0uXObN8_ahFAZ7X83BNFtfqDT',
    'https://drive.google.com/open?id=1pBQSSb4SoJcbps4s2Q-DRIOmgazW5mng',
    'https://drive.google.com/open?id=1vm5czJrYcavHtIx8pQdqxt8TKw03pf3Q',
    'https://drive.google.com/open?id=1BgJSB55ziHdRnREeCELcKqq8Z5umQu4H',
    'https://drive.google.com/open?id=16i9ROs9rh5qyxFo_MkAiCrgg9RZR-JBw',
    'https://drive.google.com/open?id=1geoxwj7qd_r-bfIgwgQdF8PkscmNGr2l',
    'https://drive.google.com/open?id=1nroSSq9nfEbzKqPYsasQlQ9VSTbKsjlg',
    'https://drive.google.com/open?id=1Z1tpc-4sps3ryPAnH8IThNZlPXpmLFl7',
    'https://drive.google.com/open?id=12jnetikw8lIwnEh2JdTNse3bAS2SxV4A']
idx = 0;
cardContainingDiv=document.createElement("div");
cardContainingDiv.className="enclosingDiv SenatorsMSR";
document.querySelector("body").appendChild(cardContainingDiv);
for (let name in namesPhD22){
    let card=document.createElement("div");
    card.className="profileCard";
    let imageDiv=document.createElement("div");
    imageDiv.className="imgSenator";
    imageDiv.addEventListener("mouseenter",()=>{
        document.querySelector(`#${namesPhD22[name]}popup`).className="hoverPopUp showPopUp";
        image.style.boxShadow="2px 2px 2px 2px white";
    })
    imageDiv.addEventListener("mouseleave",()=>{
        document.querySelector(`#${namesPhD22[name]}popup`).className="hoverPopUp hide";
        image.style.boxShadow="";
    })
    let image=document.createElement("img");
    image.src=`assets\\images\\senators\\PhD Y22 and earlier\\${namesPhD22[name].replace("_"," ").replace("_"," ").replace("_"," ")}.jpg`;
    let description = document.createElement("div");
    description.className = "desc";
    let pop=document.createElement("div");
    pop.id=`${namesPhD22[name]}popup`;
    pop.className="hoverPopUp hide";
    let manifesto=document.createElement("a");
    manifesto.href=manifestoPhD22[idx];
    idx = idx + 1;
    manifesto.target="_blank";
    let click=document.createElement('p');
    click.innerText="Click Here to see Manifesto";
    let identity = document.createElement("p");
    identity.className="identity";
    identity.innerText=namesPhD22[name].replace("_"," ").replace("_"," ").replace("_"," ");
    let pos = document.createElement("p");
    pos.className="position";
    // pos.innerText="SENATOR PhD Y22 AND EARLIER\n(INCLUDING M.SC.-PhD Y20)";
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







post = document.createElement("h1");
post.innerText = "Senator PhD Y23";
document.querySelector("body").appendChild(post);

namesPhD23=['Ankit_Mishra',
    'Binong_Kiri_Bey',
    'Gaurav_Kumar',
    'Shivam_Tanwar']
manifestoPhD23 = ['https://drive.google.com/open?id=1XFj4vt0qfUUuLHVUkTR6Q5e0P7N-EbsS',
    'https://drive.google.com/open?id=1i0VBgUPm3SYTqAeVwQE2v3FKT03wNyxa',
    'https://drive.google.com/open?id=1dddXrzubYPJFnfWkUDbUgvgXiIcIZ_D_',
    'https://drive.google.com/file/d/1bbc_HVSaQxmwgfyos0KLeO92cJSX6Wat/view?usp=drivesdk']
idx = 0;
cardContainingDiv=document.createElement("div");
cardContainingDiv.className="enclosingDiv SenatorsMSR";
document.querySelector("body").appendChild(cardContainingDiv);
for (let name in namesPhD23){
    let card=document.createElement("div");
    card.className="profileCard";
    let imageDiv=document.createElement("div");
    imageDiv.className="imgSenator";
    imageDiv.addEventListener("mouseenter",()=>{
        document.querySelector(`#${namesPhD23[name]}popup`).className="hoverPopUp showPopUp";
        image.style.boxShadow="2px 2px 2px 2px white";
    })
    imageDiv.addEventListener("mouseleave",()=>{
        document.querySelector(`#${namesPhD23[name]}popup`).className="hoverPopUp hide";
        image.style.boxShadow="";
    })
    let image=document.createElement("img");
    image.src=`assets\\images\\senators\\PhD Y23\\${namesPhD23[name].replace("_"," ").replace("_"," ").replace("_"," ")}.jpg`;
    let description = document.createElement("div");
    description.className = "desc";
    let pop=document.createElement("div");
    pop.id=`${namesPhD23[name]}popup`;
    pop.className="hoverPopUp hide";
    let manifesto=document.createElement("a");
    manifesto.href=manifestoPhD23[idx];
    idx = idx + 1;
    manifesto.target="_blank";
    let click=document.createElement('p');
    click.innerText="Click Here to see Manifesto";
    let identity = document.createElement("p");
    identity.className="identity";
    identity.innerText=namesPhD23[name].replace("_"," ").replace("_"," ").replace("_"," ");
    let pos = document.createElement("p");
    pos.className="position";
    // pos.innerText="SENATOR PhD Y23";
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
