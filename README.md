# Instruções para Execução do Docker Compose

Este repositório contém um conjunto de serviços definidos usando Docker Compose, incluindo um servidor Nginx, um aplicativo Node.js e um banco de dados MySQL.

## Pré-requisitos

Certifique-se de que o Docker e o Docker Compose estejam instalados no seu sistema. Para instruções de instalação, consulte a [documentação oficial do Docker](https://docs.docker.com/get-docker/) e a [documentação do Docker Compose](https://docs.docker.com/compose/install/).

## Como Executar

1. Clone o repositório para sua máquina local usando:

```bash
git clone https://github.com/rgomesnet/nodejs_desafio.git
```
    
2. Navegue até a pasta do repositório clonado.
3. Execute o comando abaixo para iniciar os serviços definidos no arquivo `docker-compose.yaml`:

```bash
docker compose up -d
````
    
ou, dependendo da versão do Docker Compose instalada no seu sistema, você pode precisar usar:

```bash
docker-compose up -d
```

## Verificando o Resultado

Após executar os serviços, você pode verificar se eles estão funcionando corretamente de duas maneiras:

### Usando um Navegador

1. Abra seu navegador de internet.
2. Acesse `http://localhost:8080`. Você deverá ver a página inicial ou uma resposta do servidor Nginx, indicando que o serviço está funcionando corretamente.

### Usando o Comando Curl

Abra um terminal e execute o comando:

```bash
curl http://localhost:8080    
```

Se os serviços estiverem funcionando, você receberá uma resposta do servidor Nginx.

## Resultado Esperado

Após execução, você deve ver a frase "Full Cycle Rocks!!" e a lista de nomes cadastrado no banco de dados.

Exemplo de saída esperada com o navegador:
    <h1>Full Cycle</h1><ul><li>Renato</li></ul>

Exemplo de saída esperada com o curl:
```
    <h1>Full Cycle</h1><ul><li>Renato</li></ul>
```

## Observação Importante

- Dependendo da versão do Docker Compose instalada, o comando para executar os serviços pode ser `docker compose up` ou `docker-compose up`. Verifique a documentação do Docker Compose para mais informações.
- Este arquivo `docker-compose.yaml` define três serviços: `nginx`, `app_nodejs` e `db_mysql`. Cada serviço é configurado para atender a requisitos específicos, como descrito no arquivo `docker-compose.yaml`.

## Serviços

- **Nginx**: Disponível na porta 8080.
- **Aplicativo Node.js**: Dependente do serviço de banco de dados MySQL.
- **Banco de dados MySQL**: Contém as configurações necessárias para o armazenamento de dados do aplicativo Node.js.

---

Para mais informações sobre o funcionamento e a configuração dos serviços, consulte os arquivos de configuração individuais dentro de suas respectivas pastas no repositório.
