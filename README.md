POLLING SYSTEM API


In this API you can create questions as many as you want.
for practice run u can download the zip file.
run npm install in terminal
hit npm start

it will run on
[](http://localhost:3000)

open postman and start using API to create questionsand options and also u can vote to the questions as well and you ca delete the  questions and options  using this project


To create questions ->use(POST REQUEST) [http://localhost:3000/questions/create](http://localhost:3000/questions/create) u have to write question in body-> raw ->JSON format
To create options ->(POST REQUEST) [http://localhost:3000/questions/:id/options/create](http://localhost:3000/questions/:id/options/create) get the id of a question where you want hte options to be created and create options using body->raw->JSON format
To get questions ->(GET REQUEST) [http://localhost:3000/questions/:id](http://localhost:3000/questions/:id) get the id of question and hit send it will get the question with provided options
To delete questions->(DELETE REQUEST) [http://localhost:3000/questions/:id/delete](http://localhost:3000/questions/:id/delete) get the id of question and hit send it will delete the question with the options
to Vote the option->(GET REQUEST) [http://localhost:3000/options/:id/add_vote](http://localhost:3000/options/:id/add_vote ) link will be provided to questions when you click the link of particular option it will add vote to the option once you add the vote u canot delete the option
to Delete options->(GET REQUEST)[http://localhost:3000/options/:id/delete](http://localhost:3000/options/:id/delete ) (note:u cannot delete an option if vote is added to it)


