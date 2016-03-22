-- tables
-- Table Access
CREATE TABLE Access (
    Username varchar(25)  NOT NULL,
    DiagramID int  NOT NULL,
    AccessLevel varchar(25)  NOT NULL,
    CONSTRAINT Access_pk PRIMARY KEY (Username,DiagramID)
);

-- Table Arrows
CREATE TABLE Arrows (
    ArrowID int  NOT NULL auto_increment,
    NoteID1 int  NOT NULL,
    NoteID2 int  NOT NULL,
    DiagramID int  NOT NULL,
    Thickness int  NOT NULL,
    Color varchar(25)  NOT NULL,
    CONSTRAINT Arrows_pk PRIMARY KEY (ArrowID)
);

-- Table Diagram
CREATE TABLE Diagram (
    DiagramID int  NOT NULL auto_increment,
    Username varchar(25)  NOT NULL,
    Name varchar(50)  NOT NULL,
    DateCreated date  NOT NULL,
    PrivacyLevel bool  NOT NULL,
    CONSTRAINT Diagram_pk PRIMARY KEY (DiagramID)
);

-- Table Friends
CREATE TABLE Friends (
    Username varchar(25)  NOT NULL,
    FriendsWith varchar(25)  NOT NULL,
    FriendshipBegan date  NOT NULL,
    CONSTRAINT Friends_pk PRIMARY KEY (Username,FriendsWith)
);

-- Table Note
CREATE TABLE Note (
    NoteID int  NOT NULL auto_increment,
    Shape varchar(25)  NOT NULL,
    XPos int  NOT NULL,
    YPos int  NOT NULL,
    Height int  NOT NULL,
    Width int  NOT NULL,
    Font varchar(200)  NOT NULL,
    Content varchar(1000)  NOT NULL,
    DiagramID int  NOT NULL,
    CONSTRAINT Note_pk PRIMARY KEY (NoteID)
);

-- Table Users
CREATE TABLE Users (
    Username varchar(25)  NOT NULL,
    FirstName varchar(25)  NOT NULL,
    LastName varchar(25)  NOT NULL,
    Email varchar(50)  NOT NULL,
    Password varchar(255)  NOT NULL,
    Salt varchar(255)  NOT NULL,
    DateCreated date  NOT NULL,
    CONSTRAINT Users_pk PRIMARY KEY (Username)
);
