# **Projeto: User Management System**

## **História do Cliente**

A **ACME Corp**, uma empresa de tecnologia de ponta, está enfrentando um problema crítico em seu sistema de produção. Durante o uso do novo sistema de gerenciamento de usuários, os stakeholders reportaram falhas que estão afetando diretamente a experiência dos clientes.

O sistema consiste em:

1. **API Back-end**: Um serviço para fornecer os dados dos usuários.
2. **Interface Front-end**: Uma aplicação para exibir esses dados.

Porém, **a aplicação não está funcionando conforme o esperado**:

- O front-end não consegue exibir os dados.
- O back-end está retornando respostas inconsistentes.

Com **clientes reclamando** e uma reunião de status marcada para as próximas horas, os stakeholders precisam de uma solução **urgente e confiável**.

---

## **Desafio**

Você foi chamado para atuar como um desenvolvedor sênior e resolver a situação. Sua missão é:

1. Identificar e corrigir os problemas no sistema.
2. Garantir que o sistema volte a funcionar corretamente em produção.

---

## **Requisitos Técnicos**

1. O **back-end** deve:

   - Fornecer os dados corretamente no endpoint `/users`.
   - Retorna os dados em formato JSON com os campos:
     - `id`: identificador único.
     - `name`: nome do usuário.

2. O **front-end** deve:

   - Listar os usuários em uma tabela.
   - Permitir a busca por nome.

3. Durante o desenvolvimento, leve em consideração que:
   - **A aplicação está em produção**. Corrigir os problemas diretamente no `main` **não é permitido**.
   - Use o **Git Flow padrão**:

---

## **Expectativas**

Os stakeholders esperam:

1. **Urgência**: A solução precisa ser entregue o mais rápido possível, sem comprometer a qualidade.
2. **Clareza**: Explique o problema, a solução implementada e o impacto das alterações.
3. **Boas Práticas**: Siga padrões de qualidade e organização do código, incluindo uso correto de controle de versão (Git Flow).

Este é um problema crítico. Demonstre sua habilidade em resolver situações de alta pressão com excelência técnica.

---

## **Critérios de Aceitação**

1. **Funcionalidade Corrigida**:

   - O endpoint `/users` deve retornar os dados corretamente.
   - A tabela no front-end deve exibir os usuários e permitir a busca por nome.

2. **Explicação dos Problemas**:

   - Durante o teste, explique claramente os erros identificados e como foram resolvidos.

3. **Uso de Boas Práticas**:

   - Utilize boas práticas de desenvolvimento tanto no back-end quanto no front-end.

4. **Tempo de Resolução**:
   - Complete a tarefa de forma eficiente, demonstrando habilidade em depuração.

---