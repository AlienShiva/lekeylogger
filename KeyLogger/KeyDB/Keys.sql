CREATE TABLE [dbo].[Keys]
(
	[InstanceID] NVARCHAR(20) NOT NULL, 
    [SequenceNumber] INT NOT NULL,
    [Referer] NVARCHAR(256) NULL,  
    [KeyValue] NCHAR(1) NOT NULL, 
    CONSTRAINT [PK_Keys] PRIMARY KEY ([InstanceID], [SequenceNumber])

)
