USE calculator;


 -- Tabela para arquivamento de resultados
create table RESULT (
  ResultId  INT PRIMARY KEY IDENTITY(1,1),
  Result    VARCHAR(25),
  );

 -- Tabela para arquivamento de equações
create table EQUACOES (
  EquacaoId  INT PRIMARY KEY IDENTITY(1,1),
  Equacao    VARCHAR(25),
  Dia        DATETIME,
  ResultId   INT,
  FOREIGN KEY (ResultId) REFERENCES Result(ResultId)   
);

 -- Inserindo informações/fileiras
INSERT INTO RESULT (result)
VALUES
  ('2'),   
  ('50'),   
  ('1250');   

INSERT INTO EQUACOES (Equacao, Dia, ResultId)
VALUES
  ('50+50/50+1-1', GETDATE(), 1),  
  ('25+25x2/2', GETDATE(), 2), 
  ('125x10', GETDATE(), 3);         

/* 
eu poderia criar uma unica tabela para os dados mas a
intenção é o estudo, então estou aumentando a complexidade
*/
