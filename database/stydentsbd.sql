	CREATE DATABASE stydentsbd;
    USE stydentsbd;
    CREATE table students
    (
	Id INT Not null AUTO_INCREMENT  UNIQUE,
    FirstName varchar(20),
    LastName varchar(20),
    OneSubject int(2),
    RgrOne int(2),
    RgrTwo int(2),
    TwoSubject int(2),
    Kursach int(2),
    ThreeSubject int(2),
    FourSubject int(2),
    FiveSubject varchar(10),
    SixSubject varchar(10),
    SevenSubject varchar(10),
    EightSubject varchar(10),
    NineSubject varchar(10)
    );
    
