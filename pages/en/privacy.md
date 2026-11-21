---
layout: prose
lang: en
page_id: privacy
permalink: /en/privacy-policy/
---
{%- assign s = site.data.settings -%}
{%- assign has_ga = false -%}
{%- if s.google_analytics_id and s.google_analytics_id != "" -%}{%- assign has_ga = true -%}{%- endif -%}
{%- assign has_widget = false -%}
{%- if s.google_reviews_widget and s.google_reviews_widget != "" -%}{%- assign has_widget = true -%}{%- endif -%}
{%- assign has_email = false -%}
{%- if s.email and s.email != "" -%}{%- assign has_email = true -%}{%- endif %}

# Privacy and cookie policy

Last updated: November 2026
{: .prose__meta}

This page explains which personal data is processed when you visit this website or contact me, for what purposes, and what rights you have under the General Data Protection Regulation (GDPR).

## Data controller

Vasco Oliveira, physiotherapist, Physiotherapy professional licence no. 2240 (Portugal).

Contact: WhatsApp {{ s.whatsapp_display }}{% if has_email %} or [{{ s.email }}](mailto:{{ s.email }}){% endif %}.

## Data processed through this website

This website has no forms, user accounts or restricted area.

- **Technical access data.** The website is hosted on GitHub Pages, a service of GitHub, Inc. As with any web server, the hosting service may log the IP address and technical details of each request, for security and operational reasons.
- **Contact via WhatsApp.** When you use a booking button, you leave this website and the conversation takes place on WhatsApp, a Meta service subject to its own terms and privacy policy. I receive your phone number, profile name and the content of your messages, which I use only to reply to your request and manage your booking.
{%- if has_email %}
- **Contact by email.** If you write to me by email, I process your address and the content of your message only to reply and manage your booking.
{%- endif %}

Fonts and all other files are served from this website itself, with no requests to third-party services.

## Health information

Please do not send detailed clinical information by message. Health information is collected during appointments, in the course of providing care and under a duty of professional confidentiality, and not through this website.

## Purposes and legal basis

- **Replying to contact requests and managing bookings:** steps taken at the request of the data subject prior to entering into a contract (Article 6(1)(b) GDPR).
- **Visit statistics and external content, when active:** consent (Article 6(1)(a) GDPR), which you can withdraw at any time.

## Cookies
{: #cookies}

This website does not need cookies to work.

{% if has_ga or has_widget -%}
The following optional services are only activated with your consent:

{% if has_ga -%}
- **Google Analytics (visit statistics).** Shows, in aggregate form, how many people visit the website and which pages they view. It uses the `_ga` and `_ga_*` cookies, which last for up to two years. Provider: Google Ireland Limited.
{% endif -%}
{%- if has_widget -%}
- **Google reviews (external content).** Displays reviews published on Google on the home page. The widget provider and Google may set their own cookies and receive your IP address.
{% endif %}
Your choice is stored in your browser (local storage, no cookies). You can change it at any time under "Cookie preferences" in the footer of any page. If you decline, none of these services is loaded.
{%- else -%}
At present, no statistics cookies are used and no third-party content is loaded. If that changes, you will be asked for your consent before any optional cookie is activated, and this page will be updated.
{%- endif %}

## Recipients and international transfers

Your data is not sold or passed on to third parties. Only the providers of the services mentioned on this page are involved: GitHub (hosting), Meta (WhatsApp, when you choose to contact me that way){% if has_ga or has_widget %} and Google (optional services, if you accept them){% endif %}. These providers may process data outside the European Economic Area, under the mechanisms provided for in the GDPR.

## Retention

Contact messages are kept only for as long as needed to reply to your request and manage your booking, unless the law requires a longer period.

## Your rights

You have the right to access your data, to ask for it to be corrected or erased, to restrict or object to its processing, to request portability and to withdraw consent at any time. To exercise these rights, use the contact details above.

You also have the right to lodge a complaint with the Portuguese data protection authority, the Comissão Nacional de Proteção de Dados (CNPD), at [www.cnpd.pt](https://www.cnpd.pt).

## Changes to this policy

This policy may be updated whenever the website or the services it uses change. The date of the last update is shown at the top of the page.
