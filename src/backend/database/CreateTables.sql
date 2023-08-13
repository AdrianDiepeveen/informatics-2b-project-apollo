/* 1 = true, 0 = false */
/* clustered and ascending can be removed*/

/*User*/
CREATE TABLE [dbo].[User] (
    [User_ID]       INT           IDENTITY (1, 1) NOT NULL,
    [User_Name]     VARCHAR (50)  NOT NULL,
    [User_Surname]  VARCHAR (50)  NOT NULL,
    [User_Password] VARCHAR (100) NOT NULL,
    [User_Email]    VARCHAR (50)  NOT NULL,
    [User_Address]  VARCHAR (50)  NOT NULL,
    [User_DOB]      DATE          NOT NULL,
    [User_PhoneNum] VARCHAR (10)  NOT NULL,
    [Administrator] BIT           NOT NULL, 
    PRIMARY KEY CLUSTERED ([User_ID] ASC)
);

/*Subscription*/
CREATE TABLE [dbo].[Subscription] (
    [Sub_ID]        INT   IDENTITY (1, 1) NOT NULL,
    [Sub_Duration]  INT   NOT NULL, /*In Months*/
    [Monthly_Price] MONEY NOT NULL,
    PRIMARY KEY CLUSTERED ([Sub_ID] ASC)
);

/*User Subscriptions*/
CREATE TABLE [dbo].[User_Subs] (
    [User_Sub_ID] INT  IDENTITY (1, 1) NOT NULL,
    [Sub_Date]    DATE NOT NULL,
    [Active]      BIT  DEFAULT ((1)) NOT NULL,
    [User_ID]     INT  NOT NULL,
    [Sub_ID]      INT  NOT NULL,
    PRIMARY KEY CLUSTERED ([User_Sub_ID] ASC),
    FOREIGN KEY ([User_ID]) REFERENCES [dbo].[User] ([User_ID]),
    FOREIGN KEY ([Sub_ID]) REFERENCES [dbo].[Subscription] ([Sub_ID])
);

/*Subscription Receipt*/
CREATE TABLE [dbo].[SubReceipt] (
    [Sub_Pay_ID]   INT   IDENTITY (1, 1) NOT NULL,
    [Payment_Date] DATE  NOT NULL,
    [Price]        MONEY NOT NULL,
    [User_Sub_ID]  INT   NOT NULL,
    PRIMARY KEY CLUSTERED ([Sub_Pay_ID] ASC),
    FOREIGN KEY ([User_Sub_ID]) REFERENCES [dbo].[User_Subs] ([User_Sub_ID])
);

/*Product*/
CREATE TABLE [dbo].[Product] (
    [Prod_ID]    INT          IDENTITY (1, 1) NOT NULL,
    [Prod_Name]  VARCHAR (50) NOT NULL,
    [Prod_Price] MONEY        NOT NULL,
    [Prod_Stock] INT          NOT NULL,
    PRIMARY KEY CLUSTERED ([Prod_ID] ASC)
);

/*Shipment*/
CREATE TABLE [dbo].[Shipment] (
    [Shipment_ID] INT          IDENTITY (1, 1) NOT NULL,
    [Ship_Date]   DATE         NOT NULL,
    [Address]     VARCHAR (50) NOT NULL,
    [City]        VARCHAR (50) NOT NULL,
    [Province]    VARCHAR (50) NOT NULL,
    [Country]     VARCHAR (50) NOT NULL,
    [Zip_Code]    VARCHAR (50) NOT NULL,
    [User_ID]     INT          NOT NULL,
    PRIMARY KEY CLUSTERED ([Shipment_ID] ASC),
    FOREIGN KEY ([User_ID]) REFERENCES [dbo].[User] ([User_ID])
);

/*Cart*/
CREATE TABLE [dbo].[Cart] (
    [Cart_ID]  INT IDENTITY (1, 1) NOT NULL,
    [User_ID]  INT NOT NULL,
    [Quantity] INT NOT NULL,
    [Prod_ID]  INT NOT NULL,
    PRIMARY KEY CLUSTERED ([Cart_ID] ASC, [User_ID] ASC),
    FOREIGN KEY ([User_ID]) REFERENCES [dbo].[User] ([User_ID]),
    FOREIGN KEY ([Prod_ID]) REFERENCES [dbo].[Product] ([Prod_ID])
);

/*Order*/
CREATE TABLE [dbo].[Order] (
    [Order_ID]    INT   IDENTITY (1, 1) NOT NULL,
    [Order_Date]  DATE  NOT NULL,
    [Total_Price] MONEY NOT NULL,
    [User_ID]     INT   NOT NULL,
    [Shipment_ID] INT   NOT NULL,
    PRIMARY KEY CLUSTERED ([Order_ID] ASC),
    FOREIGN KEY ([User_ID]) REFERENCES [dbo].[User] ([User_ID]),
    FOREIGN KEY ([Shipment_ID]) REFERENCES [dbo].[Shipment] ([Shipment_ID])
);

/*Items in Order*/
CREATE TABLE [dbo].[OrderItem] (
    [Order_Item_ID] INT   IDENTITY (1, 1) NOT NULL,
    [Price]         MONEY NOT NULL,
    [Quantity]      INT   NOT NULL,
    [Prod_ID]       INT   NOT NULL,
    [Order_ID]      INT   NOT NULL,
    PRIMARY KEY CLUSTERED ([Order_Item_ID] ASC),
    FOREIGN KEY ([Prod_ID]) REFERENCES [dbo].[Product] ([Prod_ID]),
    FOREIGN KEY ([Order_ID]) REFERENCES [dbo].[Order] ([Order_ID])
);

/*User Metrix*/
CREATE TABLE [dbo].[UserMetrix] (
    [UserMetrix_ID] INT IDENTITY (1, 1) NOT NULL,
    [User_ID]       INT NOT NULL,
    [Heart_Rate]    BIT NOT NULL,
    [Sleep]         BIT NOT NULL,
    PRIMARY KEY CLUSTERED ([UserMetrix_ID] ASC),
    UNIQUE NONCLUSTERED ([User_ID] ASC),
    FOREIGN KEY ([User_ID]) REFERENCES [dbo].[User] ([User_ID])
);

/*Sleep Data STILL IN PROGRESS*/
CREATE TABLE [dbo].[Sleep] (
    [ID]            INT      IDENTITY (1, 1) NOT NULL,
    [UserMetrix_ID] INT      NOT NULL,
    [Track_Time]    DATETIME NOT NULL,
    PRIMARY KEY CLUSTERED ([ID] ASC),
    FOREIGN KEY ([UserMetrix_ID]) REFERENCES [dbo].[UserMetrix] ([UserMetrix_ID])
);

/*Heart-Rate Data STILL IN PROGRESS*/
CREATE TABLE [dbo].[Heart_Rate] (
    [ID]            INT      IDENTITY (1, 1) NOT NULL,
    [UserMetrix_ID] INT      NOT NULL,
    [Track_Time]    DATETIME NOT NULL,
    PRIMARY KEY CLUSTERED ([ID] ASC),
    FOREIGN KEY ([UserMetrix_ID]) REFERENCES [dbo].[UserMetrix] ([UserMetrix_ID])
);