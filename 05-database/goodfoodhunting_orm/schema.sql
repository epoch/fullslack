CREATE TABLE dishes(
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(400) NOT NULL,
  image_url TEXT
);

CREATE TABLE dish_types (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(200) NOT NULL
);

CREATE TABLE users (
  id SERIAL4 PRIMARY KEY,
  email VARCHAR(400) NOT NULL,
  password_digest VARCHAR(400) NOT NULL
);

CREATE TABLE comments (
  id SERIAL4 PRIMARY KEY,
  body TEXT, 
  dish_id INTEGER
);

