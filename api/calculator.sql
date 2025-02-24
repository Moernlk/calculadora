USE calculator;
/*

create table RESULT (
  ResultId  INT PRIMARY KEY IDENTITY(1,1),
  Result    VARCHAR(25),
  );

create table EQUACOES (
  EquacaoId  INT PRIMARY KEY IDENTITY(1,1),
  Equacao    VARCHAR(25),
  Dia        DATETIME,
  ResultId   INT,
  FOREIGN KEY (ResultId) REFERENCES Result(ResultId)   
);

-- Insert into the RESULT table
INSERT INTO RESULT (result)
VALUES
  ('Equation 1 result'),   -- First record for Result
  ('Equation 2 result'),   -- Second record for Result
  ('Equation 3 result');   -- Third record for Result

-- Insert into the EQUACOES table
INSERT INTO EQUACOES (Equacao, Dia, ResultId)
VALUES
  ('x^2+y^2=1', GETDATE(), 1),  -- First record, linking ResultId 1
  ('a^2+b^2=c^2', GETDATE(), 2),  -- Second record, linking ResultId 2
  ('E=mc^2', GETDATE(), 3);         -- Third record, linking ResultId 3     -- Third record references ResultId 3


*/