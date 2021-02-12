DROP DATABASE IF EXISTS NikeSDC;
CREATE DATABASE NikeSDC;
USE NikeSDC;

CREATE TABLE Nike (
  shoe_id SERIAL PRIMARY KEY,
  shoe_name VARCHAR(100) NOT NULL,
  shoe_subname VARCHAR(100) NOT NULL,
  shoe_image VARCHAR(300) NOT NULL,
  shoe_price VARCHAR(20) NOT NULL
);

-- CREATE TABLE NikeSearch (
--   search_id SERIAL PRIMARY KEY,
--   search_field VARCHAR(200) NOT NULL,
--   shoe_id INT NOT NULL,
--   CONSTRAINT fk_search
--     FOREIGN KEY (shoe_id)
--       REFERENCES Nike(shoe_id)
-- );

COPY Nike(shoe_name, shoe_subname, shoe_image, shoe_price)
FROM '/Users/jasonle/Desktop/header--Matthew/db/testfile.csv'
DELIMITER ','
CSV HEADER;

SELECT (to_tsvector(shoe_name) || to_tsvector(shoe_subname)) AS document
FROM Nike LIMIT 50;

Select * from Nike where shoe_name like '%' or shoe_subname like '%' limit 5

Select * from Nike where (shoe_name||shoe_subname) like '%sho%' limit 5

CREATE EXTENSION pg_trgm;
CREATE INDEX Name_Subname_On_Nike ON Nike USING GIN((shoe_name||shoe_subname) gin_trgm_ops);

scp -i "JasonNikeInstance.pem" /Users/jasonle/Desktop/header--Matthew/db/testfile.csv ec2-user@ec2-3-22-98-41.us-east-2.compute.amazonaws.com:/home/ec2-user
/var/lib/pgsql/12/data/postgresql.conf
/var/lib/pgsql/12/data/pg_hba.conf

sudo systemctl start postgresql-12
sudo systemctl stop postgresql-12
systemctl status postgresql-12

chmod 755 /home/ec2-user
allow read write privileges

COPY Nike(shoe_name, shoe_subname, shoe_image, shoe_price)
FROM '/home/ec2-user/testfile.csv'
DELIMITER ','
CSV HEADER;

npm http compression
minifying/npm mollify

`Select * from Nike where (shoe_name||shoe_subname) like '%soc%' order by random() limit 5`