# Day 6 - Master SQL for Web Developers

## Second and Third Normal Form 

- Key requirement of 2NF

It is in first normal form.
It does not have any non-prime attribute that is functionally dependent on any proper subset of any candidate key
of the relalon (i.e. it lacks partial dependencies). A non-prime attribute of a relation is an attribute that is not a part of any candidate key of the relation.

- everthing should make sense from the primary key 
- 

## Concept of JOIN and INNER JOIN

Join 

![Joins in sql](https://dk81.github.io/dkmathstats_site/images/sql-joins.jpg)
- inner join 
- left join 
- right join 
- outer join 

## LEFT , RIGHT , OUTER , and CROSS Joins Made Easy 

```sql
SELECT Students.name, Marks.marks
FROM Students
INNER JOIN Marks
ON Students.student_id = Marks.student_id;


SELECT Students.name, Marks.marks
FROM Students
FULL OUTER JOIN Marks
ON Students.student_id = Marks.student_id;



```

🔑 Key Difference (One-line)

INNER JOIN → only common data

LEFT JOIN → all left + common

RIGHT JOIN → all right + common

FULL JOIN → everything

