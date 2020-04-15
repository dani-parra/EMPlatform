use EMPlatform_dev;

create table City(
    id int(5),
    value varchar(30),
    
    PRIMARY KEY(id)
);

create table Country(
    id int(3),
    value varchar(30),
    
    PRIMARY KEY(id)
);

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

create table Product(
    productId int(3),
    description varchar(30),
    
    PRIMARY KEY (productId)
);

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

create table Material(
	materialId int(2) NOT NULL,
    description varchar(30),
    
    PRIMARY KEY(materialId)
);

create table Extrusion(
    id varchar(10) NOT NULL,
    extrusionDate date,
    
    PRIMARY KEY(id)
);

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

create table EMClient(
    clientId varchar(30) NOT NULL,
    address varchar(60),
    clientNumber varchar(15),
    name varchar(30),
    owners varchar(60),
    
    PRIMARY KEY(clientId)
);


-- ********************************* STEP 2 ******************************
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


