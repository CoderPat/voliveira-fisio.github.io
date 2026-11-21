---
layout: prose
lang: pt
page_id: privacy
permalink: /politica-de-privacidade/
---
{%- assign s = site.data.settings -%}
{%- assign has_ga = false -%}
{%- if s.google_analytics_id and s.google_analytics_id != "" -%}{%- assign has_ga = true -%}{%- endif -%}
{%- assign has_widget = false -%}
{%- if s.google_reviews_widget and s.google_reviews_widget != "" -%}{%- assign has_widget = true -%}{%- endif -%}
{%- assign has_email = false -%}
{%- if s.email and s.email != "" -%}{%- assign has_email = true -%}{%- endif %}

# Política de privacidade e cookies

Última atualização: novembro de 2026
{: .prose__meta}

Esta página explica que dados pessoais são tratados quando visita este site ou me contacta, para que fins, e que direitos tem ao abrigo do Regulamento Geral sobre a Proteção de Dados (RGPD).

## Responsável pelo tratamento

Vasco Oliveira, fisioterapeuta, cédula profissional de Fisioterapia n.º 2240.

Contacto: WhatsApp {{ s.whatsapp_display }}{% if has_email %} ou [{{ s.email }}](mailto:{{ s.email }}){% endif %}.

## Dados tratados através deste site

Este site não tem formulários, registo de utilizadores nem área reservada.

- **Dados técnicos de acesso.** O site está alojado no GitHub Pages, um serviço da GitHub, Inc. Como acontece com qualquer servidor web, o alojamento pode registar o endereço IP e dados técnicos de cada pedido, por razões de segurança e de funcionamento do serviço.
- **Contacto por WhatsApp.** Ao usar um botão de marcação, sai deste site e a conversa decorre no WhatsApp, um serviço da Meta sujeito aos seus próprios termos e política de privacidade. Recebo o seu número de telefone, o nome de perfil e o conteúdo das mensagens, que utilizo apenas para responder ao seu pedido e gerir a marcação.
{%- if has_email %}
- **Contacto por email.** Se me escrever por email, trato o seu endereço e o conteúdo da mensagem apenas para lhe responder e gerir a marcação.
{%- endif %}

Os tipos de letra e os restantes ficheiros do site são servidos a partir do próprio site, sem pedidos a serviços de terceiros.

## Informação de saúde

Por favor, não envie informação clínica detalhada por mensagem. A informação de saúde é recolhida em consulta, no âmbito da prestação de cuidados e sob dever de sigilo profissional, e não através deste site.

## Finalidades e fundamento jurídico

- **Responder a pedidos de contacto e gerir marcações:** diligências pré-contratuais a pedido do titular dos dados (artigo 6.º, n.º 1, alínea b), do RGPD).
- **Estatísticas de visita e conteúdos externos, quando ativos:** consentimento (artigo 6.º, n.º 1, alínea a), do RGPD), que pode retirar a qualquer momento.

## Cookies
{: #cookies}

Este site não precisa de cookies para funcionar.

{% if has_ga or has_widget -%}
Só com o seu consentimento são ativados os seguintes serviços opcionais:

{% if has_ga -%}
- **Google Analytics (estatísticas de visita).** Permite saber, de forma agregada, quantas pessoas visitam o site e que páginas consultam. Utiliza os cookies `_ga` e `_ga_*`, com duração máxima de dois anos. Fornecedor: Google Ireland Limited.
{% endif -%}
{%- if has_widget -%}
- **Avaliações do Google (conteúdo externo).** Mostra na página inicial as avaliações publicadas no Google. O fornecedor do widget e a Google podem definir cookies próprios e receber o seu endereço IP.
{% endif %}
A sua escolha fica guardada no seu navegador (armazenamento local, sem cookies). Pode alterá-la a qualquer momento em «Preferências de cookies», no rodapé de qualquer página. Se recusar, nenhum destes serviços é carregado.
{%- else -%}
Atualmente, não são utilizados cookies de estatística nem carregados conteúdos de terceiros. Se isso mudar, será pedido o seu consentimento antes de qualquer cookie opcional ser ativado, e esta página será atualizada.
{%- endif %}

## Destinatários e transferências internacionais

Os dados não são vendidos nem cedidos a terceiros. Intervêm apenas os prestadores dos serviços referidos nesta página: a GitHub (alojamento), a Meta (WhatsApp, quando escolhe contactar-me por essa via){% if has_ga or has_widget %} e a Google (serviços opcionais, se os aceitar){% endif %}. Estes prestadores podem tratar dados fora do Espaço Económico Europeu, ao abrigo dos mecanismos previstos no RGPD.

## Conservação

As mensagens de contacto são conservadas apenas durante o tempo necessário para responder ao pedido e gerir a marcação, salvo quando a lei exija um prazo superior.

## Os seus direitos

Tem o direito de aceder aos seus dados, de pedir a sua retificação ou apagamento, de limitar ou de se opor ao tratamento, de pedir a portabilidade e de retirar o consentimento a qualquer momento. Para exercer estes direitos, use os contactos indicados acima.

Tem também o direito de apresentar reclamação à Comissão Nacional de Proteção de Dados (CNPD), em [www.cnpd.pt](https://www.cnpd.pt).

## Alterações a esta política

Esta política pode ser atualizada sempre que o site ou os serviços utilizados se alterem. A data da última atualização está indicada no topo da página.
