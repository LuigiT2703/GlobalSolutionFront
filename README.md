# OrbitAlert

Projeto academico de Front-End para a Global Solution 2026 da FIAP. O OrbitAlert e uma plataforma web responsiva inspirada no projeto publicado no Lovable `spaceguard-ai-edge.lovable.app`, com foco em monitoramento ambiental por satelites, previsao por IA e alertas multicanal.

## Problema

Desastres naturais como enchentes, queimadas, secas, tempestades e deslizamentos podem evoluir rapidamente. A falta de informacao antecipada dificulta a resposta de moradores, defesa civil e equipes de apoio.

## Solucao proposta

A OrbitAlert simula uma Earth Intelligence Platform que usa dados orbitais e inteligencia artificial para identificar riscos, acompanhar eventos em tempo real e enviar alertas por diferentes canais.

## Tecnologias utilizadas

- HTML5 semantico
- CSS3 responsivo
- JavaScript puro
- Imagens e icones em `assets/`

## Estrutura de pastas

```text
GlobalSolutionFront/
|-- assets/
|   |-- hero-earth.jpg
|   |-- monitoring-map.jpg
|   |-- logo.svg
|   `-- member-placeholder.svg
|-- css/
|   `-- main.css
|-- js/
|   `-- main.js
|-- contato.html
|-- faq.html
|-- index.html
|-- integrantes.html
|-- previsao.html
|-- solucao-alertas.html
|-- solucao-monitoramento.html
|-- sobre.html
`-- README.md
```

## Paginas do projeto

- `index.html`: pagina inicial com hero, cobertura de desastres, funcionamento e chamada final.
- `solucao-monitoramento.html`: painel de monitoramento com mapa orbital e alertas ativos.
- `previsao.html`: simulador de previsao IA.
- `solucao-alertas.html`: canais de notificacao e niveis de severidade.
- `sobre.html`: problema, proposta e tecnologias.
- `faq.html`: perguntas frequentes com acordeon.
- `integrantes.html`: integrantes com nome, RM, turma, GitHub, LinkedIn e foto.
- `contato.html`: formulario com validacao JavaScript.

## Funcionalidades

- Menu responsivo com botao mobile.
- Links de navegacao entre todas as paginas.
- Modal de detalhes nos alertas ativos.
- FAQ em acordeon.
- Formulario com validacao e `preventDefault()`.
- Simulador de risco na pagina de previsao IA.
- Relogio e contadores operacionais atualizados em tempo real.
- Previsao real carregada pela API publica Open-Meteo.
- Calculo de risco por localidade com temperatura, chuva, vento e umidade.
- Atualizacao automatica dos dados climaticos a cada 10 minutos.
- CSS em `css/main.css`.
- JavaScript em `js/main.js`, carregado no `<head>` com `defer`.

## Dados em tempo real

O projeto usa a API publica Open-Meteo para buscar dados climaticos reais de Porto Alegre, Belem, Recife, Cuiaba e Petrolina. Indicadores como satelites ativos, eventos do dia e alertas criticos sao demonstrativos, pois bases oficiais de focos de calor, deslizamentos e alertas institucionais normalmente exigem integracao especifica, permissao ou chave de API.

## Autores e creditos

Substitua os dados abaixo pelos integrantes reais:

| Nome | RM | Turma | GitHub | LinkedIn |
| --- | --- | --- | --- | --- |
| Nome Completo 1 | RM000000 | 1TDS | https://github.com/ | https://www.linkedin.com/ |
| Nome Completo 2 | RM000000 | 1TDS | https://github.com/ | https://www.linkedin.com/ |
| Nome Completo 3 | RM000000 | 1TDS | https://github.com/ | https://www.linkedin.com/ |

## Link do repositorio

Adicione aqui o link publico do GitHub:

```text
https://github.com/seu-usuario/seu-repositorio
```

## Contato

Adicione aqui o e-mail ou canal de contato do grupo.

```text
grupo@email.com
```

## Observacoes para entrega

- Trocar nomes, RMs, turma, links e fotos antes de entregar.
- Criar repositorio publico no GitHub.
- Fazer pelo menos 15 commits significativos para evitar penalidade.
- Compactar o projeto em `.zip` com os arquivos e a pasta `.git`.
