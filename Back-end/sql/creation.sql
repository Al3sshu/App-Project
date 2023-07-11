DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS style;


CREATE EXTENSION IF NOT EXISTS "uuid-ossp";




CREATE TABLE IF NOT EXISTS users(
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL ,
    password TEXT NOT NULL,
    registration_day timestamp not null default current_timestamp
);

CREATE TABLE IF NOT EXISTS style(
    id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
    season TEXT NOT NULL UNIQUE,
    place TEXT NOT NULL,
    hobbies TEXT NOT NULL, 
    hair TEXT NOT NULL, 
    color TEXT NOT NULL,
    eyes TEXT NOT NULL, 
    skin_tone TEXT NOT NULL,
    cold_colors TEXT NOT NULL, 
    warm_colors TEXT NOT NULL,
    response TEXT NOT NULL
);



