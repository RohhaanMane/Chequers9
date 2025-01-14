const photos = [
    "https://i.ibb.co/6mSHhwL/Mr-Arun-Patil-Kop3.webp" ,
    "https://i.ibb.co/ZNBKt4m/Mr-Ganesh-Sawant-Bhor-Pune.webp",
    "https://i.ibb.co/dc6MrXJ/Mr-Sarjoshi-Achara-Malvan1.webp" ,
    "https://i.ibb.co/hLhbgwY/Ray-Associates-Kop.webp" ,
    "https://i.ibb.co/KDK1f18/Mr-Chetan-Desai.webp" ,
    "https://i.ibb.co/dj4Gz0x/Mr-Sanjay-Sawant-Kudal-Sindhudurg01.webp" ,
    "https://i.ibb.co/xqYK4F6/Mr-Vikas-Mane-Islampur2.webp",
    "https://i.ibb.co/jzp7ZK0/Mr-Vikas-Mane-Islampur1.webp" ,
    "https://i.ibb.co/pKh6K7Y/Mr-Arun-Patil-Kop2.webp",
    "https://i.ibb.co/gFVHXKL/Mr-Mrs-Deepali-Joshi-Ambavane-Kop.webp" ,
    "https://i.ibb.co/NNCFkNb/Mr-L-M-Kumbhar-Kop2.webp" ,
    "https://i.ibb.co/MsBLYCc/Mr-Amit-Chavan-01.webp" ,
    "https://i.ibb.co/t3sxR5T/Shree-Mouni-Maharaj-Math-Patgaon1.webp" ,
    "https://i.ibb.co/Q64YHSg/Mr-Rohan-Kadam-2.webp" ,
 ];

 const projectImages =[
"https://i.ibb.co/R3wrxmg/Mr-Mrs-Deepali-Joshi-Ambavane-Kop.webp" ,
"https://i.ibb.co/XsZJJ2n/Mr-Amit-Chavan-01.webp",
"https://i.ibb.co/WgZ9bn4/Mr-Amit-Chavan-02.webp" ,
"https://i.ibb.co/3Npmjmx/Mr-Arun-Patil-Kop1.webp" ,
"https://i.ibb.co/WnQzKHR/Mr-Arun-Patil-Kop2.webp",
"https://i.ibb.co/4MKPHmz/Mr-Arun-Patil-Kop3.webp" ,
"https://i.ibb.co/nnjvtJV/Mr-Chetan-Desai.webp" ,
"https://i.ibb.co/s20v88r/Mr-Ganesh-Sawant-Bhor-Pune.webp",
"https://i.ibb.co/kQzXsbY/Mr-L-M-Kumbhar-Kop1.webp" ,
"https://i.ibb.co/ZJmht0s/Mr-L-M-Kumbhar-Kop2.webp",
"https://i.ibb.co/GHg6Vmd/Mr-Rohan-Kadam-1-jpeg.webp" ,
"https://i.ibb.co/DfWrXg0/Mr-Rohan-Kadam-2-jpeg.webp",
"https://i.ibb.co/hLF4LNX/Mr-Rohan-Kadam-3-jpeg.webp" ,
"https://i.ibb.co/DzcPCfV/Mr-Rohan-Kadam-4.webp" ,
"https://i.ibb.co/yqZNpFJ/Mr-Sanjay-Sawant-Kudal-Sindhudurg01.webp" ,
"https://i.ibb.co/0DVcpNP/Mr-Sanjay-Sawant-Kudal-Sindhudurg2.webp" ,
"https://i.ibb.co/QJH7kqX/Mr-Sarjoshi-Achara-Malvan1.webp",
"https://i.ibb.co/Z6PypnH/Mr-Sarjoshi-Achara-Malvan2.webp",
"https://i.ibb.co/zH2XpN8/Mr-Vikas-Mane-Islampur1.webp",
"https://i.ibb.co/pdC1DJr/Mr-Vikas-Mane-Islampur2.webp" ,
"https://i.ibb.co/KzGdxTQ/Ray-Associates-Kop.webp" ,
"https://i.ibb.co/42QBSFP/Shree-Mouni-Maharaj-Math-Patgaon1.webp" ,
"https://i.ibb.co/m8ft40R/Shree-Mouni-Maharaj-Math-Patgaon2.webp",
 ];


 const architecturalProjects = [
    {
        id:"01",
        title:"Project for Deepali Joshi",
        location:"Kolhapur",
        imageLink:"https://i.ibb.co/R3wrxmg/Mr-Mrs-Deepali-Joshi-Ambavane-Kop.webp"
    },
    {
        id:"02",
        title:"Project for Mr. Amit Chavan",
        location:"-",
        imageLink:"https://i.ibb.co/XsZJJ2n/Mr-Amit-Chavan-01.webp"
    },
    {
        id:"03",
        title:"Project for Mr. Arun Patil",
        location:"Kolhapur",
        imageLink:"https://i.ibb.co/3Npmjmx/Mr-Arun-Patil-Kop2.webp"
    },
    {
        id:"04",
        title:"Project for Mr. Ganesh Sawant",
        location:"Bhar, Pune",
        imageLink:"https://i.ibb.co/s20v88r/Mr-Ganesh-Sawant-Bhor-Pune.webp"
    },
    {
        id:"05",
        title:"Project for Mr. L M Kumbhar",
        location:"Kolhapur",
        imageLink:"https://i.ibb.co/kQzXsbY/Mr-L-M-Kumbhar-Kop1.webp"
    },
    {
        id:"06",
        title:"Project for Mr. Sanjay Sawant",
        location:"kudal, Sindhudurg",
        imageLink:"https://i.ibb.co/yqZNpFJ/Mr-Sanjay-Sawant-Kudal-Sindhudurg01.webp" 
    }, 
    {
        id:"07",
        title:"Project for Mr. Sarjoshi",
        location:"Achara, Malvan",
        imageLink:"https://i.ibb.co/QJH7kqX/Mr-Sarjoshi-Achara-Malvan1.webp",
    },
    {
        id:"08",
        title:"Project for Mr. Vikas Mane",
        location:"Islampur",
        imageLink:"https://i.ibb.co/zH2XpN8/Mr-Vikas-Mane-Islampur1.webp"
    },{
        id:"09",
        title:"Shree Mouni Maharaj Math",
        location:"Patgaon",
        imageLink:"https://i.ibb.co/42QBSFP/Shree-Mouni-Maharaj-Math-Patgaon1.webp"
    }
 ]

 const interiorDesignProjects = [
    {
        id:"11",
        title:"Project for Mr. Rohan Kadam",
        location:"-",
        imageLink:"https://i.ibb.co/GHg6Vmd/Mr-Rohan-Kadam-1-jpeg.webp"
    },
 ]

 export {photos, projectImages, architecturalProjects};