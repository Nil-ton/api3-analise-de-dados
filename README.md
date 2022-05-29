Atividade: Manipulação de Dados

Tratamentos realizados:
Total de casos/Estado ou geral;
Total de suspeitas/Estado ou geral;
Total de óbitos/Estado ou geral;
Casos/mês;
	Suspeitas/mês;
	Óbitos/mês;

Motivos: Para observar o andamento de casos, suspeitas e morte por covid-19 ao longo do ano de 2022.

Como foi obtida a base de dados e o seu tratamento: 
	Primeiramente, procurei por uma API de fácil acesso e gratuita para obter os dados de todos os meses de 2022 sobre covid-19. Ao escolher a API, utilizei o node para criar a base de dados em um arquivo xlsx (código apresentado no anexo). E assim filtrei os dados no dashboard apresentado no Excel onde consegue-se visualizar número de casos, suspeitas e mortes registradas ao longo de 2022.

 
Para atualizar a base de dados: 
rodar o código com o comando “npm start” (tem que ter node instalado na máquina);
dar um dublo clique no primeiro item da coluna data e apertar Enter e repetir isso nas linhas abaixo (duplo clique no quadrado verde da célula);
copiar todos os dados do arquivo “table”;
color na tabela do arquivo “dashboard” aba “data”;
Clique em “Dados” no Excel e atualizar dados. 


Fonte dos dados: COVID-19 Brazil API (covid19-brazil-api.vercel.app) 
