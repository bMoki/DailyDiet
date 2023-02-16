# DailyDiet

Este app foi desenvolvido a partir de um desafio proposto pelo curso Ignite da Rocketseat.

Desenvolvido utilizando React Native com Typescript e Expo.

## Sobre o desafio

Nesse desafio, desenvolvi uma aplicação de cadastro de refeições, que contém as seguintes funcionalidades:

- Adicionar uma nova refeição
- Editar uma refeição
- Remover uma refeição da listagem
- Mostrar as estatísticas do progresso da dieta
- Navegação entre telas em pilha
- Armazenamento local das refeições

Apesar de serem poucas funcionalidades, precisei relembrar conceitos como:

- Estados
- Imutabilidade do estado
- Listas e chaves no React Native
- Propriedades
- Componentização
- Parâmetros de navegação

### Dificuldades

Neste desafio algumas dificuldades se apresentaram, na maior parte, por causa da manipulação de datas,
ao cadastrar verifico se o dia e a hora inseridos são válidos, e em seguida ordeno a lista conforme as datas e horas.

Devido ao timezone o registro de horas estava dando errado, então de acordo com a necessidade de lidar com datas instalei o pacote Dayjs,
no qual me ajudou a resolver quase todos os meus problemas.

### Linkedin

Acesse a publicação e veja o vídeo do app funcionando!

[Post no Linkedin](https://www.linkedin.com/posts/breno-sonda_react-reactnative-rocketseat-activity-7032056112564584448-dTdV?utm_source=share&utm_medium=member_desktop)
