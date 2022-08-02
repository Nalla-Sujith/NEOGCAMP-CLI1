var read=require('readline-sync')
console.log("Hello Let's see how much do you know about our country!!\n")
var score=0
var questions=[
  {
    question:"What is the capital of India ?",
    options:["a.Delhi","b.Bangalore","c.Hyderabad"],
    answer:"a"
  },
  {
    question:"What is our national language",
    options:["a.Sanskrit","b.Tamil","c.Hindi"],
    answer:"c"
  },
  {
    question:"What is called as Father of Our Nation ? ",
    options:["a.Subhash Chandra Bose","b.Mohandas Gandhi","c.Jawaharlal Nehru"],
    answer:"b"
  },
  {
    question:"In Which year did we get our independence ? ",
    options:["a.1948","b.1946","c.1947"],
    answer:"c"
  }

]
function check(question,answer,options)
{
   var ans=""
   for(var i=0;i<options.length;i++)
     ans+=options[i]+"\n"
   var userinput=read.question(question+"\n"+ans)
    if(userinput === answer)
    {
       score++;
       console.log("Yay ! You're correct")
       console.log("--------------")
    }
    else
    {
         console.log("No You're Wrong")
         console.log("--------------")
    }
}
  for(var i=0;i<questions.length;i++)
  {
    check(questions[i].question,questions[i].answer,questions[i].options);
  }
console.log("You Scored Score: "+score+" /"+questions.length)