export const users = [
  {
      id: 1, 
      name: "John", 
      email: "",
      password: "1234",
      roles:[
        {
            id:2,
            name:"user"
        },
        {
            id:1,
            name:"admin"
        },

      ] 
    },
      {
      id: 2, 
      name: "Eve", 
      email: "",
      password: "1234",
      roles:[
        {
            id:2,
            name:"user"
        }
      ]
  },
  {
      id: 3, 
      name: "Charlie", 
      email: "",
      password: "1234",
      roles:[
        {
            id:2,
            name:"user"
        }
      ]
  },
    { 
      id: 4, 
       name: "Alice", 
       email: "alice@mail.com" ,
       password: "1234",
                roles:[
                  {
                      id:1,
                      name:"admin"
                  },
                  {
                      id:2,
                      name:"user"
                  }
                ]
      
     },
     {
     id: 5, name: "Bob", email: "bob@mail.com",  password: "1234",
     roles:[
       {
          id:2,
          name:"user"
       }
      ]     
     
    }
];


