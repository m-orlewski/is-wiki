DROP TABLE projekt.register;
DROP TABLE projekt.token;
DROP SCHEMA projekt;

CREATE SCHEMA projekt;

CREATE TABLE projekt.register(
  register_id SERIAL,
  CONSTRAINT register_pk PRIMARY KEY (register_id),
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  indexNumber INTEGER,
  email VARCHAR(255),
  password VARCHAR(255),
  roles jsonb
);

CREATE TABLE projekt.token (
  register_id INTEGER NOT NULL,
  CONSTRAINT token_pk PRIMARY KEY (register_id),
  token VARCHAR(255)
);

INSERT INTO projekt.register (firstName,lastName,indexNumber,email,password,roles) VALUES('a','a',1,'a','$2b$10$pp1X08BkBhZCcBMF8KBaW.NvsVwXFNeUbWz560BM1LVHnSlYK/q8i','{"Admin": 5150,"Editor": 1984,"User": 2001}');

INSERT INTO projekt.register (firstName,lastName,indexNumber,email,password,roles) VALUES('b','b',1,'b','$2b$10$pp1X08BkBhZCcBMF8KBaW.NvsVwXFNeUbWz560BM1LVHnSlYK/q8i','{"Admin": 5150,"Editor": 1984,"User": 2001}');

INSERT INTO projekt.register (firstName,lastName,indexNumber,email,password,roles) VALUES('c','c',1,'c','$2b$10$pp1X08BkBhZCcBMF8KBaW.NvsVwXFNeUbWz560BM1LVHnSlYK/q8i','{"Admin": 5150,"Editor": 1984,"User": 2001}');

INSERT INTO projekt.register (firstName,lastName,indexNumber,email,password,roles) VALUES('d','d',1,'d','$2b$10$pp1X08BkBhZCcBMF8KBaW.NvsVwXFNeUbWz560BM1LVHnSlYK/q8i','{"Admin": 5150,"Editor": 1984,"User": 2001}');