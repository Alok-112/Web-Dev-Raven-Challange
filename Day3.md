# Day 3 - Master SQL for Web Developers




## SQL Extension for VSCode

[MYSQL Extension](https://marketplace.visualstudio.com/items?itemName=cweijan.vscode-mysql-client2)

## Complete Crash Course on CRUD Operation

```sql
\! cls

show databases;
use database_name;
show tables;
select * from table_name;
select * from table_name where prop="prop";
update chai_store set price = 38.00, available = TRUE  where chai_name ="Iced Tea";
update table_name set prop="prop" ,prop1="prop1" where prop_main="prop_main"
delete from table_name where prop_name ="prop_name";
```


## Entity Relationship in depth 

LMS Design 

eraser (erd diagram)
- copy the code in earser.io to see 

```sql
user[icon:user]{

    _id string pk 
    name string 
    email string unique
    password string 
    userType enum "student","instructor","admin"
    isPaid boolean
    enrolledCourses ObjectId[] courses
    createdAt Date
    updatedAt Date 
}

courses[icon:book]{

    _id string pk 
    title string 
    description string 
    price number 
    instructorId ObjectId[] user
    category string
    tags string[]
    durationInHours number
    videos ObjectId[] videos
    createdAt Date
    updatedAt Date 
}

videos[icon:video]{
     _id string pk 
     courseId ObjectId courses
     title string 
     description string 
     url string 
     durationInMinutes number 
    createdAt Date
    updatedAt Date 
}

enrollnment[icons:user]{
    _id string pk 
    userId ObjectId users
    courseId ObjectId courses
    enrollnmentDate Date 
    progress number 

    completedAt Date 

}


users._id < enrollnment.userId
enrollnment.userId > users._id
courses._id < enrollments.courseId
enrollments.courseId > courses._id
courses._ id < videos.courseId
videos.courseId > courses._id
users._id < courses.instructorId
courses.instructorId > users._ id


# Relationships in SQL 
1. one to one 
2. one to many 
3. many to many 

```


- this will help us in making any product 
- first design the er diagram 
- then we can make models 
- then backend and then frontend etc 


