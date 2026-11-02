const questions=[
    {
        question:"which is largest animal in the world?",
        answers:[
            {Text:"shark",correct:false},
            {Text:"elephant",correct:true},
            {Text:"giraffe",correct:false},
              {Text:"blue whale",correct:false},

            
        ]
    },
    {
         question:"which is  bird egg is largest  in the world?",
        answers:[
            {Text:"shark",correct:false},
            {Text:"ostrich",correct:true},
            {Text:"giraffe",correct:false},
              {Text:"blue whale",correct:false},

            
        ]
    },
    {

     question:"which is the smallest continent in the world?",
        answers:[
            {Text:"Asia",correct:false},
            {Text:"Austrialia",correct:true},
            {Text:"Afrrica",correct:false},
              {Text:"America",correct:false},

            
        ]
    },
    {
     question:"which is largest desert in the world?",
        answers:[
            {Text:"kalahri",correct:false},
            {Text:"gobi",correct:false},
            {Text:"giraffe",correct:false},
              {Text:"sahara",correct:true},

            
        ]
    },
    {
     question:"which is  goa in the world?",
        answers:[
            {Text:"india",correct:true},
            {Text:"Austrialia",correct:false},
            {Text:"Afrrica",correct:false},
              {Text:"America",correct:false},

            
        ]
    }

    
];
const questionElement = document.getElementById("question");
const questionsElement = document.getElementById("answer-button");
const questionssElement = document.getElementById("next-btn");
 

let curr