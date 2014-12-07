<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>{{title}}</title>
</head>
<body>
{%- block content %}
{%- endblock %}
{%- if env === 'production' %}
{%- include '../partials/production.swig' %}
{%- elseif env === 'development' %}
{%- include '../partials/development.swig' %}
{%- endif %}
</body>
</html>