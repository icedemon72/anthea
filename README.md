# Anthea
An example of a web application for students and professors of Faculty of Natural Sciences in Kosovska Mitrovica which would've been hosted on our own web server.

Many features are missing but they were to be implemented in the coming semester. Some of the features that are missing are archive, adding/removing professors, archiving classrooms etc.
Basically, there 

# How to run?
`Client`
```
cd client
npm install
ng serve
```

`Server`
Some kind of an SQL Server needs to be running, also `.env.example` should be  renamed to `.env`
```
cd server
npm install
npx prisma migrate dev
npm start
```
