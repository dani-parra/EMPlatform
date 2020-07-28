use EMPlatform_dev;

/** parameretized table to set the city main data */
create table City(
    id int(5),
    value varchar(30),
    
    PRIMARY KEY(id)
);

/** parameretized table to set the country main data */
create table Country(
    id int(3),
    value varchar(30),
    
    PRIMARY KEY(id)
);

/** specify the user role (saler, buyer, admin, simpleUser) */
create table Role(
    id varchar(2),
    roleName varchar(20),

    PRIMARY KEY(id)
);

/** main info about the users */
create table EMUser(
    userId varchar(50) NOT NULL,
    identification varchar(30) NOT NULL,
    identificationType char(2) NOT NULL,
    name varchar(50) NOT NULL,
    lastName varchar(50) NOT NULL,
    cityId int(5) NOT NULL,
    countryId int(3) NOT NULL,
    userNumber varchar(15) NOT NULL,
    userType varchar(10),               /*<<-------------------------------- TO CONTROL BY USING ENUM*/
    
    PRIMARY KEY(userId),
    FOREIGN KEY(cityId)
    REFERENCES City(id),
    FOREIGN KEY(countryId)
    REFERENCES Country(id)
);

/** data about the way that the users access to the platform */
create table Account(
    accountId varchar(50) NOT NULL,
    userId varchar(50) NOT NULL,
    email varchar(50) NOT NULL,
    password varchar(100) NOT NULL,
    nickName varchar(30) NOT NULL,
    accountStatus binary,
    
    PRIMARY KEY(accountId),
    FOREIGN KEY(userId)
    REFERENCES EMUser(userId)
);

/** parameretized table to set the product main data */
create table Product(
    productId int(3),
    description varchar(30),
    
    PRIMARY KEY (productId)
);

/**  one of the core tables to save the platform sales data */
create table Sale(
    saleId varchar(40) NOT NULL,
    productId int(2),
    amount varchar(5), 
    sellerId varchar(50) NOT NULL,
    buyerId varchar(50) NOT NULL,
    saleDate date,
    
    PRIMARY KEY (saleId),
    FOREIGN KEY(productId)
    REFERENCES Product(productId),
    FOREIGN KEY(sellerId)
    REFERENCES EMUser(userId),
    FOREIGN KEY(buyerId)
    REFERENCES EMUser(userId)
    
);

/** table designed to create wich materials are used to make the extrusion process */
create table Material(
	materialId int(2) NOT NULL,
    description varchar(30),
    
    PRIMARY KEY(materialId)
);

/** table designed to create data about a working day */
create table Extrusion(
    id varchar(10) NOT NULL,
    extrusionDate date,
    
    PRIMARY KEY(id)
);

/** table designed to create the amount of product made with the extrusion process in a day */
create table PlasticRoll(
    id varchar(50) NOT NULL,
    weight varchar(5),
    inches varchar(2),
    startDate date,
    endDate date,
    extrusionId varchar(10),
    
    PRIMARY KEY(id),
    FOREIGN KEY(extrusionId)
    REFERENCES Extrusion(id)
);

/** table designed to create data about the clients related with the platform */
create table EMClient(
    clientId varchar(30) NOT NULL,
    address varchar(60),
    clientNumber varchar(15),
    name varchar(30),
    owners varchar(60),
    
    PRIMARY KEY(clientId)
);


-- ********************************* STEP 2 ******************************
/** table designed to specify the materials used in a specific plastic-roll */
create table Roll_Material(
	id varchar(30),
	rollId varchar(50),
    materialId int(2),
	quantity int(5),
    measure varchar(2),
    
    PRIMARY KEY(id),
    FOREIGN KEY(rollId)
    REFERENCES PlasticRoll(id),
	FOREIGN KEY(materialId)
    REFERENCES Material(materialId)
);

/** table designed to save the relation between a user and a client */
create table Client_User_Owner(
	id varchar(30),
	clientId varchar(30),
    userId varchar(50),
    
    PRIMARY KEY(id),
	FOREIGN KEY(clientId)
    REFERENCES EMClient(clientId),
	FOREIGN KEY(userId)
    REFERENCES EMUser(userId)
);


