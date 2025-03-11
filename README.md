# Teste de Carga Com Jmeter


Este repositório contém um projeto de automação de testes de carga utilizando o [Apache JMeter](https://jmeter.apache.org/). O objetivo é realizar testes de carga e desempenho em aplicações web, analisando os tempos de resposta, taxa de erros e throughput.

## Requisitos

Antes de executar os testes, certifique-se de ter os seguintes requisitos instalados:

- [Java 8+](https://www.oracle.com/java/technologies/javase-downloads.html)
- [Apache JMeter](https://jmeter.apache.org/download_jmeter.cgi)
- Git (opcional, para clonar o repositório)

## Instalação

1. Clone este repositório:
   ```sh
   git clone https://github.com/Muginsk/testescargajmeter.git
   
   cd seu-repositorio
   ```
2. Baixe e instale o Apache JMeter.
3. Abra o JMeter e carregue o script de teste localizado em `Jmeter\testescargajmeter\script`.

## Estrutura do Projeto

```
/
|-- Jmeter/
|   |-- testecargajmeter/
|   |   |-- script
|   |   |   |-- View Results in Table.jmx
|   |   |-- relatorio
|   |   |   |-- HTML
|   |   |   |   |--index.html
|   |   |   |   |--statics.json
|   |   |   |-- summary.csv
   

```

## Como Executar os Testes

### Via Interface Gráfica (GUI)

1. Abra o JMeter.
2. Carregue o arquivo `View Results in Table.jmx`.
3. Configure os parâmetros do teste (se necessário).
4. Clique no botão **Iniciar** para rodar o teste.

### Via Linha de Comando (Non-GUI Mode)

Para executar os testes via terminal e gerar relatórios automaticamente, use o comando:



```sh
jmeter -n -t Jmeter\testescargajmeter\scripttest-plan.jmx -l -o Jmeter\testescargajmeter\relatorio\HTML
```

Isso irá gerar um relatório HTML em `relatorio/HTML/`.

## Análise do Relatório

### Resumo Geral

- **Total de requisições**: 373.448
- **Taxa de erro**: 0.17%
- **Tempo médio de resposta**: 48.41ms
- **Percentil 90%**: 82.00ms
- **Throughput**: 1244.71 transações/segundo

### APDEX (Application Performance Index)

- **Apdex Score**: 0.998 (excelente desempenho)
- **Limiar de tolerância**: 500ms
- **Limiar de frustração**: 1500ms

### Principais Erros Identificados

| Tipo de erro                              | Quantidade | % de erros |
| ----------------------------------------- | ---------- | ---------- |
| Tempo de resposta acima do limite (101ms) | 29         | 4.68%      |
| Tempo de resposta acima do limite (106ms) | 25         | 4.03%      |
| Tempo de resposta acima do limite (102ms) | 25         | 4.03%      |

A maioria dos erros está relacionada ao tempo de resposta ultrapassando o limite esperado. É recomendável analisar a capacidade do servidor e possíveis gargalos na aplicação.


## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

**Autor:** Seu Nome\
**Contato:** [seu.email@email.com](mailto\:seu.email@email.com)

