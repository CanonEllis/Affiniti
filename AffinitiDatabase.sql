-- tables
-- Table access
CREATE TABLE access (
    username varchar(25)  NOT NULL,
    diagramID int  NOT NULL,
    accessLevel varchar(25)  NOT NULL,
    CONSTRAINT access_pk PRIMARY KEY (username,diagramID)
);

-- Table arrows
CREATE TABLE arrows (
    arrowID int  NOT NULL auto_increment,
    noteID1 int  NOT NULL,
    noteID2 int  NOT NULL,
    diagramID int  NOT NULL,
    thickness int  NOT NULL,
    color varchar(25)  NOT NULL,
    CONSTRAINT arrows_pk PRIMARY KEY (arrowID)
);

-- Table diagram
CREATE TABLE diagram (
    diagramID int  NOT NULL auto_increment,
    username varchar(25)  NOT NULL,
    name varchar(50)  NOT NULL,
    dateCreated date  NOT NULL,
    privacyLevel bool  NOT NULL,
    CONSTRAINT diagram_pk PRIMARY KEY (diagramID)
);

-- Table friends
CREATE TABLE friends (
    username varchar(25)  NOT NULL,
    friendsWith varchar(25)  NOT NULL,
    friendshipBegan date  NOT NULL,
    CONSTRAINT friends_pk PRIMARY KEY (username,friendsWith)
);

-- Table note
CREATE TABLE note (
    noteID int  NOT NULL auto_increment,
    shape varchar(25)  NOT NULL,
    xPos int  NOT NULL,
    yPos int  NOT NULL,
    height int  NOT NULL,
    width int  NOT NULL,
    font varchar(200)  NOT NULL,
    content varchar(1000)  NOT NULL,
    diagramID int  NOT NULL,
    CONSTRAINT note_pk PRIMARY KEY (noteID)
);

-- Table users
CREATE TABLE users (
    username varchar(25)  NOT NULL,
    firstname varchar(25)  NOT NULL,
    lastname varchar(25)  NOT NULL,
    email varchar(50)  NOT NULL,
    password varchar(255)  NOT NULL,
    dateCreated date  NOT NULL,
    verified bool NOT NULL,
    activationKey varchar(255) NOT NULL,
    CONSTRAINT users_pk PRIMARY KEY (username)
);
