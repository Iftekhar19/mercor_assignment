
const boards=[
    {
      id:Date.now()+Math.random()*2,
      heading:"To Do",
      dotColor:"blue",
      borderColor:"#800080",
      extra:true,
      cards:[
        {
          id:Date.now()+Math.random()*2,
          label:{text:"Low",color:"#D58D49",bgColor:"rgba(223, 168, 116, 0.2)"},
          title:"Brainstorming",
          description:"Brainstorming brings team members' diverse experience into play.",
          avatar:[
            "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
            "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
            "https://flowbite.com/docs/images/people/profile-picture-3.jpg"
          ],
          commentsCount:10,
          filesCount:2,  
        },
        {
          id:Date.now()+Math.random()*2,
          label:{text:"High",color:"#D8727D",bgColor:"rgba(216, 114, 125, 0.1)"},
          title:"Research",
          description:"User research helps you to create an optimal product for users.",
          avatar:[
            "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
            "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
            
          ],
          commentsCount:12,
          filesCount:3,  
        },
        {
          id:Date.now()+Math.random()*2,
          label:{text:"High",color:"#D8727D",bgColor:"rgba(216, 114, 125, 0.1)"},
          title:"Wireframes",
          description:"Low fidelity wireframes include the most basic content and visuals.",
          avatar:[
            "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
            
          ],
          commentsCount:4,
          filesCount:2,  
        },
        {
          id:Date.now()+Math.random()*2,
          label:{text:"Completed",color:"#83C29D",bgColor:"#ccfde0b2"},
          title:"Design System",
          description:"It just needs to adapt the UI from what you did before ",
          avatar:[
            "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
            "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
            
          ],
          commentsCount:13,
          filesCount:6,  
        },
      ] 
    },
    {
      id:Date.now()+Math.random()*2,
      heading:"On Progress",
      dotColor:"#FFA500",
      borderColor:"#FFA500",
      extra:false,
      cards:[
        {
          id:Date.now()+Math.random()*2,
          label:{text:"Low",color:"#D58D49",bgColor:"rgba(223, 168, 116, 0.2)"},
          title:"Brainstorming",
          description:"Brainstorming brings team members' diverse experience into play.",
          avatar:[
            "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
            "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
           
          ],
          commentsCount:10,
          filesCount:2,  
        },
     
      ] 
    },
    {
      id:Date.now()+Math.random()*2,
      heading:"Completed",
      dotColor:"#76A5EA",
      borderColor:"#8BC48A",
      extra:false,
      cards:[
        {
          id:Date.now()+Math.random()*2,
          label:{text:"Low",color:"#D58D49",bgColor:"rgba(223, 168, 116, 0.2)"},
          title:"Brainstorming",
          description:"Brainstorming brings team members' diverse experience into play.",
          avatar:[
            "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
            
          ],
          commentsCount:10,
          filesCount:2,  
        },
     
      ] 
    },
    
];
export {boards}