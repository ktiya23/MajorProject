### Todo-Application

### Technologies used:- 

  1. HTML
  2. CSS
  3. JS

### Project Overview:

The challenge is to build a todo application, where one can add a todo, add todo in archive and restore the archived todo and delete, filter by priority and status. The application should consist of two main pages:

1. index.html (Landing Page for creating todo)
2. archive.html (for delete and filter archived todo)

Important Points

For filtering is done using in-build javascript filter method.

| Anchor TextContent | href Link                    |
| ------------------ | ---------------------------- |
| Home               | [index.html](index.html)     |
| Archive            | [archive.html](archive.html) |

1. index.html ( Landing Page)

- in this page there are two section one for creating a todo and 2nd one is a table to shoe the added todo dynamically.

- **add todo**

  - one input tag to take the todo name.
  - one select tag to take the priority level.with options `low`, `medium`,`high`.
  - one button with `id=addBtn` to add the todo to localStorage with the key name `todos`. If user click on the button without any text  in input tag a alert will shown with message `Todo cannot be empty!`.

  ```javascript
   structure of data to be stored (array of object)

   [
     {
      title: "example",
      priority: "low",
      status: "Pending🔃" // by default have another option "Completed✅"
     }
     
   ]

  ```
- **table**
   - In the table the todo information should shown as bellow

|    Name      |     Priority    |    Status      |     Delete    |    
| ------------ | --------------- | -------------- |   ----------- |

 


2. archive.html

- On load this page get the archive todos from local storage and show in the table as below format:-  

|     Name      |     Priority    |    Status      |    Restore   |      Delete      |
| ------------- | --------------- | -------------- | ------------ | --------------   |


- **_filter todos_**
- There are two select tags for filter todos according to `status` and `priority`.
   - select tag with `id=prioritySelect` for selecting the priority , When an option is selected, only todos corresponding to the chosen priority will be displayed on the page.
   - select tag with `id=statusSelect` for selecting the status , When an option is selected, only todos corresponding to the chosen status will be displayed on the page.




